<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left">
                <span class="risktitle" >{{titleName}} </span>
            </div>
            <div style="float:right;border:none;">
                <el-button size="mini"  type="primary" @click="goBack">返回</el-button>
            </div>
        </div>
        <div class="buttoncrowd top_content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                <el-form-item label="名称：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="类别：">
                    <el-select v-model="ruleForm.region" placeholder="请选择">
                    <el-option label="一级" value="shanghai"></el-option>
                    <el-option label="二级" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规格/型号" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="功率（kw）：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label='部门：' prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="位号：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="采购时间：">
                    <el-col :span="8">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.name" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="检查时间：">
                    <el-col :span="8">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.name" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="设备状态：">
                    <el-select v-model="ruleForm.region" placeholder="请选择">
                    <el-option label="严重" value="shanghai"></el-option>
                    <el-option label="较轻" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label='生产厂家：' prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="备注信息：" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>  
</template>

<script>
export default {
    name: "riskAdd",
    data(){
        return {
            titleName:"添加",
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入风险点名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个评估对象类型', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择风险定位', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写备注信息', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        init(){
            let locals=this.$route.query;
            console.log(locals)
            if(locals.ind==2){
                this.titleName="修改";
                // this.$http.get('http:baidu.com').then((res) => {
                //     if(res.data.state==200){
                //         let data = res.data.data;
                //         this.capitals=data;
                //         this.selecapital(0,this.capitals[0].investmentId);
                //     }
                // }, error => {
                //     throw error;
                // })
            }

        },
        arraySpanMethod(){},
        goBack(){
            this.$router.push({path:'/home/local/equiplistvery',name:'equiplistvery'});
            
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                alert('submit!');
                } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
    },
    created(){
        this.init();
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
    .el-input,.el-textarea{
        width:30%;
    }
</style>
