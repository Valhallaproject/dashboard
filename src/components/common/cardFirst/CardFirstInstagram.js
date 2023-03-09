import React from 'react'
import BDD from "./../../../BDD.json"
import Icon from "./../../../assets/icon-up.svg"
import Instagram from "./../../../assets/icon-instagram.svg"

import "./CardFirst.css"

function CardFirstInstagram() {
  return (
    <div className="cardFirst instagram">
      <div className="cadrFirstName">
         <img src={Instagram} alt="" />
         <p>{BDD.prospects[2].name}</p>
      </div>
      <p className="nbFollowers">{BDD.prospects[2].followers}</p>
      <p className="followers">FOLLOWERS</p>
      <div className="followToday">
        <img src={Icon} alt=""/>
        <p className="up"> {BDD.prospects[2].dayFollow} Today</p>
      </div>
    </div>
  )
}

export default CardFirstInstagram