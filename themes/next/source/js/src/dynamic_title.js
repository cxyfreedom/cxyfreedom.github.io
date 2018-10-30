/**
 * Created by cxy on 2018/3/22.
 */
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
   if (document.hidden) {
       $('[rel="icon"]').attr('href', "/favicon.ico");
       document.title = '(つェ⊂) 我藏好了哦~ | Field of Hope';
       clearTimeout(titleTime);
   }
   else {
       $('[rel="icon"]').attr('href', "/favicon.ico");
       document.title = '(*´∇｀*) 被你发现啦~' + OriginTitile;
       titleTime = setTimeout(function () {
           document.title = OriginTitile;
       }, 2000);
   }
});
