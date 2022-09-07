<?php

namespace plugin\queue\app\controller\redis;

use support\Request;
use Webman\RedisQueue\Redis;
use plugin\queue\app\controller\Base;
use function view;

class DelayController extends Base
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

}
