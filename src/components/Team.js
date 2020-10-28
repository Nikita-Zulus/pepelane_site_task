import React from "react"
import { useSelector } from "react-redux"


export const Team = () => {
    const detailedItem = useSelector(state=>state.detailedItem)
    return (
        <div className="team">
            <p className="team__subtitle">
            {detailedItem.team_text}
            </p> 
        </div>
    )
}