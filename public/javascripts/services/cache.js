/* jshint esnext: true */

const cache = {
  get(key) {
    let item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    } else {
      return false;
    }
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export default cache;
