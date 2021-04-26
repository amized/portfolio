import React from "react"
import { Waypoint } from "react-waypoint"

const SectionWaypoint = props => {
  const { index, setNavIndex } = props
  const prevIndex = index - 1

  return (
    <Waypoint
      topOffset="95px"
      onEnter={({ currentPosition }) => {
        if (currentPosition === "inside") {
          setNavIndex(prevIndex)
        }
      }}
      onLeave={({ currentPosition }) => {
        if (currentPosition === "above") {
          setNavIndex(index)
        }
      }}
    />
  )
}

export default SectionWaypoint
