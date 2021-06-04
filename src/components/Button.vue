<template>
    <div class="button-wrapper">
        <button class="button"><slot/></button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.button{
     background:#767676;
     color:white;
     border-radius: 4px;
     border:none;
     height:40px;
     padding:0 16px;
     &-wrapper{
         text-align: center;
         padding:16px;
         margin-top:44-16px;
     }
}

</style>