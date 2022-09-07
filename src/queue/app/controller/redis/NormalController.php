<?php

namespace plugin\queue\app\controller\redis;


use support\Request;
use Webman\RedisQueue\Redis;
use plugin\queue\app\controller\Base;
use function view;

class NormalController extends Base
{

    /**
     * 列表
     *
     * @param Request $request
     * @return \support\Response
     */
    public function index(Request $request)
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

    /**
     * 详情
     *
     * @param Request $request
     * @param $queue
     * @return \support\Response
     */
    public function view(Request $request, $queue)
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

}
