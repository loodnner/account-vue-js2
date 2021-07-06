<template>
    <nav>
      <router-link to="/money" class="item" active-class="selected" >
      <Icon name='money'/>
      记一笔</router-link>
      <router-link to="/labels" active-class="selected" class="item">
     <Icon name='label'/>
      标签</router-link>
      <router-link to="/statistics" active-class="selected" class="item">
     <Icon name='statistics' />
      统计</router-link>
    </nav>
</template>

<script >
import Icon from '@/components/Icon.vue'

export default {
  name: 'Nav',
  components:{
    Icon
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;
     > .item {
      padding: 2px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .item.selected{
      font-weight: bold;
    }
  }
</style>
