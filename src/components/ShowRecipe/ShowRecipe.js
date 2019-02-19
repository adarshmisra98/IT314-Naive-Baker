import React, { Component } from 'react';
import classes from './ShowRecipe.css';

class ShowRecipe extends Component {

    render(){
        return (
                <div className={classes.Post}>
                    <a href={this.props.href} style={{textDecoration:"none",color:"black"}}>
                        <img src={this.props.photo} alt="Check Your Connection!" style={{width:"100%"}}></img>
                        <h3>{this.props.title}</h3>
                    </a>
                </div>
        );
    }
}

export default ShowRecipe;