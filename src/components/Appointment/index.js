
import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
// import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";

   
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function onSave(name, interviewer){
    const interview = {
      student:name,
      interviewer
    }
    transition(SAVE)
    props.bookInterview(props.id, interview)
    transition(SHOW);
  };
  
   return (
    <article className="appointment">
      <Header time={props.time}></Header> 
      
      {mode === EMPTY && <Empty onAdd={()=>  transition(CREATE)}
      />}

      {mode === SHOW && (
      <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
       />
      )}

      {mode === CREATE &&
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={onSave}
             />}
        {mode === SAVE && (
          <Status 
          messagev="Saving"
          />
        )}

       {props.interview ?  <Show student={props.interview.student} interviewer={props.interview.interviewer}/> :<Empty/>} 
     </article>
   );
   


 }




