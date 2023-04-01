import React, {useRef} from "react";
import useHover from "../hooks/useHover";

export const Task3Hover = () => {
    const ref=useRef()
    const isHovering=useHover(ref);
    return(
        <div>
            <div ref={ref} style = {{width:200, height:100, margin: 20,background: isHovering ? 'green' : 'red'}}>
                <p>{isHovering ? 'на меня навели': 'наведи на меня'}</p>
            </div>
        </div>
    );
};
