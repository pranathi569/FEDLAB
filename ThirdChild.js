import React from 'react'
function ThirdChild(props){
    const {color,backColor}=props;
    return(
        <div><h1 style={{color:color,backgroundColor:backColor}}>Prop Drilling</h1></div>
        

    );
}
export default ThirdChild;