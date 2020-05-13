import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class EChartTj1 extends React.Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        var option={
            grid:{
                left: '16%',
                bottom: '24%',
                top:35,
                right:'10%'
            },
            tooltip: {},
            legend:{
                data:['已结案','案件'],
                right:'8%',
                top:0,
                textStyle:{
                    color:'#6b7d8b'
                }
            },
    
            xAxis:{
                data:['蕉城','东桥','霞浦','古田','屏南','寿宁','周宁','拓荣','福安','福鼎'],
                axisLabel:{
                        textStyle:{
                            color:'#6b7d8b'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                                   color:'#21314a'
                               }
                    }
            },
            yAxis: {
                type: 'value',
                    splitLine: {
                      show: true,
                      lineStyle:{
                          type:'dashed',
                        //   color:'#6b7d8b'
                        color:'#21314a'
                      }
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#6b7d8b'
                        },
                    },
                    axisLine:{
                        lineStyle:{
                                   color:'#21314a'
                               }
                    }
            },
            series:[
                {
                    name:'已结案',
                    type: 'bar',
                    data:[12,20,35,40,50,66,79,89,97,109],
                    z:10
         
                },
                {
                    name:'案件',
                    type:'bar',
                    data:[24,45,67,88,100,212,146,160,189,200],
                    barGap:'-100%'
                }
            ],
            color:['#00C7FF','#2CFF99']
            
    
        }
        myChart.setOption(option);

        window.onresize = function(){
            myChart.resize();
        }
   
    }
    render() {
        return (
            <div id="main" style={{ width: 100+'%', height: 100+'%' }}></div>
        );
    }

    
    
}

export default EChartTj1