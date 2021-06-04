<template>
<div>
    <Layout classPrefix="money">
      <!-- numpad传了一个submit事件出来，只需要监听ta即可 -->
      <NumberPad :amount.sync='record.amount' @submit="saveRecord"/>
      <Tabs :typeList='typeList' :type.sync="record.type" class-prefix="money-type"/>
      <FormItem v-model="record.notes" 
      placeholder="在这里输入备注"
      filedName="备注"/>
      <Tags :selectedTags.sync='record.tags'/>
    </Layout>
</div>
   
    
</template>

<script>
//全局注册了是否还需要在单组件里面import drts
import Layout from '@/components/Layout.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tabs from '@/components/money/Tabs.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import store from '@/store/index.js'


export default {
  components: {
    Layout,
    Tags,
    Tabs,
    FormItem,
    NumberPad
  },
  created () {
    this.record.type = this.$route.params.type || this.record.type
  },
  data(){
    return {
            typeList:[
                      { text: '支出', type: 'consume' },
                      { text: '收入', type: 'earn' }
                      ],
            record:{
                  tags: [],
                  notes: '',
                  type: 'consume',
                  amount: 0
                },
            }
},
methods:{
  saveRecord(){
    store.createRecords(this.record)
    // todo
  }
}
}
</script>
