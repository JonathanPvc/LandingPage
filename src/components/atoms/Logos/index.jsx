import * as React from "react";
import "./style.scss"

 export function Logos (props) {
    const {title, icon, contents} = props
  
    return (
     
        <div>
            {icon}
            <h4 >
                {title}
            </h4>
            <h4>{contents} </h4>
      </div>
    );
  }
