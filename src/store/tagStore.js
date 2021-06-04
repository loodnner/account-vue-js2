
// 封装对tagList的所有操作
import createId from '@/lib/createId.js'

const localStorageKeyName = 'tagList'
const tagStore = {
    tagList:[],
    // 数据也存在我这，方便处理，并且别人要用直接拿
    fetchTags(){
        this.tagList=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        if (!this.tagList || this.tagList.length === 0) {
            tagStore.createTag('服饰')
            tagStore.createTag('食物')
            tagStore.createTag('住宿')
            tagStore.createTag('日用')
          }
    },
    createTag(name){
        //只有数组才能map
        const names = this.tagList.map(item=>item.name)
        //标签名不能重复的逻辑
        if(names.indexOf(name)>=0){
            window.alert('标签名重复')
            return 'duplicated'
        }else{
            const id = createId()
            this.tagList.push({id:id,name:name})
            this.saveTag()
            return 'success'
        }
    },
    saveTag(){
        // 创建之后调用存储到ls中
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList))
    },
    findTag(id){
        return this.tagList.filter(item=>item.id===id)[0]       
    },
    removeTag(id){
        const index = this.tagList.findIndex(item=>item.id===id)
        if(index>=0){
            this.tagList.splice(index,1)
            this.saveTag()
            return true
        }else
        return false
        
        // todo
    },
    updateTag(id,name){
        //标签名与当前标签名一样or标签名与taglist中其他标签名一样都需要排除
        const tag = this.findTag(id)
        const names = this.tagList.map(item=>item.name)
        if(tag.name===name)
            {
            return }        
        if(names.indexOf(name)>=0){
            window.alert('标签名重复啦')
            return 'duplicated'       
        }else{
            tag.name=name
            this.saveTag()
            return 'success'      
        }

    }
}

tagStore.fetchTags()
export default tagStore