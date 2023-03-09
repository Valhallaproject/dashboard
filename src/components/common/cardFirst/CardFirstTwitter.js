import React from 'react'
import BDD from "./../../../BDD.json"
import Icon from "./../../../assets/icon-up.svg"
import Twitter from "./../../../assets/icon-twitter.svg"

import "./CardFirst.css"

function CardFirstTwitter() {
  return (
    <div className="cardFirst twitter">
      <div className="cadrFirstName">
         <img src={Twitter} alt="" />
         <p>{BDD.prospects[1].name}</p>
      </div>
      <p className="nbFollowers">{BDD.prospects[1].followers}</p>
      <p className="followers">FOLLOWERS</p>
      <div className="followToday">
        <img src={Icon} alt=""/>
        <p className="up"> {BDD.prospects[1].dayFollow} Today</p>
      </div>
    </div>
  )
}

export default CardFirstTwitter