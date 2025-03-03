---
title: 快速开始
icon: game-icons:quick-slash
createTime: 2024/04/16 22:40:03
permalink: /guide/g0m9f1sn/
---
# 快速开始

我们推荐使用 [Docker](installation/2.docker) 安装部署PDATA，如果您对于 Docker 不够了解，推荐您去 [Docker 官网](https://www.docker.com/)
了解更多，并在您的机器上安装 Docker 服务。

## 拉取后台服务

1. 拉取系统后台代码到我们的目标服务器上
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

2. 解压并进入项目根目录
```bash
cd data_backend
```

3. 执行一键启动脚本部署服务
```bash
chmod +x reload_server.sh # 赋予脚本可执行权限
sh reload_server.sh # 重启服务也是执行此脚本，它会自动实现构建docker容器的步骤
```

## 拉取前端服务

1. 从我们内部网络的 Gitlab 服务器上拉取系统前端代码
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

2. 解压并进入项目根目录
```bash
cd data_visualization
```

3. 执行一键启动脚本部署服务
```bash
chmod +x reload_server.sh # 赋予脚本可执行权限
sh reload_server.sh # 重启服务也是执行此脚本，它会自动实现构建docker容器的步骤
```

- 执行完以上步骤以后您可以访问 `http://<master_node_ip>:9358` 来使用PDATA。
