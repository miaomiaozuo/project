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
                    iconfont:'element-icons el-iconkaohejilu',
                    gorouter:"/home/information"
                },
                 {
                    name:"现场管理",
                    iconfont:'element-icons el-iconshouye',
                    gorouter:"/home/local"
                },
                 {
                    name:"风险管控",
                    iconfont:'element-icons el-iconsaoyisao',
                    gorouter:"/home/control"
                },
                 {
                    name:"隐患管理",
                    iconfont:'element-icons el-iconliebiao',
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
        height:90px;
        background: #5187f4;
        display: flex;
        .head_left{
            width: 140px;
            height: 70px;
            margin:0 20px;
            text-align: left;
            img{
                width: 100%;
                height: 100%;
                margin-top:10px;
            }
            
        }
        .header_center{
            flex:1;
            display: flex;
            margin:0;
            padding-left: 0;
            li{
                flex:1;
                list-style: none;
                color:#fff;
                margin:0 20px;
                a{
                    display: inline-block;
                    width: 120px;
                    height: 30px;
                    line-height: 30px;
                    border-radius: 15px;
                    margin-top:30px;
                    text-decoration: none;
                    cursor: pointer;
                    color: #fff;
                    &.header_active{
                        background: #fff;
                        color:#5187f4;
                    }
                    
                }
                a:hover{
                    background: #fff;
                    color:#5187f4;
                }
                
                i{
                    margin:0 10px 0 0;
                }
            }
        }
        .header_right{
            width: 200px;
            >div{
                display: inline-block;
            }
            .header_pic{
                width: 30px;
                height: 30px;
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
