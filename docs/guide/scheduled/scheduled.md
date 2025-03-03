---
title: 定时任务
icon: mdi:invoice-text-scheduled-outline
createTime: 2024/12/11 11:41:50
permalink: /guide/vi87bp99/
---

在一些情况下，我们需要一个任务可以按照我们想让它执行的时间来自动的周期性的执行，那么此时就需要有 `定时任务`
，那么我们的平台也是考虑到了这一点，支持了此项需求。

## 创建定时任务

定时任务的创建与创建普通任务无异。

- 首先根据 [创建任务](/guide/cmiasoo1/#创建任务) 指引，创建您的任务。
- 接着您在 [任务启动](/guide/cmiasoo1/#_2-任务启动) 教学中可以看到启动方式有多种，启动时选择 `定时` 和期望执行的 `节点`。

<ImageCard
  image="/scheduled/scheduled.png"
  title="定时任务"
  description="选择选择 `定时` 和期望执行的 `节点` 后，点击新增按钮，根据 Cron 表达式选择定时任务的执行周期，完成添加后，任务会在您选择的 Crond 表达式周期内执行执行。"
  href="/"
  author="yuanshaohang"
  date="2024/05/21"
/>

## Cron 表达式

- 在这里可以帮助您了解 [Cron 表达式](https://www.tutorialspoint.com/unix_commands/crontab.htm) 

`Cron` 表达式书写格式与linux系统上的 `crontab` 表达式格式一致，`Cron表达式` 在定时任务调度中被广泛使用，通过灵活组合各个字段和特殊字符，可以实现复杂的定时任务需求。

```text
*    *    *   *    *  Command_to_execute
|    |    |    |   |       
|    |    |    |    Day of the Week ( 0 - 6 ) ( Sunday = 0 )
|    |    |    |
|    |    |    Month ( 1 - 12 )
|    |    |
|    |    Day of Month ( 1 - 31 )
|    |
|    Hour ( 0 - 23 )
|
Min ( 0 - 59 )
```

- `*`：表示匹配该域的任意值。
- `-`：表示范围。例如在Minutes域使用5~20，表示从5分到20分钟每分钟触发一次。
- `/`：表示起始时间开始触发，然后每隔固定时间触发一次。例如在Minutes域使用5/20，则意味着5分钟触发一次，而25、45等分别触发一次。
- `,`：表示列出枚举值。例如：在Minutes域使用5,20，则意味着在5和20分每分钟触发一次。

::: tip
您可以到 [Cronitor](https://crontab.guru/) 检验您的表达式是否符合预期。
:::


