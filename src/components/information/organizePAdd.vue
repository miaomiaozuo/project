<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left">
                <span class="risktitle" >{{titleName}}</span>
            </div>
            <div style="float:right;border:none;">
                <el-button size="mini"  type="primary" @click="goBack">返回</el-button>
            </div>
        </div>
        <div class="buttoncrowd top_content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                <el-form-item label="资料："><el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="归属部门：" prop="name">
                    <el-input  v-model="ruleForm.name"  suffix-icon="el-icon-circle-plus-outline" @focus="alertMark()"></el-input> 
                </el-form-item>
                <el-form-item label="工号：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
               
                <el-form-item label="职位/岗位：" prop="name">
                   <el-select v-model="ruleForm.region" placeholder="请选择部门类型"  suffix-icon="el-icon-arrow-down">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="登录名：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
               <el-form-item label="密码：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="手机：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="是否允许登录：" prop="name">
                   <el-select v-model="ruleForm.region" placeholder="请选择">
                        <el-option label="是" value="shanghai"></el-option>
                        <el-option label="否" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户类型：" prop="name">
                   <el-select v-model="ruleForm.region" placeholder="请选择">
                        <el-option label="专业户" value="shanghai"></el-option>
                        <el-option label="散户" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户角色："  prop="name">
                    <el-checkbox-group v-model="ruleForm.name">
                    <el-checkbox label="公司管理员" name="type"></el-checkbox>
                    <el-checkbox label="外部用户" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="备注：" prop="desc">
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
            dialogTableVisible:false,
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
            },
            fileList:[]
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
                this.$router.push({path:'/home/information/organizePeople',name:'organizePeople'})
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
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
        alertMark(){//查询部门时点击出现弹框
            console.log(1)
           this.dialogTableVisible=true;
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
