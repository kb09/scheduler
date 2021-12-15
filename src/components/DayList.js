import React from "react";
import "components/DayListItem.js" 
import DayListItem from "components/DayListItem.js";


// // Our <DayList> component will take in three props.

// // days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// // day:String the currently selected day
// // setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"

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

