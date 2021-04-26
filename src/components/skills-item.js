import React, { useState } from "react"
import { Waypoint } from "react-waypoint"

export default ({ title, description, iconClass }) => {
  const [inView, setInView] = useState(false)
  return (
    <Waypoint
      bottomOffset="120px"
      onEnter={() => {
        setInView(true)
      }}
      onLeave={({ currentPosition }) => {
        if (currentPosition === "below") setInView(false)
      }}
    >
      <div
        className={"skills__item" + (inView ? " skills__item--entered" : "")}
      >
        <i className={`icon ${iconClass}`}></i>
        <div className="skills__item-title">{title}</div>
        <p>{description}</p>
      </div>
    </Waypoint>
  )
}
