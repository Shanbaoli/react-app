//class组件
import React from 'react';
import './Main.css'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={text:"hello world"}
        //很重要
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        alert('我被点击')
    }

    render(){
        return <div className="main-box">
            <header>
                <div className="header-left"></div>
                <div className="header-center"></div>
                <div className="header-right"></div>
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

function Btn(props){
    return(
        <button onClick={props.onClick}>测试</button>
    )
}
export default Main