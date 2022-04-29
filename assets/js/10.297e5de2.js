(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{433:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"qq私有化部署文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qq私有化部署文档"}},[t._v("#")]),t._v(" QQ私有化部署文档")]),t._v(" "),a("h2",{attrs:{id:"_1-下载go-cq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载go-cq"}},[t._v("#")]),t._v(" 1. 下载go-cq")]),t._v(" "),a("p",[t._v("前往"),a("a",{attrs:{href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-cqhttp release"),a("OutboundLink")],1),t._v("下载对应系统版本。")]),t._v(" "),a("h2",{attrs:{id:"_2-配置服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置服务"}},[t._v("#")]),t._v(" 2. 配置服务")]),t._v(" "),a("p",[t._v("解压")]),t._v(" "),a("blockquote",[a("p",[t._v("Windows下请使用自己熟悉的解压软件自行解压")])]),t._v(" "),a("blockquote",[a("p",[t._v("Linux下在命令行中输入tar -xzvf [文件名]\n使用")])]),t._v(" "),a("p",[a("strong",[t._v("Windows 标准方法")])]),t._v(" "),a("p",[t._v("双击，根据提示生成运行脚本go-cqhttp_*.exe")]),t._v(" "),a("p",[a("code",[t._v("[WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在 [INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.")])]),t._v(" "),a("p",[t._v("配置文件请参考下方config.yml")]),t._v(" "),a("p",[t._v("config.yml配置好后 再次双击运行脚本")]),t._v(" "),a("p",[a("code",[t._v("[INFO]: 登录成功 欢迎使用: balabala")])]),t._v(" "),a("p",[t._v("如出现需要认证的信息, 请自行认证设备。")]),t._v(" "),a("p",[t._v("此时, 基础配置完成")]),t._v(" "),a("p",[a("strong",[t._v("Linux 标准方法")])]),t._v(" "),a("p",[t._v("通过 SSH 连接到服务器")]),t._v(" "),a("p",[t._v("cd到解压目录")]),t._v(" "),a("p",[t._v("输入 , 运行 "),a("code",[t._v("./go-cqhttp")])]),t._v(" "),a("p",[a("code",[t._v("[WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在 [INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.")])]),t._v(" "),a("p",[a("strong",[t._v("配置config.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# go-cqhttp 默认配置文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 账号相关")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# QQ账号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密码为空时使用扫码登录")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("encrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启密码加密")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在线状态 请参考 https://docs.go-cqhttp.org/guide/config.html#在线状态")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("relogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重连设置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首次重连延迟, 单位秒")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重连间隔")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-times")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大重连次数, 0为无限制")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否使用服务器下发的新地址进行重连")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意, 此设置可能导致在海外服务器上连接情况更差")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("use-sso-address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("heartbeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 心跳频率, 单位秒")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -1 为关闭心跳")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上报数据类型")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选: string,array")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("post-format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否忽略无效的CQ码, 如果为假将原样发送")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ignore-invalid-cqcode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否强制分片发送消息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分片发送将会带来更快的速度")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但是兼容性会有些问题")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force-fragment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否将url分片发送")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fix-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载图片等请求网络代理")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy-rewrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否上报自身消息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("report-self-message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除服务端的Reply附带的At")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("remove-reply-at")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为Reply附加更多信息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("extra-reply-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志等级 trace,debug,info,warn,error")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" warn\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启用 DEBUG")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启调试模式")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认中间件锚点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default-middlewares")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&default")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问密钥, 强烈推荐在公网的服务器设置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access-token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 事件过滤器文件目录")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API限速设置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该设置为全局生效")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 原 cqhttp 虽然启用了 rate_limit 后缀, 但是基本没插件适配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前该限速设置为令牌桶算法, 请参考:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rate-limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启用限速")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("frequency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 令牌回复频率, 单位秒")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bucket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 令牌桶大小")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库相关设置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("leveldb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启用内置leveldb数据库")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用将会增加10-20MB的内存占用和一定的磁盘空间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭将无法使用 撤回 回复 get_msg 等上下文相关功能")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接服务列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加方式，同一连接方式可添加多个，具体配置说明请查看文档")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- http: # http 通信")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- ws:   # 正向 Websocket")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- ws-reverse: # 反向 Websocket")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- pprof: #性能分析服务器")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP 通信设置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务端监听地址")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务端监听端口")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5700")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向HTTP超时时间, 单位秒")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小值为5，小于5将会忽略本项设置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("middlewares")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引用默认中间件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向HTTP POST地址列表")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- url: '' # 地址")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  secret: ''           # 密钥")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- url: 127.0.0.1:5701 # 地址")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  secret: ''          # 密钥")]),t._v("\n \n      \n\n\n\n")])])]),a("p",[t._v("再次运行"),a("code",[t._v("./go-cqhttp")])]),t._v(" "),a("p",[a("code",[t._v("[INFO]: 登录成功 欢迎使用: balabala")])]),t._v(" "),a("p",[t._v("如出现需要认证的信息, 请自行认证设备。")]),t._v(" "),a("p",[t._v("此时, 基础配置完成")]),t._v(" "),a("h2",{attrs:{id:"注意-将你配置的端口号在防火墙里面放行或者使用反向代理将你设置的端口绑定到域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-将你配置的端口号在防火墙里面放行或者使用反向代理将你设置的端口绑定到域名"}},[t._v("#")]),t._v(" 注意:将你配置的端口号在防火墙里面放行或者使用反向代理将你设置的端口绑定到域名")]),t._v(" "),a("h2",{attrs:{id:"注意-公网使用一定要配置token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-公网使用一定要配置token"}},[t._v("#")]),t._v(" 注意:公网使用一定要配置token")]),t._v(" "),a("h2",{attrs:{id:"_3-twikoo配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-twikoo配置"}},[t._v("#")]),t._v(" 3. twikoo配置")]),t._v(" "),a("p",[t._v("在twikoo中QQ私有化API配置项填写如下内容")]),t._v(" "),a("p",[t._v("QQ号\n"),a("code",[t._v("http://你的IP地址：端口号（或者域名）/send_private_msg?user_id=QQ号?token=你配置的token")])]),t._v(" "),a("p",[t._v("QQ群\n"),a("code",[t._v("http://你的IP地址：端口号（或者域名）/send_group_msg?token=你配置的token?group_id=群号")])]),t._v(" "),a("p",[t._v("配置完成")])])}),[],!1,null,null,null);s.default=e.exports}}]);