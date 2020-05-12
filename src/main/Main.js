//class组件
import React from 'react';
import './Main.css'
import Dbyw from './img/waittofinish.png'
import Mrzp from './img/mrzp.jpg'
import Qp from './img/wholescreen.png'
import LogoText from './img/logotext.png'
import FirstNavArrow  from './img/firstnavarrow.png'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={text:"hello world"}
        //很重要
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        alert(this.props.history)
    }

    render(){
        return <div className="main-box">
            <header>
                <div className="header-left">
                    <img src={LogoText} alt=""/>

                </div>
                <div className="header-center">
                    <MenuFirst></MenuFirst>
                    <MenuSecond></MenuSecond>

                </div>
                <div className="header-right">
                    <div className="header-right-1">
                        <img src={Dbyw} alt=""/>
                        <span>代办业务</span>
                    </div>
                    <div className="header-right-1">
                        <img src={Mrzp} className="index-user-img" alt=""/>
                        <span>test</span>
                    </div>
                    <div className="header-right-1">
                        <img src={Qp} alt=""/>
                        <span>全屏</span>
                    </div>
                </div>
            </header>
            <div className="main-box-bottom"></div>
        </div>
       
    }  
}
// class Btn extends React.Component{
//     render(){
//         return(
//         <button onClick={this.props.onClick}>测试</button>
//         )
//     }
// }
//一级菜单
class MenuFirst extends React.Component{
    constructor(props){
        super(props)
        this.state={
            MenuArr:['首页','设置','地图','更多'],
            FirstNavArrowIsShow:[true,false,false,false]
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(i,j,event){
        console.log(i)
        console.log(j)
        console.log(event.target)
        let temparr=this.state.FirstNavArrowIsShow;

        for (let index = 0; index < temparr.length; index++) {
            temparr[index]=false
            
        }
        temparr[j]=true
        this.setState({FirstNavArrowIsShow:temparr})
       // console.log(this.state.MenuArr[i])

    }
  
    render(){
        const arr=this.state.MenuArr
        return <div className="nav-first">
           {arr.map((val,index)=>{
               return <div key={index} className="nav-box" onClick={event=>this.handleClick(val,index,event)} >
                   {val}
                   <FirstNavArrowIsShow show={this.state.FirstNavArrowIsShow[index]}></FirstNavArrowIsShow>
               </div>
           })}
        </div>
    }
}
//一级菜单选中样式
function FirstNavArrowIsShow(props){
    let a=props.show
    if (!a) {
        return null
    }else{
        return <img className="select-icon-first" src={FirstNavArrow} alt=""/>
    }
}

//二级菜单
function MenuSecond(props){
    return(
        <div className="nav-second"></div>
    )

}


function Btn(props){
    return(
        <button onClick={props.onClick}>测试</button>
    )
}
export default Main