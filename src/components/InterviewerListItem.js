import React from "react";
import classNames from "classnames";
import "components/interviwerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected 
  });
  const interviewerPicClass = classNames("interviewers__item-image", { 
    "interviewers__item--selected-image": props.selected
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );


}


