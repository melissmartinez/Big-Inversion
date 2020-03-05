import React, { Component } from 'react';
const MyInversion = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>{props.Age}</p>
            <p>{props.hairColor}</p>
        </div>
    );
}
export default MyInversion;