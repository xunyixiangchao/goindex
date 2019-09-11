# goindex
Google Drive Directory Index

## 功能：
部署在 CloudFlare Workers的小程序。  
可以将 Google Drive 文件以目录形式列出，并直连下载。  
流量走 CloudFlare ，网速由 CloudFlare 决定。

## Demo
[https://index.gd.workers.dev/](https://index.gd.workers.dev/)  


## 安装部署方案1  
1、在本地安装 rclone   
2、按照 https://rclone.org/drive/ 流程进行授权。  
3、执行 rclone config file 查看 rclone.conf 路径。找到root_folder_id和refresh_token记录下来。  
4、下载 https://github.com/donwa/goindex 中的 index.js  并填入 root 和 refresh_token  
5、复制代码 到 CloudFlare 部署。  


## 安装部署方案2  
作者不会记录refresh_token，但为避免纠纷，建议有条件的同学使用方案1进行部署  
1、访问[https://install.gd.workers.dev/](https://install.gd.workers.dev/)  
2、授权认证后，生成部署代码。  
3、复制代码 到 CloudFlare 部署。  

## 文件夹密码：
在google drive 文件中放置 `.password` 文件来设置密码。  
密码文件只能保护该文件不被列举，不能保护该文件夹的子文件夹不被列举。  
也不保护文件夹下文件不被下载。  
  
程序文件中 `root_pass` 只为根目录密码，优先于 `.password` 文件  


## 更新日志  
1.0.3  
修复 `.password` 绕过下载问题。  

1.0.2  
优化前端逻辑  
添加文件预览功能(临时)  
添加前端文件缓存功能  
  
1.0.1  
添加 README.md 、 HEAD.md 支持  
  
1.0.0  
前后端分离，确定基本架构  
添加.password 支持  
