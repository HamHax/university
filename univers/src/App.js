import "./App.css"
import React from "react"
import Wrapper from "./Ui/Wrapper/Wrapper"
import Button from "./Components/Button/Button"
import Input from "./Components/Input/Input"
import List from "./Components/List/List"
import Listitem from "./Components/Listitem/Listitem"
import classes from "./Ui/Global.module.css"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      universe: []
    }
    this.myRef = React.createRef('')
  }
  



  render () {
    return (
      <Wrapper>
      <Input />
      <Button>Search</Button>
       
       <List ></List>
      </Wrapper>
    )
  }
}

export default App