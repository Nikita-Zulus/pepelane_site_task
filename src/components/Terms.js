import React from "react"
import { useSelector } from "react-redux"

export const Terms = () => {
    const detailedItem = useSelector(state=>state.detailedItem)
    return (
        <div className="rent-terms">
            <p className="rent-terms__subtitle">
            {detailedItem.term_text}
            </p> 
        </div>  
    )
}