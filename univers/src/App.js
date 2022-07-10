import "./App.css"
import Wrapper from "./Ui/Wrapper/Wrapper"
import Button from "./Components/Button/Button"
import Input from "./Components/Input/Input"
import List from "./Components/List/List"
import Listitem from "./Components/Listitem/Listitem"
import classes from "./Ui/Global.module.css"
import React, { Component } from "react"


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      univers: []
    }
    this.myRef = React.createRef('')
  }
  findeUniverse = () => {
    fetch(`http://universities.hipolabs.com/search?country=${this.myRef.current.value}`)
    .then(data => data.json())
    .then(res => this.setState({
      univers: res
    }))
  }
  render(){
    return(
      <Wrapper>
        <input ref= {this.myRef}/>
        <Button onClick={this.findeUniverse}>Finde univers</Button>
        {
          <List>
            {this.state.univers.map(univer =>{
              return <Listitem key={Math.random()} className='item'>
                {univer.alpha_two_code}
                <br />
                {univer.country}
                <br />
                {univer.name}
                <br />
               {univer.web_pages}
              </Listitem>
            })}
          </List>
        }
      </Wrapper>
    )
  }
}
export default App