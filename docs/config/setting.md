---
title: 配置项
icon: tdesign:task-setting
createTime: 2024/12/16 15:53:38
permalink: /config/8y64aloc/
---

<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="white-space: nowrap;">配置项</th>
            <th style="white-space: nowrap;">参数名</th>
            <th style="white-space: nowrap;">说明</th>
            <th style="white-space: nowrap;">默认参数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 20%;">并发数</td>
            <td>PREFETCH_COUNT</td>
            <td>控制<code>并发请求数量</code>的参数</td>
            <td>50</td>
        </tr>
        <tr>
            <td>最大优先级数</td>
            <td>X_MAX_PRIORITY</td>
            <td>允许优先级队列<code>最大</code>优先级的参数</td>
            <td>15</td>
        </tr>
        <tr>
            <td>断点续传</td>
            <td>Breakpoint</td>
            <td>是否使用断点续传功能（<code>内存队列模式不可用</code>）</td>
            <td>True</td>
        </tr>
        <tr>
            <td>超时时间设置</td>
            <td>TIME_OUT</td>
            <td>请求超时时间</td>
            <td>40</td>
        </tr>
        <tr>
            <td>最大重试次数</td>
            <td>max_request</td>
            <td>允许的请求失败<code>最大</code>重试次数</td>
            <td>4</td>
        </tr>
        <tr>
            <td>重试状态码列表</td>
            <td>retry_http_codes</td>
            <td>允许失败（非200）的状态码根据设定的最大重试次数进行进行重试，不在列表中的默认重试3次</td>
            <td>[209, 206, 301, 302, 400, 403, 404, 405, 408, 412, 429, 500, 502, 503, 504, 505, 521]</td>
        </tr>
        <tr>
            <td>UA池代理</td>
            <td>UA_PROXY</td>
            <td>是否添加动态的UA请求头进行网络请求</td>
            <td>False</td>
        </tr>
        <tr>
            <td>IP代理</td>
            <td>IS_PROXY</td>
            <td>是否使用ip代理进行网络请求</td>
            <td>False</td>
        </tr>
        <tr>
            <td>同一ip会话</td>
            <td>IS_SAMEIP</td>
            <td>是否在使用ip代理进行网络请求时使用同一ip进行完整的会话周期（<code>IS_PROXY=True</code> 时生效）</td>
            <td>False</td>
        </tr>
        <tr>
            <td>代理白名单</td>
            <td>Agent_whitelist</td>
            <td>使用ip代理进行网络请求时对添加的白名单进行忽略代理（<code>IS_PROXY=True</code> 时生效）</td>
            <td>['127.0.0.1']</td>
        </tr>
        <tr>
            <td>redis连接</td>
            <td>redis_connection</td>
            <td>是否要打开redis连接</td>
            <td>False</td>
        </tr>
        <tr>
            <td>redis服务地址</td>
            <td>REDIS_HOST_LISTS</td>
            <td>redis队列服务的地址</td>
            <td><pre><code>[{'your host': your port}]</code></pre></td>
        </tr>
        <tr>
            <td>kafka连接</td>
            <td>kafka_connection</td>
            <td>是否要打开kafka连接</td>
            <td>False</td>
        </tr>
        <tr>
            <td>kafka服务地址</td>
            <td>kafka_servers</td>
            <td>kafka队列服务的地址</td>
            <td><pre><code>kafka_servers = {
    'server': 'your_server',
    'topic': 'your_topic'
}</code></pre></td>
        </tr>
        <tr>
            <td>Rabbitmq连接</td>
            <td>IS_connection</td>
            <td>是否要打开Rabbitmq连接</td>
            <td>False</td>
        </tr>
        <tr>
            <td>Rabbitmq服务地址</td>
            <td>Rabbitmq</td>
            <td>Rabbitmq队列服务的地址</td>
            <td><pre><code>Rabbitmq = {
    'Sgin': 'ysh',
    'username': 'your_username',
    'password': 'your_password',
    'host': 'your_host',
    'port': 'your_port',
    'max_retries': 3,
    'async_thread_pool_size': 4,
}</code></pre></td>
        </tr>
        <tr>
            <td>队列最大空置时间</td>
            <td>Waiting_time</td>
            <td>允许队列最大空置时间(<code>秒</code>),切记要比请求超时时间长</td>
            <td>200</td>
        </tr>
        <tr>
            <td>日志级别</td>
            <td>log_level</td>
            <td>日志级别</td>
            <td>DEBUG</td>
        </tr>
    </tbody>
</table>

