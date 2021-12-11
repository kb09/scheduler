
import React, { useState } from 'react';
import Button from "../Button";
import InterviewerList from "../InterviewerList";


export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset (){
      setStudent("");
      setInterviewer("");
  }

  function cancel(){
    reset();
    props.onCancel();
  }
   return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={student}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
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
          <Button danger onClick={()=> props.cancel()}>Cancel</Button>
          <Button confirm onClick={()=>props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  );
 }