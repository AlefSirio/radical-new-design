'use client'

import type { NextPage } from "next";
import { useEffect, useState } from "react";

const layout: NextPage = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("02/18/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='body'>
      <div className='navbar'>
        <div className='navbar-logo'></div>
        <div className="navbar-items">
          <a>Home</a>
          <a>Sobre o Projeto</a>
          <a>Regras</a>
          <a>Galeria</a>
          <a>Equipantes</a>
          <a>Contato</a>
          <a>Inscrições</a>
        </div>
      </div>
      <main className="main">
        <div className="title-project">
          <div className="title">Radical</div>
          <div className="subtitle">São Paulo</div>
        </div>
        <div className="text-description">
          <label className="description">O Projeto Radical São Paulo é um retiro espiritual cristão com duração de um final de semana em um sítio próximo à Aruja - SP, onde centenas de pessoas, famílias e igrejas estão sendo impactadas e desafiadas a tomarem atitudes que agradem à Deus no seu viver diário.</label>
           <div className="barra"></div>
        </div>
        <div className="buttons">
          <button className="button">Inscreva-se</button>
          <button className="button">Saiba mais</button>
        </div>
      </main>
      <section className="about">
        <div className="about-text">
          <div className="title-about">Quem Somos?</div>
          <label className="text-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </label>
          <label className="space">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label>
        </div>
        <div className="images-about">  </div>
      </section>
      <section className="countdown-timer">
          <div className="timer-wrapper">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Days</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Seconds</span>
              </div>
          </div>
          <div className="text-convince">
            <label>O tempo está contado, vai perder a chance de fazer parte dessa grande família?</label>
            <button className="button button1">Inscreva-se</button>
          </div>
      </section>
      <section className="area-calendar">
        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>

        <div className="card-calendar">
          <div className="text-card">
            <label className="number-edition">15</label>
            <label className="text-edition">Edição</label>
          </div>
          <label className="data">xx/xx/xx</label>
          <button className="button-card">Inscreva-se</button>
        </div>
      </section>
    </div>
  );
}

export default layout;