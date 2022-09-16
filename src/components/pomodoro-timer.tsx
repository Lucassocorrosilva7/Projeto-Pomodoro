/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useCallback } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";
import { secondsToTime } from "../utils/seconds-to-time"
const bellStart = require("../sounds/bell-start.mp3");
const bellFinish = require("../sounds/bell-finish.mp3");

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortResTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = React.useState(
    new Array(props.cycles - 1).fill(true)
  );

  const [completeCycles, setCompletedCycles] = React.useState(0);
  const [fullWorkingTime, setFullworkingTime] = React.useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);

 

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullworkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null
  );

  const configWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    props.pomodoroTime
    ]);

  const configRest = useCallback((Long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (Long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortResTime);
    }

    audioStopWorking.play();
  },[setTimeCounting, setWorking, setResting,setMainTime, props.longRestTime,props.shortResTime]);

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
    if (resting) document.body.classList.add("rest");
    if (working) document.body.classList.remove("rest");

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configRest(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completeCycles + 1);
    }
    if(working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if(resting) configWork();
    
  },  [
    completeCycles, 
    configRest, 
    configWork, 
    cyclesQtdManager, 
    mainTime, 
    numberOfPomodoros, 
    props.cycles, 
    resting, 
    working
]);

  return (
    <div className="pomodoro">
      <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Começar" onClick={() => configWork()}></Button>
        <Button text="Descanço" onClick={() => configRest(false)}></Button>
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCounting ? "Pausar" : "Retomar"}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completeCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodos concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
}

