import React from "react";

export default function Error(props) {

  return (
    <p className="text-red-500 text-xs italic">{props.error}</p>
  )
}