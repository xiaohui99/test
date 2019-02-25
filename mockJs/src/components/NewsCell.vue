<template>
  <section class="financial-list">
    <section class="collect" @click="jumpPage">
      <aside class="clear">
        <h2>{{newslist.title}}</h2>
        <section class="Cleft clear">
          <span class="fl">{{newslist.author_name}}</span>
        </section>
        <section class="Cright">
          <span>{{newslist.date | getYMD}}</span>
        </section>
      </aside>
      <aside>
        <img :src="newslist.thumbnail_pic_s" style="border-radius: 20px;">
      </aside>
      <div style="clear: both"></div>
    </section>
  </section>
</template>
 
<script>
export default {
  props: {
    newslist: Object
  },
  methods: {
    jumpPage: function () {
      window.location.href = this.newslist.url
    }
  }
}
</script>
 
<style scoped>
.financial-list {
  width: 750px;
  height: 100%;
  background-color: white;
  padding: 28px 0;
  border-bottom: 1px solid #ccc;
  margin:0 auto;
}
 
.financial-list .collect {
  width: 92%;
  margin: 0 auto;
}
 
.financial-list .collect aside:nth-of-type(1) {
  width: 63%;
  float: left;
}
 
.financial-list .collect aside:nth-of-type(2) {
  width: 32%;
  height: 200px;
  float: left;
  margin-left: 30px;
}
 
.financial-list .collect h2 {
  width: 100%;
  height: 96px;
  font-size: 32px;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}
 
.financial-list .collect aside:nth-of-type(2) img {
  width: 100%;
  height: 100%;
}
 
.financial-list .collect aside .Cleft {
  width: 45%;
  float: left;
  margin-top: 66px;
}
 
.financial-list .collect aside .Cleft span{
  display: block;
  width: 140px;
  margin-left: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}
 
.financial-list .collect aside .Cright {
  width: 55%;
  float: right;
  margin-top: 66px;
  text-align:right;
}
.financial-list .collect aside .Cright span{
  display: inline-block;
  margin: 4px 0 0 5px;
}
.financial-list .collect aside span {
  font-size: 28px;
  color: #999999;
}
 
.financial-list .collect aside .Cleft img,
.financial-list .collect aside .Cright img {
  width: 18px;
  height: 24px;
  margin-top: 9px;
}
</style>