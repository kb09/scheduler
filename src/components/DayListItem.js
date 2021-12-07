import React from "react";

export default function DayListItem(props) {
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}


// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day
