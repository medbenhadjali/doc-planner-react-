import React from "react";
import StatCard from "../components/statics/StatCard";
import  "../components/statics/StatCard.css";

function Stat({ statArr}) {
  return (
    <div className="stat">
        <div className="platform">
        <h1>The world's biggest healthcare platform</h1>
        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        <img className="stat-logo" src="https://www.docplanner.com/img/sygnet.svg" alt='...'/>
        </div>
        <div className="chiffre">
      {statArr.map((el, key) => (
        <StatCard
          key={key}
          image={el.image}
          title={el.title}
          texte={el.texte}
        />
      ))}
      </div>
    </div>
  );
}
export default Stat;
