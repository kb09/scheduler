import React from "react";
import "components/DayListItem.scss" 
import classNames from "classnames";



export default function DayListItem(props) {

  const dayClass = classNames('day-list__item ',{ //classNames not className
    'day-list__item--selected': props.selected,
    'day-list__item--full' : props.spots === 0
  })
    return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light"> {formatSpots(props.spots)}</h3>
    </li>
  );
}


// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day

 const formatSpots = (spotsOneOrNone) => {
  if (spotsOneOrNone === 0){
    return "no spots remaining";

  } else if (spotsOneOrNone === 1){
    return `${spotsOneOrNone} spot remaining`;
  } else {
    return `${spotsOneOrNone} spots remaining`;
  }
}