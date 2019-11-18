import React from "react";

export default function Services(props) {
  return (
    
      
      <div className="element1">
        <div className="market">
          <h2> {props.title} </h2>
          <h1> {props.texte} </h1>
        </div>
        {props.country !== null && (
          <select className="btn-choix">
            {props.country.map((el, key) => (
              <option key={key}>{el}</option>
            ))}
          </select>
        )}

        <img src={props.image} className="item" alt='...' />
      </div>
    
    
  );
}
