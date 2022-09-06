<?php

use plugin\queue\app\controller\redis\DelayController;
use plugin\queue\app\controller\redis\FailedController;
use plugin\queue\app\controller\redis\NormalController;

return [
    [
        'title' => '消息队列',
        'name' => 'app-queue',
        'path' => '/app-queue',
        'icon' => 'ant-design:profile-filled',
        'children' => [
            [
                'title' => '正常队列',
                'name' => NormalController::class,
                'path' => 'normal',
                'frame_src' => '/app/queue#redis/normal',
            ],
            [
                'title' => '延迟队列',
                'name' => DelayController::class,
                'path' => 'delay',
                'frame_src' => '/app/queue#redis/delay',
            ],
            [
                'title' => '失败队列',
                'name' => FailedController::class,
                'path' => 'failed',
                'frame_src' => '/app/queue#redis/failed',
            ],
        ]
    ]
];
