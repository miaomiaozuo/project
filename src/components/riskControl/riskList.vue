<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left;">
                <span class="risktitle">风险辨识清单</span>
            </div>
            <div style="float:right;">
                <el-button size="mini"  type="primary" @click="goAdd(1)" >添加风险点</el-button>
                <el-button size="mini"  type="primary" @click="goAdd(2)">添加评估</el-button>
                <el-button size="mini"  type="primary" @click="exportData()">导出数据</el-button>
                <el-button size="mini"  type="primary">
                    <el-upload  :show-file-list="false" name="file" :action='imports'  :on-success="cardFrontSuccess" :on-error="this.handleError" >导入数据
                    </el-upload>
                </el-button>
                <el-button size="mini"  type="warning" @click="deleteData()">删除</el-button>
            </div>
            
        </div>
        <div class="buttoncrowd top_content">
            <el-table :data="tableData" :span-method="arraySpanMethod"  border stripe style="width: 100%;">
            <el-table-column type="selection"  width="35"> </el-table-column>
                <el-table-column align="center" prop="assetNumber" label="序号" >
                    <template slot-scope="scope"><span>{{scope.row.assetNumber }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="contractCode" label="风险点" >
                    <template slot-scope="scope"><span>{{scope.row.contractCode }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="purchaseOrder" label="风险对象" >
                    <template slot-scope="scope"><span>{{scope.row.purchaseOrder }}</span></template>
                </el-table-column>
                <el-table-column align="right" prop="amount"  label="危险有害因素" >
                    <template slot-scope="scope"><span>{{scope.row.amount }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="payDateFormat" label="事故类型及后果" >
                    <template slot-scope="scope"><span>{{scope.row.payDateFormat }}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="receiveEnterpriseName" label="评估方法">
                <template slot-scope="scope"><span>{{scope.row.receiveEnterpriseName}}</span></template>
                </el-table-column>
                <el-table-column align="center" prop="statusName" label="固有风险等级" >
                    <template slot-scope="scope">
                        <div style="background:#e6a23c;color:#fff;border-radius:6px">
                            <i class="element-icons el-iconshandian"></i>一般风险<span>{{scope.row.statusName }}</span>
                        </div>
                        
                    </template>
                    
                </el-table-column>
                <el-table-column align="center" prop="createTimeFormat" label="现有管控措施" >
                    <template slot-scope="scope">
                        <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                            <div class="tableUl">
                                <div><b>工程技术措施：</b><span>{{scope.row.statusName}}</span></div>
                                <div><b>管理措施：</b><span>{{scope.row.receiveEnterpriseName}}</span></div>
                                <div><b>个体防护措施：</b><span>{{scope.row.id}}</span></div>
                                <div><b>应急措施：</b><span>{{scope.row.id}}</span></div>
                                <div><b>工程技术措施：</b><span>{{scope.row.id}}</span></div>
                            </div>
                            <a slot="reference" style="text-decoration:underline;color:#3a8ee6;cursor:pointer">点击查看</a>
                        </el-popover>
                        
                        <!-- <span>{{scope.row.createTimeFormat }}</span> --></template>
                </el-table-column>
                 <el-table-column align="center" prop="statusName" label="现有风险等级" >
                    <template slot-scope="scope">
                        <div style="background:#f56c6c;color:#fff;border-radius:6px">
                            <i class="element-icons el-iconshandian"></i>较大风险<span>{{scope.row.statusName }}</span>
                        </div>
                    </template>
                    
                </el-table-column>
                <el-table-column align="center" prop="handle" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="detailRoute(scope.row.id)" type="primary" size="mini" >编辑评估</el-button>
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
             gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                },
            ]
        }
    },
    methods:{
        arraySpanMethod(){},
        goAdd(ind){
            if(ind==1){
                this.$router.push({path:'/home/control/riskAdd',name:'riskAdd'})
            }else if(ind==2){
                this.$router.push({path:'/home/control/assessAdd',name:'assessAdd'})
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
                    border-bottom:4px solid #409eff;
                    text-decoration: none;
                    padding:0 5px 5px;
                    font-size: 14px;
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
