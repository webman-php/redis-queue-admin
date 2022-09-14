<?php

use plugin\queue\app\controller\redis\NormalController;
use Webman\Route;

Route::any('/app/queue/redis/normal/view/{queue}', [NormalController::class, 'view']);

Route::any('/app/queue', function () {
    return response()->withFile(base_path() . '/plugin/queue/public/index.html');
});