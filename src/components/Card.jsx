import React, { Component } from 'react'

 const Card = (props) => {
 
    return (
        <div className="card p-2" style={{width:" 16rem" , height : " 24rem", margin : '4px 4px'} }>
            <img src={props.image} className="card-img-top mx-auto" style={{width:'9rem' , height : "10rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title.slice(0,15)}</h5>
                <p className="card-text">{props.description.slice(0,40)}</p>
                <h4>RS : {props.price}</h4>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
     
    )
  
}

export default Card