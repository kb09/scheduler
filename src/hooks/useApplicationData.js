
// logic used to manage the state

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}, 
    interviewers: {}
  })

  const setDay = day => setState(prev =>({...prev, day}));

  const updateSpotsForDay = (state) => {
    let spots = 0
    for (let day of state.days) {
      if (day.name === state.day) {
        for (let id of day.appointments) {
          if (state.appointments[id].interview === null) {
            spots++
          }}}
    }
    const days = state.days.map((day) => {
      if (day.name !== state.day) {
        return day
      } else {
        return {
          ...day,
          spots,
        }}})
    setState({ ...state, days })
  };

  
  function bookInterview(id, interview) { 
    const appointment = {
      ...state.appointments[id], 
      interview:{...interview } 
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, {interview:interview})
    .then(() => {
      setState({ ...state, appointments })
      updateSpotsForDay({ ...state, appointments });
    });
  }

  function deleteInterview(id) { 

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({ ...state, appointments });
      updateSpotsForDay({ ...state, appointments });
    });
  
  }  

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/days')),
      Promise.resolve(axios.get('/api/appointments')),
      Promise.resolve(axios.get('/api/interviewers'))])
      .then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      })
    }, [])

    
    return {
      state,
      setDay,
      bookInterview,
      deleteInterview
     } 
  } 
    




