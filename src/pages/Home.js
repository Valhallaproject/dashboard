import React from 'react'
import CardFirstFacebook from '../components/common/cardFirst/CardFirstFacebook'
import CardFirstInstagram from '../components/common/cardFirst/CardFirstInstagram'
import CardFirstTwitter from '../components/common/cardFirst/CardFirstTwitter'
import CardFirstYoutube from '../components/common/cardFirst/CardFirstYoutube'
import OverwievCard from '../components/common/overwievCard/OverwievCard'
import Facebook from './../assets/icon-facebook.svg'
import Instagram from './../assets/icon-instagram.svg'
import Twitter from './../assets/icon-twitter.svg'
import Youtube from './../assets/icon-youtube.svg'
import BDD from "./../BDD.json"
import Header from '../components/header/Header'
import "./styles.css"

function Home() {
  return (
    <div className="home">
        <Header />
        <div className="cards">
            <CardFirstFacebook />
            <CardFirstTwitter />
            <CardFirstInstagram />
            <CardFirstYoutube />
        </div>
        <h1>Overview-Today</h1>
        <div className="overwievs">
          <OverwievCard title="Page Views" img={Facebook} number={BDD.overview[0].data1} percent={BDD.overview[0].data2} infoNumber="1"/>
          <OverwievCard title="Likes" img={Facebook} number={BDD.overview[1].data1} percent={BDD.overview[1].data2} infoNumber="0"/>
          <OverwievCard title="Likes" img={Instagram} number={BDD.overview[2].data1} percent={BDD.overview[2].data2} infoNumber="1"/>
          <OverwievCard title="Profile Views" img={Instagram} number={BDD.overview[3].data1} percent={BDD.overview[3].data2} infoNumber="1"/>
          <OverwievCard title="Retweets" img={Twitter} number={BDD.overview[4].data1} percent={BDD.overview[4].data2} infoNumber="1"/>
          <OverwievCard title="Likes" img={Twitter} number={BDD.overview[5].data1} percent={BDD.overview[5].data2} infoNumber="1"/>
          <OverwievCard title="Likes" img={Youtube} number={BDD.overview[6].data1} percent={BDD.overview[6].data2} infoNumber="0"/>
          <OverwievCard title="Total Views" img={Youtube} number={BDD.overview[7].data1} percent={BDD.overview[7].data2} infoNumber="0"/>
        </div>
    </div>
  )
}

export default Home