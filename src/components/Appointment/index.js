
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
import Error from 'components/Appointment/Error';

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING ="DELETING";
  const CONFIRM ="CONFIRM";
  const EDIT = "EDIT"
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

   
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
    .catch(error => transition(ERROR_SAVE, true))

    
  }


  function remove(){
    if (mode === CONFIRM) {
      transition(DELETING, true)
      props.deleteInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true))
    } else {
      transition(CONFIRM);      
    }

  }


  function edit(){
    transition(EDIT)
  }

  
return(
  <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && 
    <Empty 
    onAdd={() => transition(CREATE)} 
    />}


    {mode === SHOW && (
    <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
      onDelete={remove}
      onEdit = {edit}
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


    {mode === EDIT && 
    <Form 
      name={props.name ? props.name : props.interview.student}
      interviewers={props.interviewers}
      onSave={save}
      onCancel={back}
    />}
    
    {mode === ERROR_SAVE && 
    <Error 
      message="Could not create appointment"
      onClose={back}
    />}   

    {mode === ERROR_DELETE && 
      <Error 
      message="Could not cancel appointment"
      onClose={back}
      />}


    {mode === SAVING && 
    <Status message="Saving" 
    />}

    {mode === DELETING && 
    <Status message="Deleting" 
    />}


    {mode === CONFIRM &&  
    <Confirm 
      onCancel={back}
      onConfirm={remove}
      message="Are you sure you would like to delete?" 
    />}
    {/* {props.interview ?  <Show student={props.interview.student} interviewer={props.interview.interviewer}/> :<Empty/>}  */}

  </article>
)}