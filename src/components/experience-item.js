import React, { useState } from "react"
import { Waypoint } from "react-waypoint"

export default ({ title, link, role, description, period, schedule }) => {
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
      <div className={"exp__item" + (inView ? " exp__item--entered" : "")}>
        <div className="exp__item-period">
          <span>{period}</span>
          <strong>{schedule}</strong>
        </div>
        <div className="exp__item-info">
          <h3>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <h4>{role}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Waypoint>
  )
}
