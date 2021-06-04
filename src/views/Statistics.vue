<template>
    <Layout>
        <Tabs class-prefix='type' :typeList=typeList :type.sync=type>
        </Tabs>
            <ol v-if="groupedList.length>0">
                <!-- 这一块主要难点是梳理sta页面的数据结构应该是啥样的 -->
                    <li v-for="(group,index) in groupedList" :key="index">
                        <h3 class="title">{{beautify(group.title)}}
                            <span>￥{{group.total}}</span>
                        </h3>
                        <ol>
                            <li class="record" v-for="item in group.items" :key="item.id">
                                <span>{{tagString(item.tags)}}</span>
                                <span class="notes">{{item.notes}}</span>
                                <span>￥{{item.amount}}</span>
                            </li>
                        </ol>
                    </li>
                </ol>
            <router-link v-else class="blackNotice" :to="`/money/${type}`">现在就去记一笔吧：）</router-link>
    </Layout>
</template>

<script>
import Tabs from '@/components/money/Tabs.vue'
import store from '@/store/index.js'
import dayjs from 'dayjs'
import clone from '@/lib/clone'

    export default {
        components:{
            Tabs
        },
        data(){
            return {
                typeList:[
                      { text: '支出', type: 'consume' },
                      { text: '收入', type: 'earn' }
                      ],
                type:'consume',
                recordList:store.recordList
            }
        },
        computed:{
            groupedList () {
                // 整理出一个符合页面展示结构的数据结构，并且排好序
            const newList = clone(this.recordList)
                .filter(m => (m.type === this.type))
                .sort((a, b) => (dayjs(b.createDate).valueOf() - dayjs(a.createDate).valueOf()))
            if (newList.length === 0) { return [] }
            const currentDate = newList[0].createDate
            const result = [{ title: dayjs(currentDate).format('YYYY-MM-DD'), total: newList[0].amount, items: [newList[0]] }]
            for (let i = 1; i < newList.length; i++) {
                const last = result[result.length - 1]
                if (dayjs(newList[i].createDate).isSame(dayjs(currentDate), 'day')) {
                last.items.push(newList[i])
                last.total = newList[i].amount + last.total
                } else {
                result.push({ title: dayjs(newList[i].createDate).format('YYYY-MM-DD'), total: newList[i].amount, items: [newList[i]] })
                }
            }
            return result
        }
    },
        methods:{
            // 把date变成今天-昨天-前天这种通俗描述
        beautify (date) {
            const today = dayjs()
            const thisday = dayjs(date)
            if (thisday.isSame(today, 'day')) {
                return '今天'
            } else if (thisday.isSame(today.subtract(1, 'day'), 'day')) {
                return '昨天'
            } else if (thisday.isSame(today.subtract(2, 'day'), 'day')) { return '前天' } else if (thisday.isSame(today, 'year')) {
                return thisday.format('M月D日')
            } else {
                return thisday.format('YYYY年M月D日')
            }
        },
        tagString (tag) {
            return tag.length === 0 ? '无' : tag.map(t => t.name).join('/')
        },
        }
        
    }
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/reset.scss';

.blackNotice{
    display: block;
    padding:20px;
    text-align: center;
}
%item{
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;

}
.title{
    @extend %item

}

.record{
    @extend %item;
    background-color: white;
    margin-bottom: 2px;

}

.notes{
    margin-left:16px;
    margin-right:auto;
}
    ::v-deep .type-tabs-item{
    background:#c4c4c4;
    &.selected {
        background: #fff;
        border-bottom: none;
    }
}

</style>