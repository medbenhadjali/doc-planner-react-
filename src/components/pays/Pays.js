import React from 'react'

export default function Pays(props) {
    return (
        
        <div className="ville">
            <img src={props.image} alt='...'/>
            
            <div className = "description">
                <p> {props.title} </p> 
                <button className="btn" type="button">See openings</button>
            </div>
        </div>
    )
}
