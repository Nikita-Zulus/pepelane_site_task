import React,{useState} from "react"
import { useSelector } from "react-redux"
import challenge from "../images/challenge.svg"
import pilot from "../images/pilot.svg"
import { Specifications } from "./Specifications"
import { Team } from "./Team"
import { Terms } from "./Terms"

export const DetailedItem = () => {
  const detailedItem = useSelector(state => state.detailedItem)
  const[radio,setRadio] = useState("specifications");
    return (
      
      <div className="detailedItem">
        <img className = "detailedItem__image" src={detailedItem.image} alt="detailed-img"/> 
        <div className="detailedItem__description">
          <div className="item__title item__title_big-font">{detailedItem.name}</div> 
            <div className="radiobuttons">
              <label className="radiobuttons__lable">
                <input
                  value="specifications"
                  type="radio"
                  name="detailedItem__radio"
                  onChange={(e) => setRadio(e.target.value)}
                  className="detailedItem__radio"
                />
              <div className="specifications__title" style={radio==="specifications"?{color: "#4959ff"}:{color: "#677b8f"}}>
                Specifications
              </div>
              </label>

              <label className="radiobuttons__lable">
                <input
                  value="terms"
                  type="radio"
                  name="detailedItem__radio"
                  onChange={(e) => setRadio(e.target.value)}
                  className="detailedItem__radio"
                />
              <div className="rent-terms__title" style={radio==="terms"?{color: "#4959ff"}:{color: "#677b8f"}}>
              Rent terms
              </div> 
              </label>
              <label className="radiobuttons__lable">
                <input
                  value="team"
                  type="radio"
                  name="detailedItem__radio"
                  onChange={(e) => setRadio(e.target.value)}
                  className="detailedItem__radio"
                />
                <div className="team__title" style={radio==="team"?{color: "#4959ff"}:{color: "#677b8f"}}>
                Team
                </div> 
              </label>
            </div>

             {radio==="specifications"&&<Specifications />}
             {radio==="terms"&&<Team />}
             {radio==="team"&&<Terms />}
          
          <div className="features">
            <div className="features__title_big-font">Features:</div>
            <div className="features__one"><img className="features__img" src={challenge} alt="challenge" />
              <div>
                <div className="features__title">A challenge for a true champion</div>
                <p className="features__subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>
            </div>
            <div className="features__two"><img className="features__img" src={pilot} alt="pilot" />
              <div>
                <div className="features__title">Pilot's sweaty hands</div>
                <p className="features__subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>
            </div>
          </div>
          <div className="detailedItem__footer">
            <div className="rent">Rent for&nbsp;<div className="item__price item__price_big-font">{detailedItem.rent} $/h</div></div>
            <button className="rent-btn">Rent now</button>
          </div>  
        </div>
      </div>
  
    )
}