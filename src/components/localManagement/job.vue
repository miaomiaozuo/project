<template>
    <div class="riskIndex">
        <div class="buttoncrowd top_header">
            <div style="float:left">
                <span class="risktitle">风险统计</span>
            </div>
           <div style="float:right;" class="riskB">
                <div class="important"><i></i>重大风险</div>
                <div class="langer"><i></i>较大风险</div>
                <div class="general"><i></i>一般风险</div>
                <div class="low"><i></i>低风险</div>
           </div>
            
        </div>
        <div class="content top_content">
            <div class="charts">
                <div id="myChart" class="chartImg"></div>  
            </div>
            <div class="charts" >
                <div id="myChartTwo" class="chartImg"></div> 
            </div>  
            <div class="charts" >
                <div id="PieOne" class="chartImg"></div> 
            </div>  
            <div class="charts" >
                <div id="PieTwo" class="chartImg"></div> 
            </div>      
            <div class="charts" >
                <div id="myChartThree" class="chartImg"></div> 
            </div>      
            <div class="charts" >
                <div id="myChartFour" class="chartImg"></div> 
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
            let myChartThree = echarts.init(document.getElementById('myChartThree'));
            let myChartFour = echarts.init(document.getElementById('myChartFour'));
            
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
                        barWidth: '20%',
                        data:[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}],
                        
                    },
                    
                ]
            };
            if(myChart){
                option.title.text="各部门固有风险分布图";
                option.xAxis[0].data= ['燃油费规划法规', '一车间'];
                option.series[0].data=[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}];
                
            }
            myChart.setOption(option);
            if(myCharts){
                option.title.text="各部门现有风险分布图";
                option.xAxis[0].data= ['燃油费规划法规', '一车间'];
                option.series[0].data=[{value:0.6,itemStyle:{color:"#333"}},{value:0.1,itemStyle:{color:"#cf0812"}}];
            }
            myCharts.setOption(option)
            if(myChartThree){
                option.title.text="作业活动等级风险柱状图";
                option.xAxis[0].data= ['大扫除', '设备检修','打磨工作'];
                
                option.series[0].data=[{value:0.2,itemStyle:{color:"#333"}},{value:1,itemStyle:{color:"#cf0812"}}];
                
            }
            myChartThree.setOption(option);
            if(myChartFour){
                option.title.text="事故后果柱状图";
                 option.xAxis[0].data= ['物体打击'];
                option.series[0].data=[{value:0.6,itemStyle:{color:"#333"}}];
            }
            myChartFour.setOption(option)

        },
        drawPie(){
            let PieChartsOne = echarts.init(document.getElementById('PieOne'));
            let PieChartsTwo = echarts.init(document.getElementById('PieTwo'));
            
            let option = {
                title : {
                    text: '',
                    subtext: '',
                    x:'center'
                },
                series : [
                    {
                        name: '',
                        type: 'pie',
                        radius :[ "20%",'80%'],
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'111'},
                            {value:310, name:'222'},
                            {value:234, name:'333'},
                            {value:135, name:'44'},
                            {value:1548, name:'50'}
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        avoidLabelOverlap: false,
                        itemStyle: {
                            emphasis: {
                            
                            
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'inside'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    }
                ]
            }; 
             if(PieChartsOne){
                option.title.text="公司固有风险分布图";
                option.series[0].data=[{value:0.2,name:'111',itemStyle:{color:"#333"}},{value:1,name:'111',itemStyle:{color:"#cf0812"}}];
                
            }
            PieChartsOne.setOption(option);
            if(PieChartsTwo){
                option.title.text="公司现有风险分布图";
                option.series[0].data=[{value:0.6,name:'111',itemStyle:{color:"#333"}},{value:0.6,name:'111',itemStyle:{color:"#eee"}},{value:0.1,name:'111',itemStyle:{color:"#cf0812"}}];
            }
            PieChartsTwo.setOption(option);
        }
    },
    mounted(){
        this.drawLine();
        this.drawPie();
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
            .riskB{
                >div{
                    display: inline-block;
                    margin-right: 10px;
                    font-size: 12px;
                }
                i{
                    display: inline-block;
                    width:8px;
                    height: 8px;
                    border-radius: 100%;
                    margin-right: 4px;
                }
            }
            .important i{
                background: #e52e2d;
            }
            .langer i{
                background: #e86940;
            }
            .general i{
                background: #f3c949;
            }
            .low i{
                background: #427fed;
            }

        }
        .content{
            .charts{
                display: inline-block;
                margin:0 60px;
                .chartImg{
                    width: 300px;
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
