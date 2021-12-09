import React from "react";
import "components/DayListItem.js" 
import DayListItem from "components/DayListItem.js";


// Our <DayList> component will take in three props.

// days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"

export default function DayList(props) {
  
  return props.days.map(day => 
    <DayListItem 
      key={day.id}
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.value} // changed props.day
      // setDay={props.setDay}  
      setDay={(event)=>props.setDay(props.onChange)}   //changed props.name
    />
   );
}