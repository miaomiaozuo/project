<template>
    <div class="enterpriseIndex">
        <header class="header">
            <div class="head_left"><img src="/static/icons/logo.png" alt=""></div>
            <ul class="header_center">
                <li v-for="(item,index) in items">
                    <a :class="flag==index?'header_active':''" @click="goModule(index,item.gorouter)">
                        <i :class="item.iconfont"></i>{{item.name}}
                    </a>
                </li>
            </ul>
            <div class="header_right">
                <div class="header_pic"><img src="/static/header3.png" alt=""></div>
                <div class="header_name"><span> 您好，熙儿熙儿熙儿熙儿</span> <i class="el-icon-caret-bottom"></i></div>
            </div>
        </header>
        <router-view></router-view>
    </div>  
    
</template>

<script>
export default {
    name: "helloindex",
    data(){
        return {
            items:[
                {
                    name:"企业首页",
                    iconfont:'element-icons el-iconshouye',
                    gorouter:"/home/enterprise"
                },
                 {
                    name:"企业信息",
                    iconfont:'element-icons el-iconedit',
                    gorouter:"/home/information"
                },
                 {
                    name:"现场管理",
                    iconfont:'element-icons el-iconlist',
                    gorouter:"/home/local"
                },
                 {
                    name:"风险管控",
                    iconfont:'element-icons el-iconicon-search',
                    gorouter:"/home/control"
                },
                 {
                    name:"隐患管理",
                    iconfont:'element-icons el-iconitem',
                    gorouter:"/home/danger"
                },
                 {
                    name:"系统设置",
                    iconfont:'element-icons el-iconshezhi',
                    gorouter:"/home/system"
                },
            ],
            flag:1,
            currentRouter:'/home'
        }
    },
    methods:{
        goModule(index,gorouter){
            this.flag=index;
            this.$router.push({path:gorouter});
            
        }
    },
    watch:{
      '$route':function(to,from){
          console.log(to.path)
           for(let i=0;i<this.items.length;i++){
                if(to.path.indexOf(this.items[i].gorouter)!=-1){
                    this.flag=i;
                }
            }
      }
    },
    mounted(){
        console.log(this.$route.path)
        for(let i=0;i<this.items.length;i++){
            if(this.$route.path.indexOf(this.items[i].gorouter)!=-1){
                this.flag=i;

            }
        }
    }
}
</script>

<style scoped lang="scss">
.enterpriseIndex{
    width:100%;
    height:100%;
}
    .header{
        width: 100%;
        height:98px;
        background: #5187f4;
        display: flex;
        .head_left{
            width: 250px;
            height: 98px;
            text-align: left;
            box-shadow: 10px 0 10px #4585ed;  
            img{
                width: 134px;
                height: 70px;
                margin:14px 0 0 59px;
                
            }
            
        }
        .header_center{
            flex:1;
            display: flex;
            margin:0;
            padding-left: 40px;
            li{
                list-style: none;
                color:#fff;
                margin-right: 8px;
                a{
                    display: inline-block;
                    width:96px;
                    height: 44px;
                    line-height: 44px;
                    border-radius: 22px;
                    padding:0 10px;
                    font-size: 14px;
                    margin-top:30px;
                    text-decoration: none;
                    cursor: pointer;
                    color: #fff;
                    

                    i{
                       font-size: 28px; 
                       float: left;
                       font-weight: normal;
                    }
                    &.header_active{
                        background: #fff;
                        color:#5187f4;
                        font-weight: bold;
                    }
                    
                }
                a:hover{
                    background: #fff;
                    color:#5187f4;
                }
                
                
            }
        }
        .header_right{
            width: 200px;
            >div{
                display: inline-block;
            }
            .header_pic{
                width: 40px;
                height: 40px;
                margin-top: 30px;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }
            .header_name{
                line-height: 90px;
                color: #fff;
                font-size: 14px;
                span{
                    max-width:120px ;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    float: left;
                }
                i{
                    cursor: pointer;
                }
            }
        }
    }
</style>
