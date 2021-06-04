<template>
    <span :class="'iconfont icon-'+name"></span>
</template>

<script >

export default {
  name: 'Icon',
  props: ['name'] //字符串形式数组
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/icon.scss";

</style>
