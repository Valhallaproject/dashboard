import React from 'react'
import Up from "./../../../assets/icon-up.svg"
import Down from "./../../../assets/icon-down.svg"
import "./OverwievCard.css"

function OverwievCard(props) {

    let number

    if (props.infoNumber === "1") {
        number = <div className="number">
            <p className="result">{props.number}</p>
            <div className="percent percentUp">
                <img src={Up} alt=""/>
                <p>{props.percent}</p>
            </div>
        </div>
    }else if(props.infoNumber === "0") {
        number = <div className="number">
            <p className="result">{props.number}</p>
            <div className="percent percentDown">
                <img src={Down} alt=""/>
                <p>{props.percent}</p>
            </div>
        </div>
    }

  return (
    <div  className="overwievCard">
        <div className="info">
            <p>{props.title}</p>
            <img src={props.img} alt=""/>
        </div>
        {number}
       
    </div>
  )
}

export default OverwievCard