import React from 'react';
import Axios from 'axios'
import {BrowserRouter as Router , Route, Switch, Link} from "react-router-dom"
import {SwitchTransition,CSSTransition} from 'react-transition-group'

import 'animate.css'
import './App.css';
import Author from './components/author/author'
import Base from './components/base/base'
import Skill from './components/skill/skill'
import Exper from './components/experience/exper'

Axios.defaults.baseURL = "http://www.zxyow.com/myapi"
React.Component.prototype.$axios = Axios;


function TransionRouter(props){
  return <Route path={props.path} exact>
          {()=>{
            return <SwitchTransition mode="out-in">
              <CSSTransition       
                timeout={350}
                key={props.akey}
                classNames={ {
                  enter:'animate__animated animate__fadeIn',
                  exit:'animate__animated animate__fadeOut'
                } }>
                  {props.children}
              </CSSTransition>
            </SwitchTransition>
            }
          }
        </Route>

}

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      base:[],
      basetitle:'',
      skills:[],
      demos:[],
      author_img:'',
      skillTitle:'',
      demoTitle:''  
    }
  }
  render(){
    return (
    <div className="App">
      
      <Author author_img={this.state.author_img}></Author>
      <Router>
        <nav className="navlink">
          <Link to="/myresume/">{this.state.basetitle}</Link>
          <Link to="/myresume/skill">{this.state.skillTitle}</Link>
          <Link to="/myresume/experence">{this.state.demoTitle}</Link>
        </nav>

        <Switch>
          <TransionRouter path="/myresume/" exact akey={this.state.basetitle}>
            <Base title={this.state.basetitle} base={this.state.base}></Base>
          </TransionRouter >

          <TransionRouter path="/myresume/skill"  akey={this.state.skillTitle}>
            <Skill skills={this.state.skills} skillTitle={this.state.skillTitle}></Skill>
          </TransionRouter>

          <TransionRouter path="/myresume/experence" akey={this.state.demoTitle}>
            <Exper demos={this.state.demos} demoTitle={this.state.demoTitle}></Exper>
          </TransionRouter>
        </Switch>
      </Router>
        </div>
    )
  }
  
  componentDidMount(){
    Axios.get('/resume.json').then(res=>{
      this.setState({
        base:res.data.base.base,        
        basetitle:res.data.base.title,
        skills:res.data.skills,
        demos:res.data.demos,
        author_img:res.data.author_image,
        skillTitle:res.data.skillTitle,
        demoTitle:res.data.demoTitle
      })
    })
  
  }
 
 
}

