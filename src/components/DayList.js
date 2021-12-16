import React from "react";
import "components/DayListItem.js" 
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {
  const schedule = props.days.map(dayObj => {
 
    return (
      <DayListItem
        key={dayObj.id}
        name = {dayObj.name}
        spots = {dayObj.spots}
        selected={dayObj.name === props.value}
        setDay={props.onChange}
        {...dayObj}
      />
    )
  })
  return <ul>{schedule}</ul>
}

