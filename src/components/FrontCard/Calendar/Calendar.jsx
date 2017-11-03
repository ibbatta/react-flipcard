import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import style from './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarWeekDays: [],
    };
  }

  componentWillMount() {
    moment.locale(this.props.lang);
    this.setState({
      calendarWeekDays: moment.weekdaysShort(),
    });
  }

  componendDidUpdate() {
    this.state.calendarWeekDays = moment.locale(this.state.language.toLowerCase());
  }

  render() {
    return (
      <div className={style.calendarBar}>
        {
          this.state.calendarWeekDays.map((day, index) => (
            <div
              key={day}
              className={
                classNames(
                  style.calendarDay,
                  index === new Date().getDay() ? style.actual : null,
                )
              }
            >
              <span className={style.calendarText}>
                {day}
              </span>
            </div>
          ))
        }
      </div>
    );
  }
}

Calendar.propTypes = {
  lang: PropTypes.string,
};

Calendar.defaultProps = {
  lang: 'Undefined',
};

export default Calendar;
