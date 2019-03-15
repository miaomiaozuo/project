<template>
    <div class="riskIndex">
        <div class="buttoncrowd">
            <div>
                <span class="risktitle" >管控措施清单</span>
            </div>
           
            
        </div>
        <div class="buttoncrowd">
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
                
               <el-table-column align="center" prop="statusName" label="现有风险等级" >
                    <template slot-scope="scope">
                        <div style="background:#f56c6c;color:#fff;border-radius:6px">
                            <i class="element-icons el-iconshandian"></i>较大风险<span>{{scope.row.statusName }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="createTimeFormat" label="管控层级" >
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
                 
                    
                
                 <el-table-column align="center" prop="handle" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="detailRoute(scope.row.id)" type="primary" size="mini" >编辑修改</el-button>
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
    }

}
</script>

<style scoped lang="scss">
    .riskIndex{
       width: 100%;
       height: 100%;
        .buttoncrowd{
            margin:10px;
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
