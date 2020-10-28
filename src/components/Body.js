import React from "react"
import { useSelector } from "react-redux"
import { Error } from "./Error"
import { Rentitems } from "./Rentitems"

export function Body(){
    const errStyle = useSelector(state => state.error)
    return (
        <div className="body-main" style={errStyle?{height:"100%"}:{height:"auto",marginBottom:"48px"}}>
              <Error/> 
              <Rentitems/>
            </div>
    )
}