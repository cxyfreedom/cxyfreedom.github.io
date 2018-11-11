---
title: NexT 主题优化
date: 2018-03-26 10:21:27
tags:
categories:
images: "https://i.loli.net/2018/11/11/5be7c6f99c82a.png"
---
为了能够让博客变得更加有特色，本文会教你如何对 Next 主题进行个性化的定制。

<!-- more -->
## 元素微调自定义篇

### 定位元素

用谷歌或者火狐浏览器打开博客页面，按下F12进入调试
先点击定位按钮，然后选择元素，然后在定位出来的样式进行修改，调到自己喜欢的样子。

### 有趣的样式

在 `themes/next/source/css/_custom/custom.styl` 中添加以下样式：

```css
/*
有趣的自定义样式
*/
// 下载样式
a#download {
  display: inline-block;
  padding: 0 10px;
  color: #000;
  background: transparent;
  border: 2px solid #000;
  border-radius: 2px;
  transition: all .5s ease;
  font-weight: bold;
  &:hover {
    background: #000;
    color: #fff;
  }
}

// 颜色块-黄
span#inline-yellow {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 80%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0;
  background-color: #f0ad4e;
}

// 颜色块-绿
span#inline-green {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 80%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0;
  background-color: #5cb85c;
}

// 颜色块-蓝
span#inline-blue {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 80%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0;
  background-color: #2780e3;
}

// 颜色块-紫
span#inline-purple {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 80%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0;
  background-color: #9954bb;
}

// 左侧边框红色块级
p#div-border-left-red {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #df3e3e;
}

// 左侧边框黄色块级
p#div-border-left-yellow {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #f0ad4e;
}

// 左侧边框绿色块级
p#div-border-left-green {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #5cb85c;
}

// 左侧边框蓝色块级
p#div-border-left-blue {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #2780e3;
}

// 左侧边框紫色块级
p#div-border-left-purple {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #9954bb;
}

// 右侧边框红色块级
p#div-border-right-red {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-right-width: 5px;
  border-radius: 3px;
  border-right-color: #df3e3e;
}

// 右侧边框黄色块级
p#div-border-right-yellow {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-right-width: 5px;
  border-radius: 3px;
  border-right-color: #f0ad4e;
}

// 右侧边框绿色块级
p#div-border-right-green {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-right-width: 5px;
  border-radius: 3px;
  border-right-color: #5cb85c;
}

// 右侧边框蓝色块级
p#div-border-right-blue {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-right-width: 5px;
  border-radius: 3px;
  border-right-color: #2780e3;
}

// 右侧边框紫色块级
p#div-border-right-purple {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-right-width: 5px;
  border-radius: 3px;
  border-right-color: #9954bb;
}

// 上侧边框红色
p#div-border-top-red {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-top-width: 5px;
  border-radius: 3px;
  border-top-color: #df3e3e;
}

// 上侧边框黄色
p#div-border-top-yellow {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-top-width: 5px;
  border-radius: 3px;
  border-top-color: #f0ad4e;
}

// 上侧边框绿色
p#div-border-top-green {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-top-width: 5px;
  border-radius: 3px;
  border-top-color: #5cb85c;
}

// 上侧边框蓝色
p#div-border-top-blue {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-top-width: 5px;
  border-radius: 3px;
  border-top-color: #2780e3;
}

// 上侧边框紫色
p#div-border-top-purple {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-top-width: 5px;
  border-radius: 3px;
  border-top-color: #9954bb;
}
```

用法如下：

#### 文字增加背景色块

<span id="inline-blue">站点配置文件</span>，<span id="inline-purple">主题配置文件</span>

```
<span id="inline-blue">站点配置文件</span>，
<span id="inline-purple">主题配置文件</span>
```

#### 引用边框变色

