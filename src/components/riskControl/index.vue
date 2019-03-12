<template>
    <div class="enterpriseIndex">
        <ul class="left_center">
            <li v-for="(item,index) in items" :class="flag==index?'left_active':''">
                <a  @click="goModule(index,item.gorouter)" :class="index==0?'cur':''">
                    <i :class="index!=0?'dot_active':''"></i>{{item.name}}
                </a>
            </li>
        </ul>
        <router-view></router-view>
    </div>  
    
</template>
<script>
export default {
    name: "riskControlIndex",
    data(){
        return {
            items:[
                {
                    name:"风险管理",
                    gorouter:""
                },
                 {
                    name:"风险辨识清单",
                    gorouter:"/home/control/riskList"
                },
                 {
                    name:"责任清单",
                    gorouter:"/home/control/dutyList"
                },
                 {
                    name:"管控措施清单",
                    gorouter:"/home/control/controlList"
                },
                 {
                    name:"风险分布图",
                    gorouter:"/home/control/riskMap"
                },
                 {
                    name:"风险统计",
                    gorouter:"/home/control/statistic"
                },
                {
                    name:"风险防控手册",
                    gorouter:"/home/control/riskNotbook"
                },
            ],
            flag:1
        }
    },
    methods:{
        goModule(index,gorouter){
            this.flag=index;
            this.$router.push({path:gorouter});
            
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
        .left_center{
            display: inline-block;
            width: 180px;
            height: 100%;
            margin:0;
            padding:0;
            background: #2a3246;
            text-align: left;
            li{
                list-style: none;
                color:#fff;
                background: #21242a;
                line-height: 40px;
                font-size: 14px;
                margin:0 10px;
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
        
    }
</style>
