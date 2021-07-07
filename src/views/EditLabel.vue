<template>
    <Layout>
        <div class="navBar">
            <Icon class='leftIcon' name='left' @click.native="goBack"/>
            <span>编辑标签</span>
            <!-- little tricky -->
            <span class="rightIcon"></span>
        </div>
        <div class="formWrapper">
            <FormItem 
            :value = 'tag.name'
      @on-change = "tag.name = $event"
            filedName="标签名"/>
        </div>
        <div class="removeTag-wrapper">
            <!-- button宽度rem -->
        <Button @click.native="remove" class="button">
            删除
        </Button>
        <Button @click.native="update" class="button">
            保存
        </Button>
        </div>
    </Layout>
</template>

<script>
import FormItem from '@/components/money/FormItem.vue'
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
        //需要改的值才会放到data上
        created(){
            const id = this.$route.params.id
            const tag = this.$store.getters.currentTag(id)
            this.tag = clone(tag)
        },
        methods:{
            
            goBack(){
                this.$router.back()
                //回退到上一个页面
            },
            update(){
                if(this.tag.name){ //判断是否为空
                    // 判断是否与已有标签名重复
                    const names = this.$store.state.tagList.map(item=>item.name)
                    if(names.indexOf(this.tag.name)>=0){
                        window.alert('标签名重复啦')}
                    else{
                    this.$store.commit('updateTag',{id:this.tag.id,name:this.tag.name})
                        this.$router.back()
                    }
                }else{
                    window.alert('标签名不能为空')
                }
            },
            remove(){
                if (this.tag) {
                    this.$store.commit('removeTag',this.tag.id)
                    this.$router.back()
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

.removeTag-wrapper{
    display: flex;
    // text-align: center;
    padding:16px;
    margin-top:44-16px;
    justify-content: space-evenly;
    .button{
        width:100px
    }
}

</style>