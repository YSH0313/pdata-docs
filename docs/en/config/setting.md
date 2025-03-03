---
title: Config items
icon: tdesign:task-setting
createTime: 2024/12/16 15:53:38
permalink: /en/config/2l69gbsm/
---
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="white-space: nowrap;">Configuration Item</th>
            <th style="white-space: nowrap;">Parameter Name</th>
            <th style="white-space: nowrap;">Description</th>
            <th style="white-space: nowrap;">Default Parameter</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 20%;">Concurrency</td>
            <td>PREFETCH_COUNT</td>
            <td>Parameter that controls the <code>concurrent request count</code></td>
            <td>50</td>
        </tr>
        <tr>
            <td>Max Priority</td>
            <td>X_MAX_PRIORITY</td>
            <td>Parameter that allows the priority queue's <code>maximum</code> priority</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Breakpoint Resume</td>
            <td>Breakpoint</td>
            <td>Whether to use the breakpoint resume function (<code>Memory queue mode is unavailable</code>)</td>
            <td>True</td>
        </tr>
        <tr>
            <td>Timeout Setting</td>
            <td>TIME_OUT</td>
            <td>Request timeout</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Max Retry Count</td>
            <td>max_request</td>
            <td>Maximum number of retries for request failure</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Retry HTTP Codes</td>
            <td>retry_http_codes</td>
            <td>Failed (non-200) status codes that are retried according to the set maximum retry count. Default retries 3 times for codes not in the list</td>
            <td>[209, 206, 301, 302, 400, 403, 404, 405, 408, 412, 429, 500, 502, 503, 504, 505, 521]</td>
        </tr>
        <tr>
            <td>UA Pool Proxy</td>
            <td>UA_PROXY</td>
            <td>Whether to add dynamic UA request headers for network requests</td>
            <td>False</td>
        </tr>
        <tr>
            <td>IP Proxy</td>
            <td>IS_PROXY</td>
            <td>Whether to use IP proxy for network requests</td>
            <td>False</td>
        </tr>
        <tr>
            <td>Same IP Session</td>
            <td>IS_SAMEIP</td>
            <td>Whether to use the same IP for the entire session cycle when using IP proxy (<code>Effective when IS_PROXY=True</code>)</td>
            <td>False</td>
        </tr>
        <tr>
            <td>Proxy Whitelist</td>
            <td>Agent_whitelist</td>
            <td>When using IP proxy for network requests, ignore the proxy for the added whitelist (<code>Effective when IS_PROXY=True</code>)</td>
            <td>['127.0.0.1']</td>
        </tr>
        <tr>
            <td>Redis Connection</td>
            <td>redis_connection</td>
            <td>Whether to enable the Redis connection</td>
            <td>False</td>
        </tr>
        <tr>
            <td>Redis Service Address</td>
            <td>REDIS_HOST_LISTS</td>
            <td>Address of the Redis queue service</td>
            <td><pre><code>[{'your host': your port}]</code></pre></td>
        </tr>
        <tr>
            <td>Kafka Connection</td>
            <td>kafka_connection</td>
            <td>Whether to enable the Kafka connection</td>
            <td>False</td>
        </tr>
        <tr>
            <td>Kafka Service Address</td>
            <td>kafka_servers</td>
            <td>Address of the Kafka queue service</td>
            <td><pre><code>kafka_servers = {
    'server': 'your_server',
    'topic': 'your_topic'
}</code></pre></td>
        </tr>
        <tr>
            <td>Rabbitmq Connection</td>
            <td>IS_connection</td>
            <td>Whether to enable the Rabbitmq connection</td>
            <td>False</td>
        </tr>
        <tr>
            <td>Rabbitmq Service Address</td>
            <td>Rabbitmq</td>
            <td>Address of the Rabbitmq queue service</td>
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
            <td>Queue Max Idle Time</td>
            <td>Waiting_time</td>
            <td>Maximum idle time allowed for the queue (<code>in seconds</code>). Must be longer than the request timeout</td>
            <td>200</td>
        </tr>
        <tr>
            <td>Log Level</td>
            <td>log_level</td>
            <td>Log level</td>
            <td>DEBUG</td>
        </tr>
    </tbody>
</table>
