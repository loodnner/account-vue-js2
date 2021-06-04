<template>
    <div class="numberpad">
        <div class="output">
            {{output}}
        </div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="ok" class="ok">OK</button>
            <button @click="inputContent" class="zero" >0</button>
            <button @click="inputContent">.</button>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                output:'0'
            }   
        },
        methods:{
            inputContent(event){
                //任何按键输入都触发input事件，在函数里面处理各类情况
                const buttonInput = event.target.textContent
                //输入边界case处理
                if (this.output.length === 16) {
                    return
                    }
                if (this.output === '0' && '0123456789'.indexOf(buttonInput) >= 0) {
                    this.output = buttonInput
                    return
                }
                if (this.output.indexOf('.') >= 0 && buttonInput === '.') {
                    return
                }
                    this.output += buttonInput
                },
                remove(){
                    const olength = this.output.length
                    if (olength > 1) {
                        this.output = this.output.substring(0, olength - 1)
                    } else
                    { 
                        this.output = '0' 
                    }
                    
                },
                clear(){
                    this.output='0'
                },
                ok(){
                    const outputNum = parseFloat(this.output)
                    this.$emit('update:amount',outputNum)
                    this.$emit('submit')     
                    this.output='0'               
                    //todo 涉及到数据传递
                }
            }
        }
        
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.numberpad{
    .output{
        @extend %clearFix;
        @extend %innerShadow;
        font-size: 36px;
        font-family: Consolas, monospace;
        text-align: right;
        padding: 4px 16px;
        height:72px;
    }
    .buttons{
        //这里为啥要用float布局，俺晕了rts
        //俺急了俺急了
        //括号的范围要搞清楚
        @extend %clearFix;
        >button{
            width:25%;
            border:none;
            height: 64px;
            float:left;
            background: transparent;
        &.ok{
            height: 64*2px;
            float: right;
        }
        &.zero{
            width:50%;
        }
        $bg: #f2f2f2;
        &:nth-child(1){
            background: $bg;
        }
        &:nth-child(2),&:nth-child(5){
            background: darken($bg ,4%);
        }
        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }
        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }
        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }
        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }
        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }
    }
}}


</style>