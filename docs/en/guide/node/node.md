---
title: Node
icon: fa-brands:linode
createTime: 2024/04/16 22:40:03
permalink: /en/guide/eeb1af9v/
---

In the previous section, when we discussed deploying services using [Docker](../installation/2.docker), attentive readers may have noticed that we mentioned nodes but did not go into detail. In this section, we will provide a comprehensive explanation of nodes.

## Introduction

As previously mentioned, the master and slave nodes on the server are essentially the same, with the key difference being the choice of startup script. So why differentiate between master and slave nodes? This is because the master node is responsible for managing and storing all task instance files. During execution, the master node will notify the slave nodes through the `grpc` architecture, instructing them to pull the latest related files from the master node. 

In other words, the biggest distinction between master and slave nodes lies in the management and invocation of `task instance files`. This setup ensures that even when slave nodes are removed or destroyed, the `task instance files` remain intact on the master node.

## Master-Slave Relationship

::: center
![Master-Slave](/nodes/Master-slave.png)
:::
This demonstration only shows a single slave node, but the same process applies when there are multiple nodes. The master node is responsible for scheduling and task distribution to the slave nodes. Each slave node actively pulls the latest `task instance files` from the master node, and then reports the task status back to the master node.

::: tip
There can only be one master node. If two master nodes are deployed, they will not communicate with each other and will function as independent master nodes.
:::
## Node Usage

- You can actively choose the execution node when creating a task.
- You can specify the node to run the task when executing.
- You can `View Node Status` on the resource monitoring page.
- You can `Add New Node` on the resource monitoring page.

## Master Node

The master node is the core of the entire system. It is responsible for scheduling nodes, handling communication between nodes, assigning tasks to child nodes, receiving status feedback, and saving and managing task instance files. It also interacts with the frontend service via API.

## Slave Node

The slave node is responsible for executing tasks as scheduled by the master node. Its capacity is limited by the performance of the machine on which it is deployed (e.g., CPU, memory, disk space). Therefore, to improve the performance of the service cluster, we can achieve this by upgrading the configuration or increasing the number of slave nodes.
