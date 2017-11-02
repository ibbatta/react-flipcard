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
            Lun
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Mar
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Mer
          </span>
        </div>
        <div className={classNames(style.calendarDay, this.state.isActual ? style.actual : null)}>
          <span className={style.calendarText}>
            Gio
          </span>
        </div>
        <div className={style.calendarDay} >
          <span className={style.calendarText}>
            Ven
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Sab
          </span>
        </div>
        <div className={style.calendarDay}>
          <span className={style.calendarText}>
            Dom
          </span>
        </div>
      </div>
    );
  }
}

export default Calendar;
