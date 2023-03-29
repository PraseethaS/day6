import { checkPropTypes } from "prop-types";
import React, { Component } from "react";
export default class HocProps extends Component{
    render(){
        return(
            <div>
                <h1>Hello,{this.props.name}</h1>
            </div>
        )
    }

}
HocProps.propTypes={
    name:checkPropTypes
}
