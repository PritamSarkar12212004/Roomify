import React from "react";
import Hero from "../hero/Hero";
import BgStyle from "../bgStyle/BgStyle";
import Navs from "../naviGation/Navs";
import ShowContainers from "../ShowContainer/ShowContainers";
import NotificationItem from "../Notification/NotificationItem";

function Home() {
  return (
    <div className="w-full  bg-white h-screen max-w-screen-xl mx-auto">
      <NotificationItem />
      <Hero />
      <BgStyle />
      <Navs />
      <ShowContainers />
    </div>
  );
}

export default Home;
