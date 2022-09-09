import * as React from "react";
import "./style.scss"

 export function Logos (props) {
    const {title, icon, contents} = props
  
    return (
     
        <div className="container_icons">
            {icon}
            <h4 className="container_descriptions-icons">
                {title}
            </h4>
            <h4 className="container_descriptions-icons2">{contents} </h4>
      </div>
    );
  }
