import React from "react"
import { Header } from "./components/Header"
import {BrowserRouter, Route, Switch } from "react-router-dom"
import { useSelector } from "react-redux"
import { DetailedItem } from "./components/DetailedItem"
import { Body } from "./components/Body"




function App() {
  const detailedItem = useSelector(state => state.detailedItem)

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" component={Body} exact/>
          <Route path={`/${detailedItem.name}`} component={DetailedItem} />
        </Switch>
      </div> 
    </BrowserRouter>  
  );
}

export default App;
