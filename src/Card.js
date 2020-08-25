import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="Card">
            {console.log(props.title)}
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}
