import React, { Fragment } from "react"
import { connect } from "react-redux";
import {setItems} from "../redux/actions.js"



function Error_({setItems,error}){
    function handleClick(){
        setItems();
    }
    
    return (
        <Fragment>
       {error&& 
        <div className="error">
          <div className="error__title">An error has occurred</div>  
          <p className="error__subtitle">Please refresh the page</p>
          <button className="error__reloaded" onClick={handleClick}>Reload page</button>
        </div>
}
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        error:state.error,
    }
}
const mapDispatchToProps = {
    setItems,
  };

export const Error = connect(mapStateToProps,mapDispatchToProps)(Error_);