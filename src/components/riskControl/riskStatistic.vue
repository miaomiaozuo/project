<template>
    <div class="riskIndex">
        <div class="buttoncrowd">
            <div>
                <span class="risktitle">风险统计</span>
            </div>
           
            
        </div>
        <div class="content">
            <div class="charts">
                <div id="myChart" class="chartImg"></div>  
            </div>
            <div class="charts" >
                <div id="myChartTwo" class="chartImg"></div> 
            </div>  
                    
        </div>
        
    </div>  
</template>

<script>
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
    name: "riskList",
    data(){
        return {
           
        }
    },
    methods:{
        arraySpanMethod(){},
        drawLine(){
            let myChart = echarts.init(document.getElementById('myChart'));
            let myCharts = echarts.init(document.getElementById('myChartTwo'));
            
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
                        data : ['燃油费规划法规', '一车间'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '40%',
                        data:[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}],
                        
                    },
                    
                ]
            };
            if(myChart){
                option.title.text="各部门固有风险分布图";
                console.log( option.title.series)
                option.series[0].data=[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}];
                
            }
            myChart.setOption(option);
            if(myCharts){
                option.title.text="各部门现有风险分布图";
                option.series[0].data=[{value:0.6,itemStyle:{color:"#333"}},{value:0.1,itemStyle:{color:"#cf0812"}}];
            }
            myCharts.setOption(option)

        }
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
        .content{
            .charts{
                display: inline-block;
                margin:0 60px;
                .chartImg{
                    width: 300px;
                    height: 200px;
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
