import axios from "axios";
import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import "components/Appointment/index.js"



//test

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}, 
    interviewers: {}  
  });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments
    });

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState({ ...state, appointments });
      });
  }

  function deleteInterview(id) { // look at book interview 

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios.delete(`/api/appointments/${id}`)
    .then(res => {
      setState({...state, appointments})
      return res
    })
  }    

//An array with data of the interviewers for a given day
let dailyAppointments = getAppointmentsForDay(state, state.day); 

const interviewers = getInterviewersForDay(state, state.day);  

const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState(prev=>({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, []);

  console.log(state.interviewers)

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


