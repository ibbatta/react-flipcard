import React from 'react';
import classNames from 'classnames';
import style from './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActual: false,
    };
  }

  render() {
    return (
      <div className={style.calendarBar}>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Mon
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Tue
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Wen
          </span>
        </div>
        <div className={classNames(style.calendarDay, this.state.isActual ? style.actual : null)}>
          <span className={style.calendarText}>
            Thu
          </span>
        </div>
        <div className={style.calendarDay} >
          <span className={style.calendarText}>
            Fri
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Sat
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Sun
          </span>
        </div>
      </div>
    );
  }
}

export default Calendar;
