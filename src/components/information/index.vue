<template>
    <div class="enterpriseIndex">
        <ul class="left_center">
            <li v-for="(item,index) in items" :class="flag==index?'left_active':''">
                <a  @click="goModule(index,item.gorouter)" :class="index==0?'cur':''">
                    <i :class="index!=0?'dot_active':''"></i>{{item.name}}
                </a>
            </li>
        </ul>
        <div class="center">
            <router-view></router-view>
        </div>
       
    </div>  
    
</template>
<script>
export default {
    name: "informationIndex",
    data(){
        return {
            items:[
                {
                    name:"企业信息",
                    gorouter:""
                },
                 {
                    name:"基础信息",
                    gorouter:"/home/information"
                },
                 {
                    name:"资质档案",
                    gorouter:"/home/information/record"
                },
                 {
                    name:"组织机构",
                    gorouter:"/home/information/organize"
                },
            ],
            flag:1
        }
    },
    methods:{
        goModule(index,gorouter){
            this.flag=index;
            this.$router.push({path:gorouter});
            console.log(this.$route.path)
            
        }
    },
    watch:{
      '$route':function(to,from){
           for(let i=0;i<this.items.length;i++){
               if(to.path.indexOf(this.items[i].gorouter)!=-1){
                // if(to.path==this.items[i].gorouter){
                    this.flag=i;
                }
            }
      }
    },
    beforeMount(){
        // this.currentRouter=this.$route.path;
    },
    mounted(){
        for(let i=0;i<this.items.length;i++){
            if(this.$route.path.indexOf(this.items[i].gorouter)!=-1){
            // if(this.$route.path==this.items[i].gorouter){
                this.flag=i;

            }
        }
    }

}
</script>

<style scoped lang="scss">
    .enterpriseIndex{
        width: 100%;
        min-height:90px;
        background: #fff;
        text-align: left;
        display: flex;
        .left_center{
            display: inline-block;
            width: 250px;
            height: 100%;
            margin:0;
            padding:0;
            background: #2a3246;
            text-align: left;
            li{
                width: 200px;
                list-style: none;
                color:#fff;
                background: #21242a;
                line-height: 40px;
                font-size: 14px;
                margin:0 20px;
                &.left_active{
                    background: #4a8efe;
                    color:#fff;
                }
                
                a{
                    display: inline-block;
                    width: 100%;
                    line-height: 40px;
                    text-decoration: none;
                    cursor: pointer;
                    color: #fff;
                    &.cur:hover{
                        color:#fff;
                        background: #21242a;
                        cursor: default;
                    }
                }
                a:hover{
                    background: #4a8efe;
                    color:#fff;
                }
                
                i{
                    &.dot_active{
                         margin:0 10px 0 10px;
                        display: inline-block;
                        width: 4px;
                        height: 4px;
                        border-radius: 100%;
                        background: #fff;
                    }
                }
            }
        }
        .center{
            flex:1;
            background: #eee;
        }        
    }
</style>
