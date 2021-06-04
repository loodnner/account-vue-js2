<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// 这里要作用整个应用，所以不应该加scoped
@import "~@/assets/styles/helper.scss";
@import "~@/assets/styles/reset.scss";


body{
  line-height: 1.5;
  font-family: $font-hei;
  color:#333;
  background: #f5f5f5;
}

#app{
  max-width: 500px;
  margin:0 auto;
  border:1px white solid
}

</style>
