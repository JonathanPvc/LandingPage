import * as React from "react";


 export function Logos (props) {
    const {title, icon} = props
  
    return (
     
        <div>
            {icon}
            <span>
                {title}
            </span>
      </div>
    );
  }
