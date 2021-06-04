<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
            >   
                {{tag.name}}
            </li>                       
        </ul>

    </div>
</template>

<script>
import store from '@/store/index.js'
    export default {
        data(){
            return{
                selectedTags:[],
                tagList:store.tagList
            }
        },
        methods:{
            create(){
                const name = window.prompt('请输入标签名')
                if (!name) {
                    return window.alert('标签名不能为空')
                } else {
                    store.createTag(name)
                }
            },
            toggle(tag){
                //rts rtd 不管view是啥样，都是数据的抽象
                const index = this.selectedTags.indexOf(tag)
                if(index>=0){
                    this.selectedTags.splice(index,1)
                }else{
                    this.selectedTags.push(tag)
                }
                this.$emit('update:selectedTags', this.selectedTags)
            }
    }}
</script>

<style lang="scss" scoped>
//从大到小模块，各种属性一个个调整……晕菜
.tags{
    display: flex;
    flex-direction: column-reverse;
    background-color: #fff;
    font-size: 14px;
    padding:16px;
    flex-grow:1;
  
    > .current{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > li{
            $bg:#d9d9d9;
            background-color:$bg;
            border-radius: 12px;
            height: 24px;
            line-height: 24px;
            padding:0 16px;
            margin-right: 12px;
            margin-top: 4px;
            &.selected{
                color: #fff;
                background-color: darken($bg,50%);
            }
        }
    }
    > .new {
        margin-top: 16px;
            button{
                border:none;
                background: transparent;
                border-bottom: 1px solid;
                color:#999;
                padding:0 4px;
            }
    }

}

</style>