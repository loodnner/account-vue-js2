<template>
<div>
    <Layout classPrefix="money">
      <!-- numpad传了一个submit事件出来，只需要监听ta即可 -->
      <NumberPad :amount.sync='record.amount' @submit="saveRecord"/>
      <Tabs :typeList='typeList' :type.sync="record.type" class-prefix="money-type"/>
      <FormItem 
      :value = 'record.notes'
      @on-change = "record.notes = $event"
      placeholder="在这里输入备注"
      filedName="备注"/>
      <Tags :selectedTags.sync='record.tags'/>
    </Layout>
</div>
   
    
</template>

<script>
import Layout from '@/components/Layout.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tabs from '@/components/money/Tabs.vue';
import NumberPad from '@/components/money/NumberPad.vue';

const defaultRecord = 
  {
    tags: [],
    notes: '',
    type: 'consume',
    amount: 0
  }

const defaultTypeList =
  [
    { text: '支出', type: 'consume' },
    { text: '收入', type: 'earn' }
  ]

export default {
  components: {
    Layout,
    Tags,
    Tabs,
    FormItem,
    NumberPad
  },
  created () {
        this.$store.commit('fetchRecords')
        this.record.type = this.$route.params.type || this.record.type
  },
  data(){
    return {
            typeList:defaultTypeList,
            record:defaultRecord,
            }
},
methods:{
  saveRecord(){
    if(this.record.tags.length===0){
      window.alert('至少选择一个标签可以帮助更好的分类：）')
      return 
    }else{
    this.$store.commit('createRecords',this.record) 
    window.alert('保存成功')  
    this.clearRecord() 
    }
  },
  clearRecord(){
    this.record.notes=''
    this.record.type='consume'
    this.record.amount=0
  }
}
}
</script>
