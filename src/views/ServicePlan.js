import React from "react";
import Services from "../components/services/Services";
import "../components/services/Service.css";



export default function ServicePlan({info}) {
  return (
    <div className="services">
        <div className="elements">
      {info.map((el, key) => (
        <Services
          key={key}         
          title={el.title}
          texte={el.texte}
          image={el.image}
          country={el.country}
        />
      ))}
        </div>
    </div>
    
  );
}
