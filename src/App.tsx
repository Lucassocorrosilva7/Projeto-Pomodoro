import React from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
  return (
    <>
      <div className="container">
        <PomodoroTimer
          pomodoroTime={1500}
          shortResTime={300}
          longRestTime={900}
          cycles={4}
        />
      </div>
      <section className="section-pomodoro">
        <h1>Um Temporizador Pomodoro online <br></br>para aumentar sua produtividade</h1>
        <article className="article-pomodoro-1">
          <h2 className="subtitle-pomodoro-1">O que é Pomodoro</h2>
          <p>
            O que é Pomofocus? Pomofocus é um temporizador pomodoro
            personalizável que funciona no navegador desktop mobile. O objetivo
            deste aplicativo é ajudá-lo a se concentrar em qualquer tarefa em
            que você esteja trabalhando, como estudo, escrita ou codificação.
            Este app é inspirado na Técnica Pomodoro, que é um método de
            gerenciamento de tempo desenvolvido por Francesco Cirillo.
          </p>
        </article>
        <article className="article-pomodoro-2">
          <h2 className="subtitle-pomodoro-2">O que é a Técnica Pomodoro?</h2>
          <p>
            O que é Pomofocus? Pomofocus é um temporizador pomodoro
            personalizável que funciona no navegador desktop mobile. O objetivo
            deste aplicativo é ajudá-lo a se concentrar em qualquer tarefa em
            que você esteja trabalhando, como estudo, escrita ou codificação.
            Este app é inspirado na Técnica Pomodoro, que é um método de
            gerenciamento de tempo desenvolvido por Francesco Cirillo.
          </p>
        </article>
        <article className="article-pomodoro-3">
          <h2 className="subtitle-pomodoro-3">Características</h2>
          <p>
            O que é Pomofocus? Pomofocus é um temporizador pomodoro
            personalizável que funciona no navegador desktop mobile. O objetivo
            deste aplicativo é ajudá-lo a se concentrar em qualquer tarefa em
            que você esteja trabalhando, como estudo, escrita ou codificação.
            Este app é inspirado na Técnica Pomodoro, que é um método de
            gerenciamento de tempo desenvolvido por Francesco Cirillo.
          </p>
        </article>
        <article className="article-pomodoro-4">
          <h2 className="subtitle-pomodoro-4">O que é Pomodoro</h2>
          <p>
            O que é Pomofocus? Pomofocus é um temporizador pomodoro
            personalizável que funciona no navegador desktop mobile. O objetivo
            deste aplicativo é ajudá-lo a se concentrar em qualquer tarefa em
            que você esteja trabalhando, como estudo, escrita ou codificação.
            Este app é inspirado na Técnica Pomodoro, que é um método de
            gerenciamento de tempo desenvolvido por Francesco Cirillo.
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
