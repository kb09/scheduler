// All tests are passing

export  function getAppointmentsForDay(state, day) {
  const days = state.days;
  const appointments = state.appointments;

  if (days.length === 0) {
    return [];
  }

  let selectedDay = days.filter((dayObj) => dayObj.name === day)[0];
  if (!selectedDay) {
    return [];
  }

  let appointmentsForDay = [];
  for (let apptId of selectedDay.appointments) {
    appointmentsForDay.push(appointments[apptId]);
  }
  return appointmentsForDay;
}


export function getInterview(state, interview) {
  if (!interview) {
        return null;
      } else
    return {
      "student": interview.student,
      "interviewer": state.interviewers[interview.interviewer]
    }
};

 export function getInterviewersForDay(state, day) {  /************* */
  const days = state.days;
  const interviewers = state.interviewers;
  if (days.length === 0) {
    return [];
  }
  let selectedDay = days.filter((dayObj) => dayObj.name === day)[0];
  if (!selectedDay) {
    return [];
  }
  let interviewersForDay = [];
  for (let interviewerId of selectedDay.interviewers) {
    interviewersForDay.push(interviewers[interviewerId]);
  }
  return interviewersForDay;
 }