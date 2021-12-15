import React from "react";
import "components/DayListItem.scss" 
import classNames from "classnames";



export default function DayListItem(props) {

  const dayClass = classNames('day-list__item ',{ //classNames not className
    '--selected': props.selected,
    'day-list__item--full' : props.spots === 0
  })
    return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light"> {formatSpots(props.spots)}</h3>
    </li>
  );  
}

 const formatSpots = (spotsOneOrNone) => {
  if (spotsOneOrNone === 0){
    return "no spots remaining";

  } else if (spotsOneOrNone === 1){
    return `${spotsOneOrNone} spot remaining`;
  } else {
    return `${spotsOneOrNone} spots remaining`;
  }
  
}
