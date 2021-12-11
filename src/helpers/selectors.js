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

//return a new object containing the interview data when we pass it an object that contains the interviewer


export function getInterview(state, interview) {
  if (!interview) {
        return null;
      } else
    return {
      "student": interview.student,
      "interviewer": state.interviewers[interview.interviewer]
    }
};
