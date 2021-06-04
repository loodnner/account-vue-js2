<template>
    <ul class="tabs">
        <li v-for="item in typeList" :key="item.type"
            @click="select(item)"
            :class="{selected:item.type===type,[classPrefix+'-tabs-item']:classPrefix}"
        >{{item.text}}</li>
        <!-- type是应该被选中的那个值，如果item与之相等，那就说明确实是selected了 drts -->
    </ul>
</template>

<script>
    export default {
        props:{
            typeList:Array,
            type:String,
            classPrefix:String
            },
        methods:{
            select(item){
                this.$emit('update:type',item.type)
            }
        }  
    }
</script>

<style lang="scss" scoped>
.tabs{
    font-size: 24px;
    background-color: #c4c4c4;
    display: flex;
    align-items: center;
    li{
        width: 50%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.selected.money-type-tabs-item{
            border-bottom:3px solid #333;
        }
    }
}

</style>