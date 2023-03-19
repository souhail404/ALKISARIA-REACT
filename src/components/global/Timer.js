import React, { useEffect, useState } from 'react'

const Timer = (props) => {

    const year = props.year;
    const month = props.month;
    const day = props.day;
    const hour = props.hour;
    const minute= props.minute;
    
    const [dys , setDys] = useState('00')
    const [hrs , setHrs] = useState('00')
    const [mins , setMins] = useState('00')
    const [secs , setSecs] = useState('00')
    
    // Set the date 2 days from now
    const endDate =new Date(`${month} ${day}, ${year} ${hour}:${minute}:00`).getTime();

    const updateTimer = ()=>{
        const timeDiff = endDate - new Date().getTime();

        // Calculate the remaining days, hours, minutes, and seconds
        const udys = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        const uhrs = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const umins = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
        const usecs = Math.floor((timeDiff % (60 * 1000)) / 1000);

        setDys(udys);
        setHrs(uhrs);
        setMins(umins);
        setSecs(usecs);
    }
    
    useEffect(()=>{
        
        setInterval(updateTimer, 1000);

        return(
            clearInterval(updateTimer, 1000)
        )

    })
    
  
  return (
    <div id="timer"> 
        <p className="timer-txt">Ends in :</p>
        <div id="days">{dys} day</div>
        <div id="hours">{hrs} Hrs</div>
        <div id="minutes">{mins} Min</div>
        <div id="seconds">{secs} Sec</div>
    </div>
  )
}

export default Timer