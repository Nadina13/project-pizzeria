



class Booking {
  constructor() {
    const thisBooking = this;

    thisBooking.render();
    thisBooking.initWidgets();

  }

  render (element) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;

    


  }

  initWidgets () {
    const thisBooking = this;

  }
}

export default Booking;