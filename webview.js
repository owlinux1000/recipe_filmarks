'use strict';

module.exports = Franz => {
  const getNotification = function() {
    const el = document.querySelector('.badge_count');
    let count = 0;
    if(el.innerHTML) {
      count = parseInt(el.innerHTML, 10);
    }
    Franz.setBadge(count);
  }
  Franz.loop(getNotification);
};
