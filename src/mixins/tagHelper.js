const tagHelper =  {
    methods:{
        createTag(){
            const name = window.prompt('请输入标签名')
            const names = this.$store.state.tagList.map(item=>item.name)
            if (!name) {
                return window.alert('标签名不能为空')
            } else if(names.indexOf(name)>=0)
                {
                    window.alert('标签名重复')
                }
            else
            {
                this.$store.commit('createTag',name)
            }
        }           
    }
}

export default tagHelper;
