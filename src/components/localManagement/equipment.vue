<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left;">
                <span class="risktitle  active" >统计图  </span>
                <span class="risktitle" @click="organize(2)">设备列表  </span>
                <span class="risktitle"  @click="organize(3)">特种设备列表  </span>
            </div>
            <div style="float:right;">
                <el-button size="mini"  type="primary" @click="goAdd(1)" >添加</el-button>
            </div>
            
        </div>
        <div class="buttoncrowd top_content">
            <div class="charts">
                <div id="myChart" class="chartImg"></div>  
            </div>
            <div class="charts" >
                <div id="myChartTwo" class="chartImg"></div> 
            </div>  
            <div class="charts" >
                <div id="myChartThree" class="chartImg"></div> 
            </div>      
           
        </div>
        
    </div>  
</template>

<script>
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
    name: "equipment",
    data(){
        return {
           
        }
    },
    methods:{
        arraySpanMethod(){},
        drawLine(){
            let myChart = echarts.init(document.getElementById('myChart'));
            let myCharts = echarts.init(document.getElementById('myChartTwo'));
            let myChartThree = echarts.init(document.getElementById('myChartThree'));
            
            let option={
                color: ['#3398DB'],
                title : {
                    text: '各部门固有风险分布图',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['特种设备', '炉类','通用机械','专用仪器仪表'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel:{
                            interval:0,
                            rotate:0,
                            align:'center'
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                legend: {
                    x: 'right',
                    data: [{name:'特种设备',icon:'circle',textStyle:'red'},{name:'炉类',icon:'circle',textStyle:'red'},{name:'专用仪器仪表',icon:'circle',textStyle:'red'}],
                   
                },
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '26%',
                        data:[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}],
                        
                    },
                    
                ]
            };
            if(myChart){
                option.title.text="各类型设备统计";
                option.xAxis[0].data= ['特种设备', '炉类','通用机械','专用仪器仪表'];
                option.series[0].data=[{value:0.2,itemStyle:{color:"#409eff"}},{value:1,itemStyle:{color:"#409eff"}},{value:1,itemStyle:{color:"#409eff"}},{value:1,itemStyle:{color:"#409eff"}}];
                
            }
            myChart.setOption(option);
            if(myCharts){
                option.title.text="各类型设备统计";
                option.xAxis[0].data= ['特种设备', '炉类','通用机械','专用仪器仪表'];
                option.series[0].data=[{value:0.6,itemStyle:{color:"#333"}},{value:0.1,itemStyle:{color:"#cf0812"}}];
            }
            myCharts.setOption(option)
            if(myChartThree){
                option.title.text="各类型设备统计";
                option.xAxis[0].data= ['特种设备','通用机械', '炉类','专用仪器仪表'];
                
                option.series[0].data=[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}];
                
            }
            myChartThree.setOption(option);
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
    },
    mounted(){
        this.drawLine();
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
        .top_content{
            .charts{
                display: inline-block;
                margin:0 60px;
                .chartImg{
                    width: 400px;
                    height: 260px;
                    margin-bottom: 40px;
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
