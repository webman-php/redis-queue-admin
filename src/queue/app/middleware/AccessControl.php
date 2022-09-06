<?php
namespace plugin\queue\app\middleware;

use plugin\admin\app\Admin;
use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;

class AccessControl implements MiddlewareInterface
{
    public function process(Request $request, callable $handler): Response
    {
        //Admin::access($request->controller, $request->action);
        return $handler($request);
    }

}