<?php

namespace plugin\queue\app\controller\redis;


use support\Request;
use Webman\RedisQueue\Redis;
use plugin\queue\app\controller\Base;
use function view;

class FailedController extends Base
{
    /**
     * 详情
     *
     * @param Request $request
     * @return \support\Response
     */
    public function view(Request $request)
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

}
