import React from 'react';

const Timer = ({endDate}) => {
    const [day, setDay] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    var timeIntervalInstance = setInterval(function() {
        // i know the timer is over already, it's an idea for timer display
        const now = new Date().getTime();
        let countDownDate = new Date(endDate);
        countDownDate.setHours(20);
        countDownDate.setMinutes(0);
        countDownDate.setSeconds(0);
        countDownDate = countDownDate.getTime();
        const distance = countDownDate - now;
        setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        if (distance < 0) {
            clearInterval(timeIntervalInstance);
        }
    }, 1000);
    return (
        <div className="Timer">
            <span className="day">{ day }</span>
            <span className="hours">{ hours }</span>
            <span className="minutes">{ minutes }</span>
            <span className="seconds">{ seconds }</span>
        </div>
      );
}

export default Timer;