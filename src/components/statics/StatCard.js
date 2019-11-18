import React from 'react'

export default function StatCard(props) {
    console.log(props)
    return (

        <div className="countries">
            <img src={props.image} alt='...' />
            <h3> {props.title} </h3>
            <p> {props.texte} </p>
        </div>
    )
}
