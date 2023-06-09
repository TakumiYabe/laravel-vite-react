import React from 'react';

function Navigation(props) {
    const { year, month, setYear, setMonth } = props;

    const onClick = n => () => {
        const nextMonth = month + n
        if (12 < nextMonth) {
            setMonth(1)
            setYear(year + 1)
        } else if (nextMonth < 1) {
            setMonth(12)
            setYear(year - 1)
        } else {
            setMonth(nextMonth)
        }
    }

    return (
        <div className="calender-header">
            <h1>{`${year}年${month}月`}</h1>
            <div className="calender-nav">
                <button onClick={onClick(-1)}>{'<先月'}</button>
                <button onClick={onClick(1)}>{'翌月>'}</button>
            </div>
        </div>
    )
}

export default Navigation;