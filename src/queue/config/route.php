<?php

use plugin\queue\app\controller\RedisController;
use Webman\Route;

Route::any('/app/queue/redis/normal/view/{queue}', [RedisController::class, 'normalView']);
Route::any('/app/queue/redis/delay/view', [RedisController::class, 'delayView']);
Route::any('/app/queue/redis/failed/view', [RedisController::class, 'failedView']);