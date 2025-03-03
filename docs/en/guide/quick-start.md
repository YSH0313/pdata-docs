---
title: Quick start
icon: game-icons:quick-slash
createTime: 2024/04/16 22:40:03
permalink: /en/guide/g5mq6x6o/
---

# Quick Start

We recommend using [Docker](installation/2.docker) to install and deploy PDATA. If you are not familiar with Docker, we
suggest visiting the [official Docker website](https://www.docker.com/) to learn more and install the Docker service on
your machine.

## Pull Backend Service

1. Pull the backend code to the target server
   ::: tabs
   @tab :[devicon:git]:git

```bash
git clone http://your_respository_domain/yuanshaohang/data_backend.git
```

@tab :[file-icons:wget]:wget

```bash
wget http://your_respository_domain/yuanshaohang/data_backend.git
```

:::

2. Extract and navigate to the project's root directory

```bash
cd data_backend
```

3. Run the one-click start script to deploy the service

```bash
chmod +x reload_server.sh # Grant execution permissions to the script
sh reload_server.sh # This script is also used to restart the service. It will automatically build the Docker container.
```

## Pull Frontend Service

1. Pull the frontend code from the internal GitLab server
   ::: tabs
   @tab :[devicon:git]:git

```bash
git clone http://your_respository_domain/yuanshaohang/data_visualization.git
```

@tab :[file-icons:wget]:wget# wget

```bash
wget http://your_respository_domain/yuanshaohang/data_visualization.git
```

:::

2. Extract and navigate to the project's root directory

```bash
cd data_visualization
```

3. Run the one-click start script to deploy the service

```bash
chmod +x reload_server.sh # Grant execution permissions to the script
sh reload_server.sh # This script is also used to restart the service. It will automatically build the Docker container.
```

- After completing the above steps, you can access `http://<master_node_ip>:9358` to use PDATA.
