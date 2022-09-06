<?php

use plugin\queue\app\controller\RedisController;

return [
    [
        'title' => '消息队列',
        'key' => RedisController::class,
        'path' => '/app-queue',
        'icon' => 'ant-design:profile-filled',
        'url' => '/app/queue'
    ]
];
