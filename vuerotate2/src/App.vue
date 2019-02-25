<template>
  <div id="app">
    <div><img src="../static/img/banner.png"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,hr,p,dl,dt,dd,ul,ol,li,pre,code,form,legend,b,button,input,textarea,blockquote,article,aside,footer,header,nav,section {margin:0;padding:0;}
img,abbr{border:0;}
table td{word-break:break-all;}
caption,th{text-align:left;}
ol,ul{list-style:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:700;}
.clear:after{ content:''; height:0; visibility:hidden; display:block; clear:both;}
.fl{ float:left;}
.fr{ float:right;}
img{ max-width:100%; display:block; margin:0 auto;}
html{-webkit-text-size-adjust:none;}
body{ font:24px/1.5 '微软雅黑','Microsoft YaHei'; background:#fff; color:#333;}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 320px; 
  max-width: 10rem;
  margin: 0 auto;
  background:#ff9e13;
  color:#fff;
  position:relative;
  min-height: 11.5rem;
}
</style>
