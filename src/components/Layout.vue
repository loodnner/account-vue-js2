<template>
    <div class="wrapper" :class="classPrefix && `${classPrefix}-wrapper` ">
        <div class="content" :class="classPrefix && `${classPrefix}-content` ">
            <slot/>
            <!-- 插槽rts -->
        </div>
        <Nav />
    </div>
    <!-- 为什么要有两个div，因为样式的需求；前缀是为了满足不同页面的控制，前缀语法rts -->
</template>

<script>
    export default {
        name:'Layout', 
        // 加上name rts
        props:['classPrefix']
        
    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    height:100vh;
}

.money-content{
    display: flex;
    flex-direction: column-reverse;
}

.content{
    overflow:auto;
    flex-grow:1;
}


</style>