<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left">
                <span class="risktitle" >添加风险点 </span>
            </div>
            <div style="float:right;border:none;">
                <el-button size="mini"  type="primary" @click="goBack">返回</el-button>
            </div>
        </div>
        <div class="buttoncrowd top_content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                <el-form-item label="风险点名称：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="评估对象类型：" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="设备" name="type"></el-checkbox>
                    <el-checkbox label="作业" name="type"></el-checkbox>
                    <el-checkbox label="原材料" name="type"></el-checkbox>
                    <el-checkbox label="厂房环境" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="风险定位：" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
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
        arraySpanMethod(){},
        goBack(){
                this.$router.push({path:'/home/control',name:'riskList'})
            
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
    .el-input,.el-textarea{
        width:30%;
    }
</style>
