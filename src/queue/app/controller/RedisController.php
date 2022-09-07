<?php

namespace plugin\queue\app\controller;

use support\Request;
use Webman\RedisQueue\Redis;
use function view;

class RedisController
{

    public function index()
    {
        return view('redis/index', ['name' => 'hi']);
    }

    public function view()
    {
        $items = [
            ['queue_type' => '普通队列', 'count' => 2, 'type' => 'normal'],
            ['queue_type' => '延迟队列', 'count' => 2, 'type' => 'delay'],
            ['queue_type' => '失败队列', 'count' => 2, 'type' => 'failed'],
        ];
        return $this->json(0, 'ok', [
            'items' => $items,
            'total' => count($items)
        ]);
    }

    public function normal(Request $request)
    {
        $page = $request->get('page', 1);
        $page_size = $request->get('pageSize', 10);
        $prefix = '{redis-queue}-waiting*';
        $all_queues = Redis::keys('{redis-queue}-waiting*');
        $queues = array_slice($all_queues, ($page - 1) * $page_size, $page_size);
        $items = [];
        $len = strlen($prefix) - 1;
        foreach ($queues as $queue) {
            $items[] = [
                'queue' => substr($queue, $len),
                'count' => Redis::llen($queue)
            ];
        }
        return $this->json(0, 'ok', [
            'items' => $items,
            'total' => count($all_queues)
        ]);
    }

    public function normalView(Request $request, $queue)
    {
        $page = $request->get('page', 1);
        $page_size = $request->get('pageSize', 10);
        $start = ($page - 1) * $page_size;
        $queue = "{redis-queue}-waiting$queue";
        $queues = Redis::lrange($queue, $start, $start + $page_size - 1);;
        $length = Redis::llen($queue);
        $items = [];
        foreach ($queues as $q) {
            $msg = json_decode($q, true);
            $time = $msg['time'];
            $items[] = ['message' => $q, 'time' => $time];
        }
        return $this->json(0, 'ok', [
            'items' => $items,
            'total' => $length
        ]);
    }

    public function delayView(Request $request)
    {
        $page = $request->get('page', 1);
        $page_size = $request->get('pageSize', 10);
        $start = ($page - 1) * $page_size;
        $queue = "{redis-queue}-delayed";
        $queues = Redis::zrevrangebyscore($queue, '+inf', '-inf', ['limit' => [$start, $page_size]]);
        $length = Redis::Zlexcount($queue, '-', '+');
        $items = [];
        foreach ($queues as $q) {
            $msg = json_decode($q, true);
            $items[] = ['message' => $q, 'time' => $msg['time'], 'delay' => $msg['delay']];
        }
        return $this->json(0, 'ok', [
            'items' => $items,
            'total' => $length
        ]);
    }

    public function failedView(Request $request)
    {
        $page = $request->get('page', 1);
        $page_size = $request->get('pageSize', 10);
        $start = ($page - 1) * $page_size;
        $queue = "{redis-queue}-failed";
        $queues = Redis::lrange($queue, $start, $start + $page_size - 1);
        $length = Redis::llen($queue);
        $items = [];
        foreach ($queues as $q) {
            $msg = json_decode($q, true);
            $time = $msg['time'];
            $items[] = ['message' => $q, 'time' => $time];
        }
        return $this->json(0, 'ok', [
            'items' => $items,
            'total' => $length
        ]);
    }


    /**
     * 返回格式化json数据
     *
     * @param int $code
     * @param string $msg
     * @param array $data
     * @return \support\Response
     */
    protected function json(int $code, string $msg = 'ok', array $data = [])
    {
        return json(['code' => $code, 'result' => $data, 'message' => $msg, 'type' => $code ? 'error' : 'success']);
    }

}
