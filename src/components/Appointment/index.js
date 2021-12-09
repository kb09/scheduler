import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";


export default function Appointment(props) {
  const { id, time, interview } = props;
  return (
    <article className='appointment'>
      <Header time={ time } />
      { interview ? <Show {...interview} /> : <Empty />}
    </article>
  );
}