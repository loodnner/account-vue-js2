<template>
    <Layout>
        <div class="navBar">
            <Icon class='leftIcon' name='left' @click.native="goBack"/>
            <span>编辑标签</span>
            <!-- little tricky -->
            <span class="rightIcon"></span>
        </div>
        <div class="formWrapper">
            <FormItem v-model="tag.name" 
            filedName="标签名"/>
        </div>
        <Button @click.native="remove">
            删除标签
        </Button>
    </Layout>
</template>

<script>
import FormItem from '@/components/money/FormItem.vue'
import store from '@/store/index.js'
import clone from '@/lib/clone.js'

    export default {
        components:{
            FormItem
        },
        data(){
            return {
                tag:{}
            }
        },
        //直接放data上和created上的差别 drts
        //是否需要clone？这个会跟Vuex有关吗 drts
        created(){
            this.tag =clone(store.findTag(this.$route.params.id))
        },
        methods:{
            goBack(){
                this.update()
                this.$router.back()
                //回退到上一个页面
            },
            update(){
                if(this.tag.name){
                    store.updateTag(this.tag.id,this.tag.name)
                }
            },
            remove(){
                if (this.tag) {
                if (store.removeTag(this.tag.id)) {
                    this.$router.back()
                 } else {
                    window.alert('删除失败')
                }
            }
             
        }
    }
    }
</script>

<style lang="scss" scoped>
.navBar{
    font-size:16px;
    padding:12px 16px;
    background:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftIcon{
    width: 24px;
    height:24px;
    }
    .rightIcon{
    width: 24px;
    height:24px;
    }
}
.formWrapper{
  background-color:#fff;
  margin-top: 8px;
}

</style>