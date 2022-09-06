<?php

namespace plugin\queue\app\controller;

use support\Request;
use Webman\RedisQueue\Redis;
use function view;

class Base
{

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
