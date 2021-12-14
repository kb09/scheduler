
import React, { useState } from 'react';
import Button from "../Button";
import InterviewerList from "../InterviewerList";


export default function Form(props) {
  // const [student, setStudent] = useState(props.student || "");
  const [student, setStudent] = useState(props.name || "");

  // const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [interviewer, setInterviewer] = useState(props.value || null);


  function reset (){
      setStudent("");
      setInterviewer("");
  }

  function cancel(){
    reset();
    props.onCancel();
  }

  function save() {
    props.onSave(student, interviewer)
  }

   return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            // name={student}
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            value={student}
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={()=> cancel()}>Cancel</Button>  {/*  props.cancel to cancel */}
          <Button confirm onSubmit={event => event.preventDefault()} onClick={save}>Save</Button>
          {/* <Button confirm onClick={props.onSave}>Save</Button> */}

        </section>
      </section>
    </main>
  );
 }


