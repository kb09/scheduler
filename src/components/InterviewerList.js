
import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";


// export default function InterviewerList(props) {
function InterviewerList(props) {
const interviewers = props.interviewers.map((interviewer) => {

return (
<InterviewerListItem 
  key={interviewer.id}
  name={interviewer.name}
  avatar={interviewer.avatar}
  selected={interviewer.id === props.value} // added props to value
  setInterviewer={() => props.onChange(interviewer.id)}    // added props to onChange
/>
  );
});
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  )
  
}

//
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;
//