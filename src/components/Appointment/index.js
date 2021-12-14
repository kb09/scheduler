
import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
// import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from 'components/Appointment/Confirm';


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING ="DELETING";
  const CONFIRM ="CONFIRM";

   
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

   function save(name, interviewer) {
      transition(SAVING);
      const interview = {
        student: name,
        interviewer
      };
    
      props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      
    }

  

  function remove(){
    if (mode === CONFIRM) {
      transition(DELETING)
      props.deleteInterview(props.id)
      .then(() => transition(EMPTY))
    } else {
      transition(CONFIRM);      
    }

  }
return(
  <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
    <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
    onDelete={remove}
    />
    )}
    {mode === CREATE && (
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onCancel={back}
          onSave = {save}
        /> )}
        {mode === SAVING && <Status message="Saving" />}
        {mode === DELETING && <Status message="Deleting" />}
        {mode === CONFIRM && 
        <Confirm 
          onCancel={back}
          onConfirm={remove}
          message="Are you sure you would like to delete?" 
        />}
        {props.interview ?  <Show student={props.interview.student} interviewer={props.interview.interviewer}/> :<Empty/>} 

  </article>
)}