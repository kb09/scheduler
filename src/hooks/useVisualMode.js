import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 


  
  function transition(modeNew, replace = false) { 
    if (!replace) {
      setMode(modeNew);
      history.push(modeNew);     
    }
    else {
      setMode(modeNew);
    }
  }

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();

      setHistory(newHistory);

      setMode(newHistory[newHistory.length - 1]);
    }
  };

  return { mode, transition, back };
};

