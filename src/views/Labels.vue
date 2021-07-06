<template>
    <Layout>
        <div class="tags">
            <router-link v-for="tag in tagList" :key="tag.id"
            class="tag" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name='right'/>
            </router-link>

        </div>
        <div class="createTag-wrapper">
            <Button @click.native="createTag">
                新增标签
            </Button>
        </div>
    </Layout>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Button from '@/components/Button.vue'
import store from '@/store/index.js'

    export default {
        components:{
            Icon,
            Button
        },
        data(){
            return{
                tagList:store.tagList
            }
        },
        methods:{
            createTag(){
                const name = window.prompt('请输入标签名')
                if (!name) {
                    return window.alert('标签名不能为空')
                } else {
                    store.createTag(name)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/icon.scss";
.tags {
     background: white;
     font-size: 16px;
     padding-left: 20px;
     > .tag{
         min-height: 44px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         border-bottom: 1px solid #e6e6e6;
     }
     .iconfont{
         color:#666;
         width:18px;
         height: 18px;
         margin-right: 16px;
     }
}
.createTag-wrapper{
         text-align: center;
         padding:16px;
         margin-top:44-16px;
}


</style>