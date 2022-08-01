import React from "react";
import { cloneElement } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            {/* {React.cloneElement(props.children, {...props})} */}
            {/* {props.children} */}
            {/* {React.Children.map(props.children, child =>{
                return cloneElement(child, props)
            })} */}
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i});
            })}
        </div>
    )
}