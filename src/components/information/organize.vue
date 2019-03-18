<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left;">
                <span class="risktitle active">组织机构  </span>
                <span class="risktitle" @click="organize(2)">部门列表  </span>
                <span class="risktitle"  @click="organize(3)">人员列表  </span>
            </div>
            <div style="float:right;">
                <el-button size="mini"  type="primary" @click="goAdd()" >添加</el-button>
                <el-button size="mini"  type="warning" @click="deleteData()">删除</el-button>
            </div>
            
        </div>
        <div class="buttoncrowd top_content">
           <tree-chart  :json="treeData" ></tree-chart>
        </div>
        
    </div>  
</template>

<script>
import TreeChart from "vue-tree-chart";
export default {
    name: "riskList",
    components:{
        TreeChart
    },
    data(){
        return {
            treeData:{
                name: 'root',
                image_url: "https://static.refined-x.com/avat.jpg",
                children: [
                {
                    name: 'children1',
                    image_url: "https://static.refined-x.com/avat1.jpg"
                },
                {
                    name: 'children2',
                    image_url: "https://static.refined-x.com/avat2.jpg",
                    mate: {
                    name: 'mate',
                    image_url: "https://static.refined-x.com/avat3.jpg"
                    },
                    
                }
                
                ]
            }
        }
    },
    methods:{
        arraySpanMethod(){},
        goAdd(){
            this.$router.push({path:'/home/information/riskAdd',name:'riskAdd'})
        },
        organize(ind){
            if(ind==1){
                this.$router.push({path:'/home/information/organize',name:'organize'})
                    
            }else if(ind==2){
                this.$router.push({path:'/home/information/organizeApartment',name:'organizeApartment'})
                
            }else if(ind==3){
                this.$router.push({path:'/home/information/organizePeople',name:'organizePeople'})
                
            }
        },
        exportData(){//导出数据
             this.$alert('确认要导出风险识别数据吗？','系统提示', {
                confirmButtonText: '确定',
                center: true,
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                }
            });

        },
        cardFrontSuccess(res,file){//导入数据
            if(res.state==200){
                this.$alert(res.msg,"温馨提示", {
                  confirmButtonText: '确定',
                  callback:action=>{
                    // this.init(this.datas);
                  }
                });
            }else{
                this.$alert(res.msg,"温馨提示", {
                    // confirmButtonText: '确定',
                })
            }

        },
        handleError(){//上传错误
        },
        deleteData(){//删除数据
            this.$alert('确认要导出风险识别数据吗？','系统提示', {
                confirmButtonText: '确定',
                center: true,
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                }
            });
        }
    }

}
</script>

<style scoped lang="scss">
    .riskIndex{
       width: 100%;
       height: 100%;
        .top_header{
            background: #fff;
            padding:10px 10px 0;
            margin-bottom: 20px;
        }
        .top_content{
            border:1px solid #eee;
            background: #fff;
            margin:0 20px 0;
            padding-top:30px;
        }
        .buttoncrowd{
            clear: both;
            min-height: 30px;
            div{
                .risktitle{
                    color:#333;
                    text-decoration: none;
                    padding:0 10px 5px;
                    font-size: 14px;
                    &.active{
                        border-bottom:4px solid #409eff;
                        
                    }
                }
            }
        }
       .el-popover .tableUl{
            b{
                display: inline-block;
                width:100px;
            }
        }
    }
</style>
