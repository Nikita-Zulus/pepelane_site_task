import React, { Fragment } from "react"
import { connect } from "react-redux"
import addBtn from "../images/add-btn.svg"
import arrowDown from "../images/arrow-down.svg"
import {NavLink} from "react-router-dom"
import {setDetailedItem} from  "../redux/actions.js"


function Rentitems_({error,items,setDetailedItem}){
 
   function handleClick(e){
     console.log(e.currentTarget.id)
     setDetailedItem(items.filter(x=>x.id===e.currentTarget.id)[0])
   }  
  
    return (
         <Fragment>
            {!error&&<div className="header-body">
            <div className="header-body__title">Rent &nbsp;<div className="blue-word">whatewer</div><img src={arrowDown} className="arrow-down__btn" alt="arroe-down"/></div>
                  {/* <p>
                    <select multiple>
                        <option disabled>whatewer</option>
                    </select>
                  </p> */}
                  <div className="add-item"><div className="add-item__title">Add new</div><img src={addBtn} className="add-item__btn" alt="add-btn"/></div>
                </div>}
            {!error&&<div className="rentitems">
             {items.map((item) => ( 
                <Fragment key={item.id}>
                  <NavLink to={`/${item.name}`}  className="item" onClick={handleClick} id={item.id}>
                  <img className="item__image" src={item.preview} alt="rent-item-img" />
                  <div className="item__description" >
                    <div className="item__title" >{item.name}</div>
                    <div className="item__subtitle" >{item.description}</div>
                    <div className="item__price">{item.rent} $/h</div>
                  </div>
                  </NavLink>
                </Fragment>))}  
             </div>}
          </Fragment> 
           
    )
}
const mapStateToProps = (state) => {
    return {
        error:state.error,
        items: state.items,
    }
}
const mapDispatchToProps = {
  setDetailedItem,
  /* setShow */
}
export const Rentitems = connect(mapStateToProps,mapDispatchToProps)(Rentitems_)