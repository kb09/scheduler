export function getAppointmentsForDay(state, day) {
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