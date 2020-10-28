import React from "react"
import { useSelector } from "react-redux"



export const Specifications = () => {
    const detailedItem = useSelector(state=>state.detailedItem)
    return (
        <div className="specifications"> 
            <p className="specifications__subtitle">
            {detailedItem.specifications_text}
            </p> 
          </div> 
    )
}