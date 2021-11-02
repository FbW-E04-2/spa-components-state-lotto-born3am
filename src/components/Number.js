import React from 'react'
export default function Number(props) {
 return (
   <div
     style={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       width: "100px",
       height: "100px",
     }}
   >
     <h1
       style={{
         width: "100px",
         height: "100px", 
         borderRadius: "50%",
         border: "3px solid black",
         textAlign: "center",
         lineHeight: "90px"
       }}
     >
       {props.number}
     </h1>
   </div>
 );
}