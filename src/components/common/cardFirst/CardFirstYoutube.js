import React from 'react'
import BDD from "./../../../BDD.json"
import Icon from "./../../../assets/icon-down.svg"
import Youtube from "./../../../assets/icon-youtube.svg"

import "./CardFirst.css"

function CardFirstYoutube() {
  return (
    <div className="cardFirst youtube">
      <div className="cadrFirstName">
         <img src={Youtube} alt="" />
         <p>{BDD.prospects[3].name}</p>
      </div>
      <p className="nbFollowers">{BDD.prospects[3].followers}</p>
      <p className="followers">FOLLOWERS</p>
      <div className="followToday">
        <img src={Icon} alt=""/>
        <p className="down"> {BDD.prospects[3].dayFollow} Today</p>
      </div>
    </div>
  )
}

export default CardFirstYoutube