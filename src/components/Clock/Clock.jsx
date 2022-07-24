import React, { useState } from 'react'
import './Clock.css'


let prevStartHour, prevEndHour;
export const Clock = () => {

  let lock = false;
  const time = new Date();
  const [times, setTimes] = 
  useState({
    month: time.getMonth(),
    day: time.getDay(),
    date: time.getDate(),
    hours: time.getHours(),
    hoursForClock: time.getHours() % 12,
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    ampm: time.getHours() < 12 ? 'AM' : 'PM',
  })

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  const setTime = () => {
    const html = document.querySelector('html');

    const time = new Date();
    
    
    setTimes({
        month: time.getMonth(),
        day: time.getDay(),
        date: time.getDate(),
        hours: time.getHours(),
        hoursForClock: time.getHours() % 12,
        minutes: time.getMinutes(),
        seconds: time.getSeconds(),
        ampm: time.getHours() < 12 ? 'AM' : 'PM',
    })

   

    if(times.hours < 12 )
        html.classList.remove('dark');
    else
        html.classList.add('dark');

    
}



  // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }



  setInterval(() => {
    if(!lock)
    {
      setTime();
      lock = !lock;
    }
  }, 1000);

  const onChange = ({target}, start) => {
    const inputHourValue = target.value.split(':')[0];
    const clockHour = document.querySelector(`#n${inputHourValue%12}`)
    
    console.log(clockHour);
    
    if(start)
    {
      if(prevStartHour)
      {
        if(prevStartHour.classList.contains('start'))
        {
          prevStartHour.classList.remove('start');
          prevStartHour.innerHTML = `${inputHourValue%12}`
        }
        if(prevStartHour.classList.contains('end'))
        {
          prevStartHour.classList.remove('end');
          prevStartHour.innerHTML = `${inputHourValue%12}`
        }
      }
      clockHour.classList.add('start');
      (inputHourValue < 12 ) ? clockHour.innerHTML = `${inputHourValue%12}am` : clockHour.innerHTML = `${inputHourValue%12}pm`
      prevStartHour = clockHour;

    }
    else
    {
      if(prevEndHour)
      {
        if(prevEndHour.classList.contains('start'))
        {
          prevEndHour.classList.remove('start');
          prevEndHour.innerHTML = `${inputHourValue%12}`
        }
        if(prevEndHour.classList.contains('end'))
        {
          prevEndHour.classList.remove('end');
          prevEndHour.innerHTML = `${inputHourValue%12}`
        }
      }
      (inputHourValue < 12 ) ? clockHour.innerHTML = `${inputHourValue%12}am` : clockHour.innerHTML = `${inputHourValue%12}pm`
      clockHour.classList.add('end');
      prevEndHour = clockHour;
    }
    
  }

  return (
    <div className='Clock'>
      <div className="clock-container">
        <div className="clock" >
            <div className="needle hour" style={{transform: `translate(-50%, -100%) rotate(${scale(times.hoursForClock, 0 ,12 , 0, 360)}deg)`}}></div>
            <div className="needle minute" style={{transform: `translate(-50%, -100%) rotate(${scale(times.minutes, 0 ,60 , 0, 360)}deg)`}}></div>
            <div className="needle second" style={{transform: `translate(-50%, -100%) rotate(${scale(times.seconds, 0 ,60 , 0, 360)}deg)`}}></div>
            <div className="center-point"></div>
            <span style={{"--i":1}}><b id='n1'>1</b></span>
            <span style={{"--i":2}}><b id='n2'>2</b></span>
            <span style={{"--i":3}}><b id='n3'>3</b></span>
            <span style={{"--i":4}}><b id='n4'>4</b></span>
            <span style={{"--i":5}}><b id='n5'>5</b></span>
            <span style={{"--i":6}}><b id='n6'>6</b></span>
            <span style={{"--i":7}}><b id='n7'>7</b></span>
            <span style={{"--i":8}}><b id='n8'>8</b></span>
            <span style={{"--i":9}}><b id='n9'>9</b></span>
            <span style={{"--i":10}}><b id='n10'>10</b></span>
            <span style={{"--i":11}}><b id='n11'>11</b></span>
            <span style={{"--i":12}}><b id='n0'>12</b></span>
        </div>

        <div className="time">{ `${times.hoursForClock}:${times.minutes < 10 ? `0${times.minutes}` : times.minutes} ${(times.ampm)}` }</div>
        <div className="date">{ `${days[times.day]}, ${months[times.month]}`} <span className="circle">{times.date}</span></div>
      </div>
      <div className='inputs'>
        <label htmlFor="start">Select Fasting Start Hour</label>
        <input type='time' id='start' name='start' onChange={(e) => onChange(e, true)} min="1" max="24"/>
        <label htmlFor="end">Select Fasting End Hour</label>
        <input type='time' id='end' name='end' onChange={(e) => onChange(e, false)} min="1" max="24"/>

      </div>
    </div>
  )
}
