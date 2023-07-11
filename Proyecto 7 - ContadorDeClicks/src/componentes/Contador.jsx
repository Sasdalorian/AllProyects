import React from "react";
import "../css/Contador.css"

export function Contador({numClics}) {
  return (
    <div className="contador">
      {numClics}
    </div>
  )
}