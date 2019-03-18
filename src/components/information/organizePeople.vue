<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left;">
                <span class="risktitle" @click="organize(1)">组织机构  </span>
                <span class="risktitle" @click="organize(2)">部门列表  </span>
                <span class="risktitle active">人员列表  </span>
            </div>
            <div style="float:right;">
                <el-button size="mini"  type="primary" @click="goAdd(1)" >添加</el-button>
                <el-button size="mini"  type="warning" @click="deleteData()">删除</el-button>
            </div>
            
        </div>
        <div class="buttoncrowd top_content">
            <el-table :data="tableData" :span-method="arraySpanMethod"  border stripe style="width: 100%;">
                <el-table-column type="selection"  width="35"> </el-table-column>
                <el-table-column align="center" prop="assetNumber" label="资料名称" >
                    <template slot-scope="scope"><span>{{scope.row.assetNumber }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="contractCode" label="更新时间" >
                    <template slot-scope="scope"><span>{{scope.row.contractCode }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="purchaseOrder" label="备注信息" >
                    <template slot-scope="scope"><span>{{scope.row.purchaseOrder }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="handle" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="detailRoute(2,scope.row.id)" type="primary" size="mini" >修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        
    </div>  
</template>

<script>
export default {
    name: "riskList",
    data(){
        return {
            imports:"导入数据路径",
            tableData:[
                {
                    assetNumber:'1',
                    contractCode:'12',
                    purchaseOrder:'3',
                    amount:'4',
                    payDateFormat:'5',
                    receiveEnterpriseName:'6',
                    statusName:'7',
                    createTimeFormat:'8',
                    id:'123',

                },
                {
                    assetNumber:'1',
                    contractCode:'12',
                    purchaseOrder:'3',
                    amount:'4',
                    payDateFormat:'5',
                    receiveEnterpriseName:'6',
                    statusName:'7',
                    createTimeFormat:'8',
                    id:'123',

                }
            ],
            
        }
    },
    methods:{
        arraySpanMethod(){},
        goAdd(ind){
            this.$router.push({path:'/home/information/organizePAdd',name:'organizePAdd',query:{
                'ind':ind}})
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
        },
        detailRoute(ind,id){//编辑页面跳转
            this.$router.push({path:'/home/information/organizePAdd',name:'organizePAdd',
                query:{
                    'ind':ind,
                    'id':id
                }
            })
            
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
