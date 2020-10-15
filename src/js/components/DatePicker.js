
import { settings, select } from '../settings.js';
import utils from '../utils.js';
import BaseWidget from './BaseWidget';


class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin() {
    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = ...;

    flatpickr(thisWidget.dom.input, {
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      disable: [
        function (date) {
          return (date.getDay() === 1);
        }
      ],
      locale: {
        "firstDayOfWeek": 1
      },

      onChange: ...,
    })
  }

  parseValue(value) {
    return value;
  }

  isValid(value) {
    return true;
  }

  renderValue() {
    const thisWidget = this;

    thisWidget.dom.output.innerHTML = thisWidget.value;

  }
}

export default DatePicker;