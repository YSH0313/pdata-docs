---
title: Introduce
icon: mdi:tooltip-text-outline
createTime: 2024/12/06 14:11:00
permalink: /en/guide/
---

# Pdata

If you already understand what Pdata is and what it does, you can go directly to the [Quick Start](quick-start.md) to
begin using it.

If you are unfamiliar with Pdata, please read the following sections to learn more about it.

## What is Pdata?

Pdata is a `data acquisition platform` built on the unique web scraping framework `Single_process`. It is designed
to efficiently manage and execute data collection tasks. Pdata offers distributed and rapid deployment capabilities,
allowing you to execute tasks, monitor logs in real-time, and track various data metrics. It is particularly suitable
for scenarios requiring high scalability and stability.

## Background of Creation

The idea for Pdata originated from the need for a standardized workflow for web scraping development, as well as the
desire for easier management and maintenance of scraping tasks. As a result, Pdata was developed into a system that is
platform-based, supports quick deployment, real-time monitoring, and high scalability.

## Who is Pdata for?

- `Web Scraping Engineers`: Pdata provides a unified development framework template, allowing developers to focus more
  on the core logic of web scraping without wasting excessive time on repetitive tasks like multi-threading,
  multi-processing, task queues, and message notifications.
- `DevOps Engineers`: With its rapid deployment capabilities, Pdata is equally beneficial for DevOps engineers. It
  enables quick deployment and updates of script tasks for operations, supports multi-node control, and simplifies the
  process with one-click deployment through Docker containers.
- `Data Analysts`: Data analysts can also use Pdata's quick deployment features to streamline their work, saving time
  otherwise spent on repetitive deployment tasks.
- `Others`: While Pdata is particularly adept at handling web scraping tasks, it can be used by any group seeking
  rapid deployment or task automation for their work.

## Key Features

| Category   | Feature                  | Description                                                                                            |
|------------|--------------------------|--------------------------------------------------------------------------------------------------------|
| `Node`     | Node Management          | Register, manage, and monitor multiple nodes in a distributed system                                   |
|            | Scraping Deployment      | Automatically deploy web scraping tasks to multiple nodes and synchronize scripts or related files     |
|            | Scraping Code Updates    | Real-time online updates and editing of script code                                                    |
| `Scraping` | Scraping Data Statistics | Statistics such as the number of projects & tasks, completed and running tasks, and node counts        |
|            | Framework Integration    | Built on the custom asynchronous concurrent distributed scraping framework `Single_process`            |
|            | Data Storage Integration | Built-in middleware and ORM modules for automatic database storage with simple parameter configuration |
|            | Task Scheduling          | Distribute and schedule scraping tasks across multiple nodes in a distributed system                   |
| `Task`     | Task Logs                | Automatically save task logs, which can be viewed in real-time on the front-end UI                     |
|            | Task Status              | Visualize task status information, providing an intuitive view of task progress                        |
| `User`     | User Management [WIP]    | Create, update, and delete user accounts                                                               |
| `Other`    | Message Notifications    | Automatically send notifications to DingTalk when tasks are triggered or completed                     |
