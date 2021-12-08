import React from "react";
import classNames from "classnames";
import "components/interviwerListItem.scss";

export default function interviwerListItem(props){
  const interviewerClass = classNames('interviewer__item',{
    'interviewer__item--selected': props.selected, //The InterviewerListItem needs a prop to know if it is selected
    'interviewer__item--image': props.avatar,
  });
 
  //When clicked, the setInterviewer function should run, taking the interviewer id as a parameter
  return (
    <li className={interviewerClass} onClick={() => props.setInterviewer(props.name)} key={props.id}> 
      <img
      className={'interviewer__item--image'}
      src={props.avatar}
      alt={props.name}
      
      
      
      /> 
      {props.selected && props.name}
    </li>
  );
} 


