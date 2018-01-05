* 一、 Git 常用命令速查
* 
* git branch 查看本地所有分支
* git status 查看当前状态 
* git commit 提交 
* git branch -a 查看所有的分支
* git branch -r 查看远程所有分支
* git commit -am "init" 提交并且加注释 
* git remote add origin git@192.168.1.119:ndshow
* git push origin master 将文件给推到服务器上 
* git remote show origin 显示远程库origin里的资源 
* git push origin master:develop
* git push origin master:hb-dev将本地库与服务器上的库进行关联 
* git checkout --track origin/dev 切换到远程dev分支
* git branch -D master develop 删除本地库develop
* git checkout -b dev 建立一个新的本地分支dev
* git merge origin/dev 将分支dev与当前分支进行合并
* git checkout dev 切换到本地dev分支
* git remote show 查看远程库
* git add .
* git rm 文件名(包括路径) 从git中删除指定文件
* git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
* git config --list 看所有用户
* git ls-files 看已经被提交的
* git rm [file name] 删除一个文件
* git commit -a 提交当前repos的所有的改变
* git add [file name] 添加一个文件到git index
* git commit -v 当你用－v参数的时候可以看commit的差异
* git commit -m "This is the message describing the commit"添加commit信息
* git commit -a -a是代表add，把所有的change加到git index里然后再commit
* git commit -a -v 一般提交命令
* git log 看你commit的日志
* git diff 查看尚未暂存的更新
* git rm a.a 移除文件(从暂存区和工作区中删除)
* git rm --cached a.a 移除文件(只从暂存区中删除)
* git commit -m "remove" 移除文件(从Git中删除)
* git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
* git diff --cached 或 $ git diff --staged 查看尚未提交的更新
* git stash push 将文件给push到一个临时空间中
* git stash pop 将文件从临时空间pop下来
* ---------------------------------------------------------
* git remote add origin git@github.com:username/Hello-World.git
* git push origin master 将本地项目给提交到服务器中
* -----------------------------------------------------------
* git pull 本地与服务器端同步
* -----------------------------------------------------------------
* git push (远程仓库名) (分支名) 将本地分支推送到服务器上去。
* git push origin serverfix:awesomebranch
* ------------------------------------------------------------------
* git fetch 相当于是从远程获取最新版本到本地，不会自动merge
* git commit -a -m "log_message" (-a是提交所有改动，-m是加入log信息) 本地修改同步至服务器端：
* git branch branch_0.1 master 从主分支master创建branch_0.1分支
* git branch -m branch_0.1 branch_1.0 将branch_0.1重命名为branch_1.0
* git checkout branch_1.0/master 切换到branch_1.0/master分支
* du -hs
* git branch 删除远程branch
* git pushorigin :branch_remote_name
* gitbranch -r -d branch_remote_name
* 初始化版本库，并提交到远程服务器端
* mkdir WebApp
* cd WebApp
* git init本地初始化
* touch README
* git add README添加文件
* git commit -m 'first commit'
* git remote add origin git@github.com:daixu/WebApp.git增加一个远程服务器端
* 上面的命令会增加URL地址为'git@github.com:daixu/WebApp.
* git'，名称为origin的远程服务器库，以后提交代码的时候只需要使用origin别名即可
* 
###   二、 Git命令速查表
* 
* 1、常用的Git命令
* 
* 命令
* 	
* 简要说明
* 添加至暂存区
* gitadd–interactive
* git apply
* 应用补丁
* git am
* 应用邮件格式补丁
* gitannotate
* 同义词，等同于 gitblame
* gitarchive
* 文件归档打包
* gitbisect
* 二分查找
* git blame
* 	
* 
* 文件逐行追溯
* 
* gitbranch
* 	
* 
* 分支管理
* 
* gitcat-file
* 	
* 
* 版本库对象研究工具
* 
* gitcheckout
* 	
* 
* 检出到工作区、切换或创建分支
* 
* gitcherry-pick
* 	
* 
* 提交拣选
* 
* gitcitool
* 	
* 
* 图形化提交，相当于 gitgui 命令
* 
* git clean
* 	
* 
* 清除工作区未跟踪文件
* 
* git clone
* 	
* 
* 克隆版本库
* 
* gitcommit
* 	
* 
* 提交
* 
* gitconfig
* 	
* 
* 查询和修改配置
* 
* gitdescribe
* 	
* 
* 通过里程碑直观地显示提交ID
* 
* git diff
* 	
* 
* 差异比较
* 
* gitdifftool
* 	
* 
* 调用图形化差异比较工具
* 
* git fetch
* 	
* 
* 获取远程版本库的提交
* 
* gitformat-patch
* 	
* 
* 创建邮件格式的补丁文件。参见 gitam 命令
* 
* git grep
* 	
* 
* 文件内容搜索定位工具
* 
* git gui
* 	
* 
* 基于Tcl/Tk的图形化工具，侧重提交等操作
* 
* git help
* 	
* 
* 帮助
* 
* git init
* 	
* 
* 版本库初始化
* 
* gitinit-db*
* 	
* 
* 同义词，等同于 gitinit
* 
* git log
* 	
* 
* 显示提交日志
* 
* git merge
* 	
* 
* 分支合并
* 
* gitmergetool
* 	
* 
* 图形化冲突解决
* 
* git mv
* 	
* 
* 重命名
* 
* git pull
* 	
* 
* 拉回远程版本库的提交
* 
* git push
* 	
* 
* 推送至远程版本库
* 
* gitrebase
* 	
* 
* 分支变基
* 
* gitrebase–interactive
* 	
* 
* 交互式分支变基
* 
* gitreflog
* 	
* 
* 分支等引用变更记录管理
* 
* gitremote
* 	
* 
* 远程版本库管理
* 
* gitrepo-config*
* 	
* 
* 同义词，等同于 gitconfig
* 
* git reset
* 	
* 
* 重置改变分支“游标”指向
* 
* gitrev-parse
* 	
* 
* 将各种引用表示法转换为哈希值等
* 
* gitrevert
* 	
* 
* 反转提交
* 
* git rm
* 	
* 
* 删除文件
* 
* git show
* 	
* 
* 显示各种类型的对象
* 
* gitstage*
* 	
* 
* 同义词，等同于 gitadd
* 
* git stash
* 	
* 
* 保存和恢复进度
* 
* gitstatus
* 	
* 
* 显示工作区文件状态
* 
* git tag
* 	
* 
* 里程碑管理
* 
*  
* 
* 2、对象库操作相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitcommit-tree
* 	
* 
* 从树对象创建提交
* 
* githash-object
* 	
* 
* 从标准输入或文件计算哈希值或创建对象
* 
* gitls-files
* 	
* 
* 显示工作区和暂存区文件
* 
* gitls-tree
* 	
* 
* 显示树对象包含的文件
* 
* git mktag
* 	
* 
* 读取标准输入创建一个里程碑对象
* 
* gitmktree
* 	
* 
* 读取标准输入创建一个树对象
* 
* gitread-tree
* 	
* 
* 读取树对象到暂存区
* 
* gitupdate-index
* 	
* 
* 工作区内容注册到暂存区及暂存区管理
* 
* gitunpack-file
* 	
* 
* 创建临时文件包含指定blob 的内容
* 
* gitwrite-tree
* 	
* 
* 从暂存区创建一个树对象
* 
*  
* 
* 3、引用操作相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitcheck-ref-format
* 	
* 
* 检查引用名称是否符合规范
* 
* gitfor-each-ref
* 	
* 
* 引用迭代器，用于shell编程
* 
* gitls-remote
* 	
* 
* 显示远程版本库的引用
* 
* gitname-rev
* 	
* 
* 将提交ID显示为友好名称
* 
* gitpeek-remote*
* 	
* 
* 过时命令，请使用 gitls-remote
* 
* gitrev-list
* 	
* 
* 显示版本范围
* 
* gitshow-branch
* 	
* 
* 显示分支列表及拓扑关系
* 
* gitshow-ref
* 	
* 
* 显示本地引用
* 
* gitsymbolic-ref
* 	
* 
* 显示或者设置符号引用
* 
* gitupdate-ref
* 	
* 
* 更新引用的指向
* 
* gitverify-tag
* 	
* 
* 校验GPG 签名的Tag
* 
*  
* 
* 4、版本库管理相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitcount-objects
* 	
* 
* 显示松散对象的数量和磁盘占用
* 
* gitfilter-branch
* 	
* 
* 版本库重构
* 
* git fsck
* 	
* 
* 对象库完整性检查
* 
* gitfsck-objects*
* 	
* 
* 同义词，等同于 gitfsck
* 
* git gc
* 	
* 
* 版本库存储优化
* 
* gitindex-pack
* 	
* 
* 从打包文件创建对应的索引文件
* 
* gitlost-found*
* 	
* 
* 过时，请使用 git fsck–lost-found 命令
* 
* gitpack-objects
* 	
* 
* 从标准输入读入对象ID，打包到文件
* 
* gitpack-redundant
* 	
* 
* 查找多余的pack 文件
* 
* gitpack-refs
* 	
* 
* 将引用打包到.git/packed-refs 文件中
* 
* git prune
* 	
* 
* 从对象库删除过期对象
* 
* gitprune-packed
* 	
* 
* 将已经打包的松散对象删除
* 
* gitrelink
* 	
* 
* 为本地版本库中相同的对象建立硬连接
* 
* gitrepack
* 	
* 
* 将版本库未打包的松散对象打包
* 
* gitshow-index
* 	
* 
* 读取包的索引文件，显示打包文件中的内容
* 
* gitunpack-objects
* 	
* 
* 从打包文件释放文件
* 
* gitverify-pack
* 	
* 
* 校验对象库打包文件
* 
*  
* 
* 5、数据传输相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitfetch-pack
* 	
* 
* 执行 gitfetch 或 git pull 命令时在本地执行此命令，用于从其他版
* 
* 本库获取缺失的对象
* 
* gitreceive-pack
* 	
* 
* 执行 gitpush 命令时在远程执行的命令，用于接受推送的数据
* 
* gitsend-pack
* 	
* 
* 执行 gitpush 命令时在本地执行的命令，用于向其他版本库推
* 
* 送数据
* 
* gitupload-archive
* 	
* 
* 执行 git archive–remote 命令基于远程版本库创建归档时，
* 
* 远程版本库执行此命令传送归档
* 
* gitupload-pack
* 	
* 
* 执行 gitfetch 或 git pull 命令时在远程执行此命令，将对象
* 
* 打包、上传
* 
*  
* 
* 6、邮件相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitimap-send
* 	
* 
* 将补丁通过IMAP 发送
* 
* gitmailinfo
* 	
* 
* 从邮件导出提交说明和补丁
* 
* gitmailsplit
* 	
* 
* 将mbox 或 Maildir 格式邮箱中邮件逐一提取为文件
* 
* gitrequest-pull
* 	
* 
* 创建包含提交间差异和执行PULL操作地址的信息
* 
* gitsend-email
* 	
* 
* 发送邮件
* 
*  
* 
* 7、协议相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitdaemon
* 	
* 
* 实现Git协议
* 
* githttp-backend
* 	
* 
* 实现HTTP协议的CGI程序，支持智能HTTP协议
* 
* gitinstaweb
* 	
* 
* 即时启动浏览器通过gitweb 浏览当前版本库
* 
* git shell
* 	
* 
* 受限制的shell，提供仅执行Git命令的SSH访问
* 
* gitupdate-server-info
* 	
* 
* 更新哑协议需要的辅助文件
* 
* githttp-fetch
* 	
* 
* 通过HTTP协议获取版本库
* 
* githttp-push
* 	
* 
* 通过HTTP/DAV协议推送
* 
* gitremote-ext
* 	
* 
* 由Git命令调用，通过外部命令提供扩展协议支持
* 
* gitremote-fd
* 	
* 
* 由Git命令调用，使用文件描述符作为协议接口
* 
* gitremote-ftp
* 	
* 
* 由Git命令调用，提供对FTP协议的支持
* 
* gitremote-ftps
* 	
* 
* 由Git命令调用，提供对FTPS协议的支持
* 
* gitremote-http
* 	
* 
* 由Git命令调用，提供对HTTP协议的支持
* 
* gitremote-https
* 	
* 
* 由Git命令调用，提供对HTTPS协议的支持
* 
* gitremote-testgit
* 	
* 
* 协议扩展示例脚本
* 
*  
* 
* 8、版本库转换和交互相关命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitarchimport
* 	
* 
* 导入Arch版本库到Git
* 
* gitbundle
* 	
* 
* 提交打包和解包，以便在不同版本库间传递
* 
* gitcvsexportcommit
* 	
* 
* 将Git的一个提交作为一个CVS检出
* 
* gitcvsimport
* 	
* 
* 导入CVS版本库到Git。或者使用cvs2git
* 
* gitcvsserver
* 	
* 
* Git的CVS协议模拟器，可供CVS命令访问Git版本库
* 
* gitfast-export
* 	
* 
* 将提交导出为git-fast-import 格式
* 
* gitfast-import
* 	
* 
* 其他版本库迁移至Git的通用工具
* 
* git svn
* 	
* 
* Git 作为前端操作Subversion
* 
*  
* 
* 9、合并相关的辅助命令
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitmerge-base
* 	
* 
* 供其他脚本调用，找到两个或多个提交最近的共同祖先
* 
* gitmerge-file
* 	
* 
* 针对文件的两个不同版本执行三向文件合并
* 
* gitmerge-index
* 	
* 
* 对index中的冲突文件调用指定的冲突解决工具
* 
* gitmerge-octopus
* 	
* 
* 合并两个以上分支。参见 gitmerge 的octopus合并策略
* 
* gitmerge-one-file
* 	
* 
* 由 gitmerge-index 调用的标准辅助程序
* 
* gitmerge-ours
* 	
* 
* 合并使用本地版本，抛弃他人版本。参见git merge
* 
* 的ours合并策略
* 
* gitmerge-recursive
* 	
* 
* 针对两个分支的三向合并。参见 gitmerge 的recursive合并策略
* 
* gitmerge-resolve
* 	
* 
* 针对两个分支的三向合并。参见 gitmerge 的resolve合并策略
* 
* gitmerge-subtree
* 	
* 
* 子树合并。参见 gitmerge 的 subtree 合并策略
* 
* gitmerge-tree
* 	
* 
* 显式三向合并结果，不改变暂存区
* 
* gitfmt-merge-msg
* 	
* 
* 供执行合并操作的脚本调用，用于创建一个合并提交说明
* 
* gitrerere
* 	
* 
* 重用所记录的冲突解决方案
* 
*  
* 
* 10、 杂项
* 
*  
* 
*  
* 
* 命令
* 	
* 
* 简要说明
* 
* gitbisect–helper
* 	
* 
* 由 gitbisect 命令调用，确认二分查找进度
* 
* gitcheck-attr
* 	
* 
* 显示某个文件是否设置了某个属性
* 
* gitcheckout-index
* 	
* 
* 从暂存区拷贝文件至工作区
* 
* gitcherry
* 	
* 
* 查找没有合并到上游的提交
* 
* gitdiff-files
* 	
* 
* 比较暂存区和工作区，相当于 gitdiff –raw
* 
* gitdiff-index
* 	
* 
* 比较暂存区和版本库，相当于 gitdiff –cached –raw
* 
* gitdiff-tree
* 	
* 
* 比较两个树对象，相当于 git diff–raw A B
* 
* gitdifftool–helper
* 	
* 
* 由 gitdifftool 命令调用，默认要使用的差异比较工具
* 
* gitget-tar-commit-id
* 	
* 
* 从 gitarchive 创建的 tar 包中提取提交ID
* 
* gitgui–askpass
* 	
* 
* 命令 gitgui 的获取用户口令输入界面
* 
* git notes
* 	
* 
* 提交评论管理
* 
* gitpatch-id
* 	
* 
* 补丁过滤行号和空白字符后生成补丁唯一ID
* 
* gitquiltimport
* 	
* 
* 将Quilt补丁列表应用到当前分支
* 
* gitreplace
* 	
* 
* 提交替换
* 
* gitshortlog
* 	
* 
* 对 gitlog 的汇总输出，适合于产品发布说明
* 
* gitstripspace
* 	
* 
* 删除空行，供其他脚本调用
* 
* gitsubmodule
* 	
* 
* 子模组管理
* 
* gittar-tree
* 	
* 
* 过时命令，请使用 gitarchive
* 
* git var
* 	
* 
* 显示Git 环境变量
* 
* gitweb–browse
* 	
* 
* 启动浏览器以查看目录或文件
* 
* gitwhatchanged
* 	
* 
* 显示提交历史及每次提交的改动
* 
* git-mergetool–lib
* 	
* 
* 包含于其他脚本中，提供合并/差异比较工具的选择和执行
* 
* git-parse-remote
* 	
* 
* 包含于其他脚本中，提供操作远程版本库的函数
* 
* git-sh-setup
* 	
* 
* 包含于其他脚本中，提供shell 编程的函数库
* 
*  
* 
*  
* 
* 
* 1.创建一个新的repository：
* 
*  
* 
* 先在github上创建并写好相关名字，描述。
* 
*  
* 
* $cd ~/hello-world      //到hello-world目录
* 
*  
* 
* $git init                 //初始化
* 
*  
* 
* $git add .               //把所有文件加入到索引（不想把所有文件加入，可以用gitignore或add 具体文件)
* 
*  
* 
* $git commit            //提交到本地仓库，然后会填写更新日志( -m “更新日志”也可)
 
