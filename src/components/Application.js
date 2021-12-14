import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import "components/Appointment/index.js"
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
const {
  state,
  setDay,
  bookInterview,
  deleteInterview
} = useApplicationData();

//An array with data of the interviewers for a given day
let dailyAppointments = getAppointmentsForDay(state, state.day); 

const interviewers = getInterviewersForDay(state, state.day);  

  const Appointments = dailyAppointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);
        
        return (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            time={appointment.time}
            interview={interview}
            interviewers={interviewers}
            bookInterview ={bookInterview}
            deleteInterview={deleteInterview}
          />
        );
      });

      

      return (
        <main className="layout">
          <section className="sidebar">
            <img
              className="sidebar--centered"
              src="images/logo.png"
              alt="Interview Scheduler"
            />
            <hr className="sidebar__separator sidebar--centered" />
            <nav className="sidebar__menu">
              <DayList 
              days={state.days} 
              value={state.day} 
              onChange={setDay} 
              bookInterview ={bookInterview}
              deleteInterview={deleteInterview}
              />
            </nav>
            <img
              className="sidebar__lhl sidebar--centered"
              src="images/lhl.png"
              alt="Lighthouse Labs"
            />
          </section>
          <section className="schedule">
            {Appointments}
            <Appointment key="last" time="5pm" bookInterview={bookInterview} deleteInterview={deleteInterview}  /> 
          </section>
        </main>
      );
    
      }