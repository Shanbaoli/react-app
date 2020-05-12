import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//引入路由组件

import {HashRouter as Router,Route,Link,BrowserRouter  ,Switch,Redirect} from 'react-router-dom';

//我写的
import MyTitle from './demo1/a'
import Login from './login/Login'
import Main from './main/Main'

function test(){
  ReactDOM.render(
    <React.StrictMode>
      <MyTitle />
      
   
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

ReactDOM.render(
  <React.StrictMode>
      <Router>

        <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/main" component={Main}/>
              
        </Switch>

      </Router>
    
     
 
  </React.StrictMode>,
  document.getElementById('root')
);

// setInterval(test,1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
