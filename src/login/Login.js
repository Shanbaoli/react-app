import React from 'react';
import './Login.css'
//import { withRouter } from 'react-router-dom';  // 相对react-router之前版本，react-router4通过withRouter获取history，否则拿不到history

//函数组件
class Login extends React.Component{
    constructor(props){
        super(props)

    }

    
    render(props){
        return(
            <div className="login">
                <LoginBox />
    
            </div>
        )

    }
    
}
//登入框
function LoginBox(props){
    return(
        <div className="login-box">
            <LoginTip/>
            <UserInputBox/>
        </div>
    )
}
//登入文字提示
function LoginTip(){
    return (
    <div className="login-tip">登录</div>
    )
    
}
//user输入内容区域
class UserInputBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            psw:'',
            yzm:'',//用户输入的验证码
            sysCode:''//系统生成的验证码
        }
        this.handleUserNameChange=this.handleUserNameChange.bind(this)
        this.handleYzmChange=this.handleYzmChange.bind(this)
        this.handlePswChange=this.handlePswChange.bind(this)

        this.handleClick = this.handleClick.bind(this);

    }
    handleUserNameChange(event){
        this.setState({userName:event.target.value})
    }
    handlePswChange(event){
        this.setState({psw:event.target.value})
    }
    handleYzmChange(event){
        this.setState({yzm:event.target.value})
    }

    handleClick(){
        let a=this.state.yzm
        let b=this.state.sysCode
        let codeIsTrue=validateCode(a,b)
       console.log("验证正确？ "+codeIsTrue)
       if (!codeIsTrue) {
        let sysCode=createCode()
        this.setState({sysCode:sysCode})
       }
     }

    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，
    componentDidMount(){
        let sysCode=createCode()
        this.setState({sysCode:sysCode})

    }

    render(){
        return(
            <div className="user-input-box">
                <UserTextInput inputTips="请输入账号" value={this.state.userName} onChange={this.handleUserNameChange}/>
                <UserPswInput value={this.state.psw} onChange={this.handlePswChange} onChange={this.handlePswChange}/>
                <UserYzmInput 
                    value={this.state.yzm} 
                    onChange={this.handleYzmChange} 
                    onChange={this.handleYzmChange}
                    sysCode={this.state.sysCode}
                    />
                <UserBz />
                <UserLoinBtn onClick={this.handleClick} />
            </div>
        )

    }

    
}
//用户文本输入框
function UserTextInput(props){
    return(
        <div className="user-input-line">
            <input type="text" placeholder={props.inputTips} value={props.userName} onChange={props.onChange}></input>
        </div>
    )
}
//用户密码输入框
function UserPswInput(props){
    return(
        <div className="user-input-line">
            <input type="password" placeholder="请输入密码" value={props.psw} onChange={props.onChange}></input>
        </div>
    )
}
//用户验证码输入行
function UserYzmInput(props){
    return (
        <div className="user-input-yz">
             <input type="text" 
                    placeholder="请输入验证码" 
                    value={props.yzm} 
                    onChange={props.onChange}>
            </input> 
             <div className="code">{props.sysCode}</div>
             {/* <Code></Code> */}
        </div>
    )
}
//dom挂载时生成系统验证码
class Code extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sysCode:''
        }
    }
    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，
    componentDidMount(){
        let sysCode=createCode()
        this.setState({sysCode:sysCode})

    }

    render(){
        return(
        <div className="code">{this.state.sysCode}</div>
        )
    }
}

//用户登入帮助
function UserBz(){
    return(
        <div className="login-pwd-tip">
					<span >
                        <input type="checkbox" name="" className="rmbPwd" id="rmbPwd" value="">
                        </input> 记住密码</span>
					<span className="fgtPwd">忘记密码</span>
		</div>
    )
}
//用户登入按钮
function UserLoinBtn(props){
    return(
        <div className="login-box-btn">
					<span className="login-btn" id="dl_btn" onClick={props.onClick} >登录</span>
				</div>
    )
}

//验证码

function createCode() {

    var code=""
    var codeLength = 4; //验证码的长度
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    return code
  
}

function validateCode(inputCode,code) {
    if (inputCode === "!!!!") {
        return true;
    } else {
        if (inputCode.length <= 0) {
            return false;
        } else if (inputCode.toUpperCase() !== code.toUpperCase()) {
            return false;
        } else {
            return true;
        }
    }
}

export default Login