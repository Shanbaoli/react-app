import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
//import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class EChartTj3 extends React.Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('bkqk'));
        // 绘制图表
        var option={
            grid:{
                left: '16%',
                bottom: '24%',
                top:35,
                right: '10%'
            },
            xAxis:{
                data:['蕉城','霞浦','屏南','周宁','福安','东桥','古田','寿宁','柘荣','福鼎'],
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
                            // color:'#6b7d8b'
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
                                   color:'#21314a',
                                   
                                   
                               }
                    },
                    
            },
            series:[
                {  
                    type: 'bar',
                    data:[1,2,3,4,5,6,7,8,9,10]
                }
            ],
            color:['#00C7FF'],
            tooltip: {},//显示工具
        
         }
        myChart.setOption(option);

        window.onresize = function(){
            myChart.resize();
        }
   
    }
    render() {
        return (
            <div id="bkqk" style={{ width: 100+'%', height: 100+'%' }}></div>
        );
    }

    
    
}

export default EChartTj3