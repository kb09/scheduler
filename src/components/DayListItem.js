import React from "react";

export default function DayListItem(props) {
  return (
    <li>
      <h2 className="text--regular">Day Name</h2> 
      <h3 className="text--light">X spots remaining</h3>
    </li>
  );
}


// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day