<p id="div-border-left-red">如果没有安装成功，那可能就是墙的原因。建议下载 `Node.js` 直接安装。</p>
<p id="div-border-top-blue">关于更多基本操作和基础知识，请查阅 [Hexo](https://hexo.io/zh-cn/) 与 [NexT](http://theme-next.iissnan.com/) 官方文档.</p>

```
<p id="div-border-left-red">如果没有安装成功，那可能就是墙的原因。建议下载 `Node.js` 直接安装。</p>
<p id="div-border-top-blue">关于更多基本操作和基础知识，请查阅 [Hexo](https://hexo.io/zh-cn/) 与 [NexT](http://theme-next.iissnan.com/) 官方文档.</p>
```

#### 在文档中增加图标

* <i class="fa fa-pencil"></i>支持Markdown
<i>Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件。</i>
* <i class="fa fa-cloud-upload"></i>一件部署
<i>只需一条指令即可部署到Github Pages，或其他网站</i>
* <i class="fa fa-cog"></i>丰富的插件
<i>Hexo 拥有强大的插件系统，安装插件可以让 Hexo 支持 Jade, CoffeeScript。</i>

```
* <i class="fa fa-pencil"></i>支持Markdown
<i>Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件。</i>
* <i class="fa fa-cloud-upload"></i>一件部署
<i>只需一条指令即可部署到Github Pages，或其他网站</i>
* <i class="fa fa-cog"></i>丰富的插件
<i>Hexo 拥有强大的插件系统，安装插件可以让 Hexo 支持 Jade, CoffeeScript。</i>
```

更多示例

<i class="fa fa-github"></i> `<i class="fa fa-github"></i>`
<i class="fa fa-github fa-lg"></i> `<i class="fa fa-github fa-lg"></i>`
<i class="fa fa-github fa-2x"></i> `<i class="fa fa-github fa-2x"></i>`

采用的是[Font Awesome](http://fontawesome.io/examples/)的图标。

#### 图形边框效果

自定义效果：<a id="download" href="#"><i class="fa fa-download"></i><span> Download Now</span></a>

```[] 源码
<a id="download" href="#"><i class="fa fa-download"></i><span> Download Now</span>
</a>
```

主题自带效果：{% btn https://reishin.me, 点击访问博客, home fa-fw %}

```[] 源码
{% btn https://reishin.me, 点击访问博客, home fa-fw %}
```

<p id="div-border-left-green">更多使用方法参考[该页面](https://almostover.ru/2016-01/hexo-theme-next-test/#Button-tag-test)。</p>

### 代码块样式

效果：

```python Python http://github.com/cxyfreedom Github
print("Hello, NexT")
```

用法：

```
    ```[language] [title] [url] [link-text]
    code
```

* [language] 是代码语言的名称，用来设置代码块颜色高亮，非必须；
* [title] 是顶部左边的说明，非必须；
* [url] 是顶部右边的超链接地址，非必须；
* [link text] 如它的字面意思，超链接的名称，非必须。

修改代码块 diff 的颜色方式为 GitHub 的样式。主题默认的是 `-` 是绿色，`+` 是红色。

```css 文件位置：themes/next/source/css/_custom/custom.styl
// 文章```代码块diff样式
pre .addition {
    background: #e6ffed;
}
pre .deletion {
    background: #ffeef0;
}
```

代码高亮的语言名称可以参考[这篇文章](https://almostover.ru/2016-07/hexo-highlight-code-styles/)
<p id="div-border-left-green">如关于代码块高亮的高级个性化，参考[HEXO下的语法高亮拓展修改](https://zhuzhuyule.com/blog/HEXO/HEXO%E4%B8%8B%E7%9A%84%E8%AF%AD%E6%B3%95%E9%AB%98%E4%BA%AE%E6%8B%93%E5%B1%95%E4%BF%AE%E6%94%B9.html)</p>

### 文本居中引用

效果：

{% cq %}
居中引用
{% endcq %}

```[] 源码
{% cq %}
居中引用
{% endcq %}
```

<p id="div-border-left-green">[更多 NexT 主题自带的标签样式](http://theme-next.iissnan.com/tag-plugins.html)</p>

### 主题自带的 note 标签

<div class="note default"><p>default</p></div>

```
<div class="note default"><p>default</p></div>
```

<div class="note primary"><p>primary</p></div>

```
<div class="note primary"><p>primary</p></div>
```

<div class="note success"><p>success</p></div>

```
<div class="note success"><p>success</p></div>
```

<div class="note info"><p>info</p></div>

```
<div class="note info"><p>info</p></div>
```

<div class="note warning"><p>warning</p></div>

```
<div class="note warning"><p>warning</p></div>
```

<div class="note danger"><p>danger</p></div>

```
<div class="note danger"><p>danger</p></div>
```

<div class="note danger no-icon"><p>danger no-icon</p></div>

```
<div class="note danger no-icon"><p>danger no-icon</p></div>
```

<p id="div-border-left-green">[具体的风格查看该页面](https://github.com/iissnan/hexo-theme-next/pull/1697)</p>

### 主题自带的 tabs 标签

{% tabs 选项卡, 2 %}
<!-- tab -->
**这是选项卡 1**
<!-- endtab -->
<!-- tab -->
**这是选项卡 2**
<!-- endtab -->
<!-- tab -->
**这是选项卡 3**
<!-- endtab -->
{% endtabs %}

```
{% tabs 选项卡, 2 %}
<!-- tab -->
**这是选项卡 1**
<!-- endtab -->
<!-- tab -->
**这是选项卡 2**
<!-- endtab -->
<!-- tab -->
**这是选项卡 3**
<!-- endtab -->
{% endtabs %}
```

### 插入音乐和视频

音乐

{% meting "421137682" "netease" "song" %}

```[] 安装
npm install hexo-tag-aplayer --save
```

```[] 写法
{% meting "421137682" "netease" "song" %}
```

<p id="div-border-left-green">具体使用方法参考 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md) 或者 [官方文档](https://aplayer.js.org/#/zh-Hans/)</p>

视频

{% dplayer "url=http://p64urweu3.bkt.clouddn.com/%E4%B8%8D%E8%80%81%E6%A2%A6.mp4" %}

```[] 安装
npm install hexo-tag-dplayer --save
```

<p id="div-border-left-green">具体使用方法参考 [hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) 或者 [官方文档](https://dplayer.js.org/#/zh-Hans/)</p>

## 插件汇总

### 字数与阅读时间插件

```sh
npm install hexo-symbols-count-time --save
```

### 部署插件

```sh
npm install hexo-deployer-git --save
```

### 分享插件

```sh
git clone https://github.com/theme-next/theme-next-needmoreshare2 source/lib/needsharebutton
```

### RSS插件

```sh
npm install hexo-generator-feed --save
```

### 百度主动推送插件

```sh
npm install hexo-baidu-url-submit --save
```

### sitemap

```sh
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

### 动画效果插件

```sh
git clone https://github.com/theme-next/theme-next-three source/lib/three
git clone https://github.com/theme-next/theme-next-pace source/lib/pace
git clone https://github.com/theme-next/theme-next-canvas-nest source/lib/canvas-nest
git clone https://github.com/theme-next/theme-next-canvas-ribbon source/lib/canvas-ribbon
```

### 萌宠插件

```sh
npm install hexo-helper-live2d@2.1.5 --save
```

然后在 `/next/layout/_layout.swig` 的 `</body>` 之前加入

```
{{ live2d() }}
```

```[] _config.yml
live2d:
  model: koharu
  position: left
  opacityDefault: 1
```

<p id="div-border-left-green">[hexo live2d插件 2.0](https://huaji8.top/post/live2d-plugin-2.0/)
[官方文档](https://github.com/EYHN/hexo-helper-live2d)
</p>

## 进阶功能配置

### 时间轴年份分隔

默认只有归档页面的文章之间有年份分隔，如果希望 category 和 tag 页面也有类似的效果，可以修改对应文件即可。

**具体实现方法**

这里用 category 做示范
```[] 文件位置：themes/next/layout/category.swig
    {% for post in page.posts %}
              {{位置A}}
      {{ post_template.render(post) }}
    {% endfor %}

// 最后
{{位置B}}
```

在对应位置添加对应的代码就可以实现分隔：
```[] 文件位置：themes/next/layout/category.swig
      {% for post in page.posts %}

        {# Show year #}
        {% set year %}
        {% set post.year = date(post.date, 'YYYY') %}

        {% if post.year !== year %}
          {% set year = post.year %}
          <div class="collection-title">
            <h2 class="archive-year motion-element" id="archive-year-{{ year }}">{{ year }}</h2>
          </div>
        {% endif %}
        {# endshow #}

        {{ post_template.render(post) }}
      {% endfor %}

// 最后
{% block script_extra %}
  {% if theme.use_motion %}
    <script type="text/javascript" id="motion.page.archive">
      $('.archive-year').velocity('transition.slideLeftIn');
    </script>
  {% endif %}
{% endblock %}
```

tag 的文件位置在 `themes/next/layout/tag.swig`

### 页面底部添加博客运行时间

**具体实现方法**

```[] 文件位置：themes/next/layout/_partials/footer.swig
<span class="footer__copyright">
<div><span id="span_dt_dt"> </span>
<script language="javascript">
function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("8/25/2016 00:00:00");//这个日期是可以修改的
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());//其实仅仅改了这里
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML="博客已萌萌哒运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒 🐼 ";
}
show_date_time();
</script></div>
</span>
```

### 博文压缩

**具体实现方法**

在站点的根目录下执行以下命令：

```
$ npm install gulp -g
$ npm install gulp-minify-css gulp-uglify gulp-htmlmin gulp-htmlclean gulp --save
```

然后在站点根目录下新建 `gulpfile.js`，并添加以下内容

```
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-html','minify-css','minify-js'
]);
```

生成文章时执行 `hexo g && gulp`

## 写作篇

### 新建文章

```sh
$ hexo new post <title>
```

### 使用 Markdown

#### 教程

[HEXO下的Markdown语法(GFM)写博客](https://zhuzhuyule.com/2017/01/10/Hexo%E4%B8%8B%E7%9A%84Markdown%E8%AF%AD%E6%B3%95%28GFM%29%E5%86%99%E5%8D%9A%E5%AE%A2/)

## 主题升级备份

NexT作者给我们的建议就是使用 [Data Files](https://hexo.io/zh-cn/docs/data-files.html)，具体详情看 [官方使用说明](https://github.com/theme-next/hexo-theme-next/blob/master/docs/zh-CN/DATA-FILES.md)

**使用NexT方式**

使用这一方式，你现在可以将你的全部配置置于同一位置（`source/_data/next.yml`），并且不需要修改 `next/_config.yml`。 但是可能无法让所有 Hexo 外部库都准确处理它们的附加选项（举个例子，`hexo-server` 模块只会从 Hexo 默认配置文件中读取选项）。

**用法**

1. 请确认你的 Hexo 版本为 3.0 或更高。
2. 在你站点的 `hexo/source/_data` 目录创建一个 `next.yml` 文件（如果 `_data` 目录不存在，请创建之）。

<p align="center">以上步骤之后有 <b>两种选择</b>，请<b>任选其一</b>然后<b>继续后面的步骤</b>。</p>

* **选择 1：`override: false`（默认）**：

  1. 检查默认 NexT 配置中的 `override` 选项，必须设置为 `false`。\
     在 `next.yml` 文件中，也要设置为 `false`，或者不定义此选项。
  2. 从站点的 `_config.yml` 与主题的 `_config.yml` 中复制你需要的选项到 `hexo/source/_data/next.yml` 中。

* **选择 2：`override: true`**：

  1. 在 `next.yml` 中设置 `override` 选项为 `true`。
  2. 从 `next/_config.yml` 配置文件中复制**所有**的 NexT 主题选项到 `hexo/source/_data/next.yml` 中。

3. 然后，在站点的 `hexo/_config.yml`中需要定义 `theme: next` 选项（如果需要的话，`source_dir: source`）。
4. 使用标准参数来启动服务器，生成或部署（`hexo clean && hexo g -d && hexo s`）。

## 参考文章

* [hexo的next主题个性化教程:打造炫酷网站](http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html)
* [Hexo与Disqus引入的故事](https://rongxuanhong.github.io/2017/05/13/Hexo%E4%B8%8EDisqus%E5%BC%95%E5%85%A5%E7%9A%84%E6%95%85%E4%BA%8B/)
* [Hexo Next 主题点击加载 Disqus 和来必力双评论系统](https://chalkit.tk/20171123-load-Disqus-livere-comment-on-click-in-hexo-next-theme/)
* [【高阶】NexT 主题优化之加入网易云音乐、网易云跟帖、动态背景、自定义主题、统计功能](http://cherryblog.site/Hexo-high-level-tutorialcloudmusic,bg-customthemes-statistical.html)
* [Hexo+NexT 主题配置备忘](http://blog.ynxiu.com/2016/hexo-next-theme-optimize.html)
* [Hexo-NexT搭建个人博客（二）](https://neveryu.github.io/2016/09/30/hexo-next-two/)
* [基于Hexo搭建个人博客——进阶篇(从入门到入土)](http://yangbingdong.com/2017/build-blog-hexo-advanced/)
* [打造个性超赞博客Hexo+NexT+GithubPages的超深度优化](https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html)
* [EMOJI CHEAT SHEET](https://www.webpagefx.com/tools/emoji-cheat-sheet/)