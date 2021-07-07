import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone.js'
import createId from '@/lib/createId.js'


Vue.use(Vuex); //store绑定到Vue原型

 const store = new Vuex.Store({
  state:{
    recordList:[],
    tagList:[]
  },
  getters:{
    currentTag:(state)=>(id)=>{return state.tagList.filter(item=>item.id===id)[0]}    
  },
  mutations:{
    fetchRecords(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') ||'[]')
    },
    createRecords(state,record){
      //record是个引用类型，传的是地址，不复制一份，后面的改了也会影响前面的。
      const record2 = clone(record)
      record2.createDate = new Date().toISOString()
      state.recordList.push(record2)
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))  // 字符串转化之存入数据。
  },
  fetchTags(state){
    state.tagList =JSON.parse(window.localStorage.getItem('tagList') || '[]')
    if (!state.tagList || state.tagList.length === 0) {
      store.commit('createTag','服饰')
      store.commit('createTag','日用')
      store.commit('createTag','食物')
      store.commit('createTag','出行')
      }
  },
  createTag(state,name){
        const id = createId()
        state.tagList.push({id:id,name:name})
        store.commit('saveTag')
    }
  ,
    removeTag(state,id){
      const index = state.tagList.findIndex(item=>item.id===id)
        state.tagList.splice(index,1)
        store.commit('saveTag')
    },
    saveTag(state){
      // 创建之后调用存储到ls中
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
  },
  updateTag(state,{id,name}){ 
    //标签名与taglist中其他标签名一样需要排除
    const tag = store.getters.currentTag(id)
    tag.name=name
    store.commit('saveTag')
    }
}
 }
)

export default store;

