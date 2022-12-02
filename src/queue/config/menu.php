<?php

use plugin\queue\app\controller\redis\DelayController;
use plugin\queue\app\controller\redis\FailedController;
use plugin\queue\app\controller\redis\NormalController;

return [
    [
        'title' => '消息队列',
        'key' => 'app-queue',
        'icon' => 'layui-icon-align-left',
        'weight' => 0,
        'type' => 0,
        'children' => [
            [
                'title' => '正常队列',
                'key' => NormalController::class,
                'href' => '/app/queue#redis/normal',
                'type' => 1,
                'weight' => 0,
            ],
            [
                'title' => '延迟队列',
                'key' => DelayController::class,
                'href' => '/app/queue#redis/delay',
                'type' => 1,
                'weight' => 0,
            ],
            [
                'title' => '失败队列',
                'key' => FailedController::class,
                'href' => '/app/queue#redis/failed',
                'type' => 1,
                'weight' => 0,
            ]
        ]
    ]
];
