
import { settings, select, classNames, templates } from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    thisApp.activatePage(thisApp.pages[0].id);

    for (let link of thisApp.navLinks) {
      link.addEvenetListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* get id form href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with this id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#' + id;



      });

    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    /* add class "active" to matching pages, remove form non-matching */

    for (let page of thisApp.pages) {

      /*  if (page.id == pageId) {
        page.classList.add(classNames.pages.active);
      } else {
        page.classList.remove(classNames.pages.active);
      } */

      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" to matching links, remove form non-matching */

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }



  },

  initMenu: function () {
    const thisApp = this;
    console.log('thisApp.data:', thisApp.data);

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEvenetListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);
    });
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.product;

    fetch(url)
      .then(function (rawRespose) {
        return rawRespose.json();
      })
      .then(function (parsedResponse) {
        console.log('paresedResponse', parsedResponse);

        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;

        /* execute initMenu method */
        thisApp.initMenu();

      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));

  },

  init: function () {

    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
    console.log('classNames:', classNames);
    console.log('settings:', settings);
    console.log('templates:', templates);

    thisApp.initPages();

    thisApp.initData();
    thisApp.initCart();
  },
};

app.init();
