---
title: Scheduled
icon: mdi:invoice-text-scheduled-outline
createTime: 2024/12/11 11:41:50
permalink: /en/guide/lcjxabil/
---

In some cases, we need a task to automatically execute at specified times periodically. For this, we need a `Scheduled Task`. Our platform has taken this into consideration and supports this feature.

## Creating a Scheduled Task

Creating a scheduled task is no different from creating a regular task.

- First, follow the [Create Task](/guide/cmiasoo1/#create-task) guide to create your task.
- Then, as shown in the [Task Start](/guide/cmiasoo1/#_2-task-start) tutorial, you will see multiple ways to start a task. Select `Scheduled` and the desired execution `Node` when starting the task.

<ImageCard
  image="/scheduled/scheduled.png"
  title="Scheduled Task"
  description="After selecting `Scheduled` and the desired `Node`, click the add button and use the Cron expression to choose the execution cycle of the scheduled task. Once added, the task will execute according to the selected Cron expression cycle."
  href="/"
  author="yuanshaohang"
  date="2024/05/21"
/>

## Cron Expression

- Here you can learn more about the [Cron Expression](https://www.tutorialspoint.com/unix_commands/crontab.htm).

The `Cron` expression format is the same as the `crontab` format on Linux systems. `Cron expressions` are widely used in scheduled task scheduling. By flexibly combining various fields and special characters, you can implement complex scheduling requirements for tasks.

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

- `*`: Represents any value for that field.
- `-`: Represents a range. For example, using `5~20` in the Minutes field means the task will trigger once every minute from the 5th to the 20th minute.
- `/`: Represents the start time and then triggers at a fixed interval. For example, using `5/20` in the Minutes field means the task will trigger at the 5th minute and then every 20 minutes thereafter (e.g., at 25th, 45th minutes, etc.).
- `,`: Represents enumerated values. For example, using `5,20` in the Minutes field means the task will trigger at the 5th and 20th minutes.

::: tip
You can check if your expression meets your expectations at [Cronitor](https://crontab.guru/).
:::


