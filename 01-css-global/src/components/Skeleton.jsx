import React from "react";

export default function Skeleton({height="100%", style={}}){
  return <div className="skeleton" style={{height, ...style}} role="status" aria-hidden="true"></div>;
}
