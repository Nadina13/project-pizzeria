
import {select, templates} from '../settings.js';
import amountWidget from './AmountWidget.js';

class Booking {
  constructor() {
    const thisBooking = this;

    thisBooking.render();
    thisBooking.initWidgets();

  }

  render (     ) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper =     ;

    /* zawartość wrappera zamieniać na kod HTML wygenerowany z szablonu */

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);

  }

  initWidgets () {
    const thisBooking = this;

    thisBooking.peopleAmount = new amountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new amountWidget(thisBooking.dom.hoursAmount);

  }
}

export default Booking;