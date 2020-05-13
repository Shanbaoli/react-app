import React from 'react';
import './Home.css'
import TitleIcon from './img/titleicon.png'
import EchartTj1 from './EchartTj1'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="app">
            <div className="app-left">
                <AppItemBox fx="left" contentText="标题1"></AppItemBox>
                <AppItemBox fx="left" contentText="标题2"></AppItemBox>
                <AppItemBox fx="left" contentText="标题3"></AppItemBox>

            </div>
            <div className="app-center">
                <div className="statistics-data">
                    <SbTitle contentText="实时数据"></SbTitle>
                    <div className="data-row-box">
                        <div className="data-row">
                            <DataCol city="蕉城" increse="0" all="11"></DataCol>
                            <DataCol city="霞浦" increse="0" all="11"></DataCol>
                            <DataCol city="屏南" increse="0" all="11"></DataCol>
                            <DataCol city="周宁" increse="0" all="11"></DataCol>
                            <DataCol city="福安" increse="0" all="11"></DataCol>
                        </div>
                        <div className="data-row">
                            <DataCol city="东桥" increse="0" all="11"></DataCol>
                            <DataCol city="古田" increse="0" all="11"></DataCol>
                            <DataCol city="寿宁" increse="0" all="11"></DataCol>
                            <DataCol city="拓荣" increse="0" all="11"></DataCol>
                            <DataCol city="福鼎" increse="0" all="11"></DataCol>
                        </div>

                    </div>
                    
                </div>
                <div className="chart chart-first">
                    <div className="chartItem chartItemRight">
                        <SbTitle contentText="统计1"></SbTitle>
                    </div>
                    <div className="chartItem">
                        <SbTitle contentText="统计2"></SbTitle>
                        <EchartTj1></EchartTj1>
                    </div>

                </div>
                <div className="chart">
                    <div className="chartItem chartItemRight">
                        <SbTitle contentText="统计3"></SbTitle>
                    </div>
                    <div className="chartItem">
                        <SbTitle contentText="统计4"></SbTitle>
                    </div>

                </div>

            </div>
            <div className="app-right">
                <AppItemBox fx="right" contentText="标题4"></AppItemBox>
                <AppItemBox fx="right" contentText="标题5"></AppItemBox>
                <AppItemBox fx="right" contentText="标题6"></AppItemBox>
            </div>
        </div>
    }
}
function AppItemBox(props){
    return(
        <div className="item">
            <AppLeftItemBoxTop fx={props.fx} contentText={props.contentText}></AppLeftItemBoxTop>
            <div className="item-bottom">
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </div>

        </div>
    )
}

function AppLeftItemBoxTop(props){
    let fx=props.fx;//是左边?还是右边
    if (fx=='left') {
        return(
            <div className="item-top-left">{props.contentText}</div>
        )
        
    } else if (fx=='right') {
        return(
            <div className="item-top-right">{props.contentText}</div>
        )
    } 
}
function Row(){
    return(
        <div className="row">
            <span className="icon-star"></span>
            <span className="info">xxxxxxxxx</span>
            <span className="time">2020-04-01 10:40:19</span>
            <span className="opt">查看</span>
        </div>
    )
}
//
function SbTitle(props){
    return (
        <div className="sb-title">
            <img className="sb-title-icon" src={TitleIcon} alt=""/>
            {props.contentText}

        </div>
    )
}
//
function DataCol(props){
    return(
        <div className="data-col">
            <div>{props.city}(较昨日+{props.increse})</div>
            <div className="totals">{props.all}</div>
        </div>
    )

}

export default Home