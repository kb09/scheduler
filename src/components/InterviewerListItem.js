import React from "react";
import classNames from "classnames";
import "components/interviwerListItem.scss";

export default function interviwerListItem(props){
  // const interviewerClass = classNames('interviewer__item',{
  //   'interviewer__item--selected': props.selected //The InterviewerListItem needs a prop to know if it is selected
  // })
  return (
  <li className="interviewers__item"> 
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
} 


