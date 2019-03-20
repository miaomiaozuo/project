<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left;">
                <span class="risktitle " @click="organize(1)" >统计图  </span>
                <span class="risktitle" @click="organize(2)">设备列表  </span>
                <span class="risktitle active" >特种设备列表  </span>
            </div>
            <div style="float:right;">
                <el-button size="mini"  type="primary" @click="goAdd(1)" >添加</el-button>
                 <el-button size="mini"  type="primary" @click="exportData()">导出</el-button>
                <el-button size="mini"  type="primary">
                    <el-upload  :show-file-list="false" name="file" :action='imports'  :on-success="cardFrontSuccess" :on-error="this.handleError" >导入
                    </el-upload>
                </el-button>
                <el-button size="mini"  type="warning" @click="deleteData()">删除</el-button>
            </div>
            
        </div>
        <div class="buttoncrowd top_content">
            <el-table :data="tableData" :span-method="arraySpanMethod"  border stripe style="width: 100%;">
                <el-table-column type="selection"  width="35"> </el-table-column>
                <el-table-column align="center" prop="assetNumber" label="名称" >
                    <template slot-scope="scope"><span>{{scope.row.assetNumber }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="contractCode" label="层数" >
                    <template slot-scope="scope"><span>{{scope.row.contractCode }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="purchaseOrder" label="高度" >
                    <template slot-scope="scope"><span>{{scope.row.purchaseOrder }}</span></template>
                </el-table-column>
                <el-table-column align="right" prop="amount"  label="占地面积（m²）" >
                    <template slot-scope="scope"><span>{{scope.row.amount }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="payDateFormat" label="防火等级" >
                    <template slot-scope="scope"><span>{{scope.row.payDateFormat }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="receiveEnterpriseName" label="火灾危害性">
                    <template slot-scope="scope"><span>{{scope.row.receiveEnterpriseName}}</span></template>
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
    name: "equiplist",
    
    data(){
        return {
           imports:'',
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

                }
            ],
        }
    },
    methods:{
        arraySpanMethod(){},
        goAdd(ind){//添加跳转
            this.$router.push({path:'/home/local/equipspecialAdd',name:'equipspecialAdd',query:{
                'ind':ind}})
        },
        
        detailRoute(ind,id){//修改页面跳转
            this.$router.push({path:'/home/local/equipspecialAdd',name:'equipspecialAdd',
                query:{
                    'ind':ind,
                    'id':id
                }
            })
            
        },
        organize(ind){
            if(ind==1){
                this.$router.push({path:'/home/local/equip',name:'equipment'})
                    
            }else if(ind==2){
                this.$router.push({path:'/home/local/equiplist',name:'equiplist'})
                
            }else if(ind==3){
                this.$router.push({path:'/home/local/equiplistvery',name:'equiplistvery'})
                
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
            padding:30px 20px;
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
