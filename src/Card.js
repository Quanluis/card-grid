import React, { Component } from 'react';

class Card extends Component{
     render(){
         // look up and think on how we can use the "ternary" operator
         // it is sometimes called the elvis operator.
         let style;
         if(this.props.isLiked){
             style = {color: 'black'};
         } else {
             style = {color: 'red'}
         }
         return (
        <div className = "col-md-3">
            <img src = {this.props.src} alt = {this.props.caption} />
            <p>{this.props.caption}</p>
            <i className = "fa fa-heart" style = {style} aria-hidden = "true">  </i>

        </div>
         );
     }
} export default Card;