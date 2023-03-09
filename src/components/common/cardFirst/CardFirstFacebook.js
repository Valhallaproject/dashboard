import React from 'react'
import BDD from "./../../../BDD.json"
import Facebook from "./../../../assets/icon-facebook.svg"
import Icon from "./../../../assets/icon-up.svg"
import "./CardFirst.css"

function CardFirstFacebook() {


  return (
    <div className="cardFirst facebook">
      <div className="cadrFirstName">
         <img src={Facebook} alt="" />
         <p>{BDD.prospects[0].name}</p>
      </div>
      <p className="nbFollowers">{BDD.prospects[0].followers}</p>
      <p className="followers">FOLLOWERS</p>
      <div className="followToday">
        <img src={Icon} alt=""/>
        <p className="up"> {BDD.prospects[0].dayFollow} Today</p>
      </div>
      
    </div>
  )
}

export default CardFirstFacebook