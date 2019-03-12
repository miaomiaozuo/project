<template>
    <div class="riskIndex">
        <div class="buttoncrowd">
            <el-button size="mini"  type="primary">添加风险点</el-button>
            <el-button size="mini"  type="primary">添加评估</el-button>
            <el-button size="mini"  type="primary">导出数据</el-button>
            <el-button size="mini"  type="primary">导入数据</el-button>
            <el-button size="mini"  type="warning">删除</el-button>
        </div>
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
                 <template slot-scope="scope"><span>{{scope.row.statusName }}</span></template>
            </el-table-column>
            <el-table-column align="center" prop="createTimeFormat" label="现有管控措施" >
                <template slot-scope="scope"><span>{{scope.row.createTimeFormat }}</span></template>
            </el-table-column>
            <el-table-column align="center" prop="handle" label="操作" width="180">
                <div slot-scope="scope">
                    <template v-if="scope.row.isShow">
                    <el-button @click="passClick(scope.row)" type="text" size="small" title="通过"><img src="/static/debt/ICON-32.png" alt=""></el-button>
                        <el-button @click="refuseClick(scope.row.id)" type="text" size="small"  title="拒绝"><img src="/static/debt/ICON-33.png" alt=""></el-button>
                        <el-button @click="backClick(scope.row.id)" type="text" size="small"><img  title="退回" src="/static/credit/icon-59.png" alt=""></el-button>
                        <el-button @click="detailRoute(scope.row.id)" type="text" size="small"><img title="详情" src="/static/debt/icon-34.png" alt=""></el-button>
                    </template>
                    <template v-else  >
                        <span class="tableDetail">-</span>
                        <span class="tableDetail">-</span>
                        <span class="tableDetail">-</span>
                        <el-button @click="detailRoute(scope.row.id)" type="text" size="small" ><img title="详情"  src="/static/debt/icon-34.png" alt=""></el-button>
                    </template>
                </div>
                 
            </el-table-column>
        </el-table>
    </div>  
</template>

<script>
export default {
    name: "riskList",
    data(){
        return {

        }
    }

}
</script>

<style scoped lang="scss">
    .riskIndex{
       width: 100%;
       height: 100%;
        .buttoncrowd{
            text-align: right;
            margin:10px;
        }
    }
</style>
