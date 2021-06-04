<template>
    <div>
        <label class="FormItem">
            <span class="name">{{filedName}}</span>
            <input :value="value" @input="$emit('input',$event.target.value)"
            :placeholder="placeholder">
        </label>

    </div>
</template>

<script>
    export default {
        props:{
            value:String,
            filedName:String,
            placeholder:String
        }    
    }
</script>

<style lang="scss" scoped>
.FormItem{
    display: flex;
    font-size: 14px;
    align-items: center;
    padding-left:16px;
    margin:6px 0px;
    .name{
        padding-right: 16px;
    }
    input{
        border:none;
        background: transparent;
        height: 40px;
        padding:0 16px;
        flex-grow: 1;

    }

}

</style>