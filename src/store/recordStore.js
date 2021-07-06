import clone from '@/lib/clone.js'

// 封装对recordList的所有操作，目前主要就是增
const localStorageKeyName = 'recordList'

const recordStore = {
    recordList:JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]'),
    createRecords(record){
        //record是个引用类型，传的是地址，不复制一份，后面的改了也会影响前面的。
        const record2 = clone(record)
        record2.createDate = new Date().toISOString()
        this.recordList.push(record2)
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.recordList))  // 字符串转化之存入数据，这个应该是保存了。
        window.alert('已保存')
    }
}

export default recordStore