* $git remote add origingit@github.com:WadeLeng/hello-world.git      //增加到remote
 
* $git push origin master   //push到github上
 
* 2.更新项目（新加了文件）：
 
* $cd ~/hello-world
 
* $git add .              //这样可以自动判断新加了哪些文件，或者手动加入文件名字
 
* $git commit           //提交到本地仓库
 
* $git push origin master   //不是新创建的，不用再add到remote上了
 
* 3.更新项目（没新加文件，只有删除或者修改文件）：
 
* $cd ~/hello-world
 
* $git commit -a        //记录删除或修改了哪些文件
 
* $git push origin master //提交到github
 
* 4.忽略一些文件，比如*.o等:
 
* $cd ~/hello-world
* $vim .gitignore   //把文件类型加入到.gitignore中，保存
 
* 然后就可以git add .能自动过滤这种文件
 
* 5.clone代码到本地：
 
* $gitclone git@github.com:WadeLeng/hello-world.git
 
* 假如本地已经存在了代码，而仓库里有更新，把更改的合并到本地的项目：
 
* $git fetch origin   //获取远程更新
 
* $git merge origin/master//把更新的内容合并到本地分支

* 6.撤销
 
* $git reset
* 7.删除
* 1.$ git remoteadd origingit@github.com:WadeLeng/hello-world.git
*  解决办法：$ gitremote rm origin
*  然后在执行：$ gitremote add origingit@github.com:WadeLeng/hello-world.git 就不会报错误了

*  2. $ git pushorigin master

*  错误提示：error:failed topush som refs to
 
*  解决办法：$ git pullorigin master //先把远程服务器github上面的文件拉先来，再push 上去。