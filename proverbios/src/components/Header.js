import './styleHeader.css';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect (() => {
    const daysOfWeek = [
      'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
    ];
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const day = today.getDate();
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    setCurrentDate(`${dayOfWeek}, ${day} de ${month} de ${year}`);
  }, []);

  

  return (
    <header className='containerHeader'>
        <h1>Provérbio do dia</h1>
        <p>{currentDate}</p>
    </header>
  )
}
