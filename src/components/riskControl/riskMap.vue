<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div>
                <span class="risktitle" >风险分布图</span>
            </div>
           
            
        </div>
        <div class="buttoncrowd top_content">
           
        </div>
        
    </div>  
</template>

<script>
export default {
    name: "riskList",
    data(){
        return {
           
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
