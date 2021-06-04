import recordStore from '@/store/recordStore.js'
import tagStore from '@/store/tagStore.js'

//ES6 展开运算符，浅拷贝
const store = {
    ...recordStore,
    ...tagStore
  }

export default store

