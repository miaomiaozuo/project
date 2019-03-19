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
                <el-button size="mini"  type="primary" @click="exportData()">导出数据</el-button>
                <el-button size="mini"  type="primary">
                    <el-upload  :show-file-list="false" name="file" :action='imports'  :on-success="cardFrontSuccess" :on-error="this.handleError" >导入数据
                    </el-upload>
                </el-button>
                <el-button size="mini"  type="warning" @click="deleteData()">删除</el-button>
            </div>
            
        </div>
        <div class="buttoncrowd top_content">
            <div class="content_search"> 
                <div>  工号： <el-input   v-model="input2"></el-input> </div>
                <div>  姓名： <el-input  v-model="input2"></el-input> </div>
                <div>归属部门： <el-input  v-model="input2"  suffix-icon="el-icon-circle-plus-outline" @focus="alertMark()"></el-input> </div>
                <div class="btns"><el-button size="mini"  type="primary">查询</el-button></div>
            </div>
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
        <el-dialog title="选择区域" :visible.sync="dialogTableVisible">
            <el-input  placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
            <el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all show-checkbox node-key="id" :filter-node-method="filterNode" ref="tree"  @node-click="handleNodeClick"> </el-tree>
            <el-button type="primary" @click="getCheckedKeys()">确认</el-button>
        </el-dialog>
    </div>  
</template>

<script>


export default {
    name: "riskList",
    data(){
        return {
            dialogTableVisible:false,
            imports:"导入数据路径",
            input2:'',
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
            filterText: '',
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                    id: 9,
                    label: '三级 1-1-1'
                    }, {
                    id: 10,
                    label: '三级 1-1-2'
                    }]
                }]
                }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                children: 'children',
                label: 'label'
                }
            
        }
    },
    methods:{
        arraySpanMethod(){},
        goAdd(ind){//添加跳转
            this.$router.push({path:'/home/information/organizePAdd',name:'organizePAdd',query:{
                'ind':ind}})
        },
        organize(ind){//列表路由跳转
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
            
        },
        alertMark(){//查询部门时点击出现弹框
            console.log(1)
           this.dialogTableVisible=true;
        },
        filterNode(value, data) {//树形图过滤并渲染
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },  
        getCheckedKeys(){//树形图选中后确认
            this.dialogTableVisible=false;
        },
        handleNodeClick(data,a,b) {//树形图选中
            // console.log(data);
            // console.log(a);
            // console.log(b);
            // console.log(this.$refs.tree.getHalfCheckedKeys())
            console.log(this.$refs.tree.getCheckedKeys())
        }
    },
    watch: {
        filterText(val) {//过滤
            this.$refs.tree.filter(val);
        }
    },

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
            padding:30px 20px 20px;
        }
        .content_search{
            margin-bottom: 20px;
            padding-left: 20px;
            div{
                display: inline-block;
                margin-right: 20px;
                .el-input{
                    width: 140px;
                }
                
            }
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
<style>
.el-input__suffix-inner .el-input__icon{
        font-size: 20px!important;
        color: #409eff;
    }
    .is-current{
        background: #409eff;
        color: #fff;
    }
</style>

