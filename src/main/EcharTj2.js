import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
//import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class EChartTj2 extends React.Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('ajlx'));
        // 绘制图表
        var option={
            grid:{
                  left: '16%',
                  bottom: '24%',
                  top:35,
                  right: '10%'
              },
              series: [{
                      type: 'pie',
                      center:['50%',"50%"],//饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
                                          //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
                      radius:"60%",
                      data: [
                          {name:'案件初查',value:10},
                          {name:'行政案件',value:10},
                          {name:'刑事案件',value:20},
                          {name:'抢骗行动专案',value:30},
                          {name:'专案',value:30},
                      ],
                     
                     
                  }],
              color:['#4948F4',' #2E7EFE','#5DFFEE',' #5487F8','#b7689c'],
              tooltip: {},
              textStyle:{
                          color:'rgb(185, 194, 202)',
                          fontSize:14
                      }
           }
        myChart.setOption(option);

        window.onresize = function(){
            myChart.resize();
        }
   
    }
    render() {
        return (
            <div id="ajlx" style={{ width: 100+'%', height: 100+'%' }}></div>
        );
    }

    
    
}

export default EChartTj2