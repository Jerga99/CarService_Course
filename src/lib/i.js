

const i = (function() {

  return {
    getDBdata: function() {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = 'Data from DB!';
          resolve(data);
          // reject('Cannot connect to DB!');
        }, 3000)
      })
    },
    getCurrentDate: function(callback) {
      const date = new Date().toUTCString();
      callback(date);
    },
    forEach: function(list, callback) {
      for(let i = 0; i < list.length; i++) {
        callback(list[i]);
      }
    },
    map: function(list, callback) {
      let mappedList = [];

      for(let i = 0; i < list.length; i++) {
        let item = callback(list[i]);
        mappedList.push(item);
      }

      return mappedList;
    },
    filter: function(list, callback) {
      let filteredList = [];

      for(let i = 0; i < list.length; i++) {
        let canAdd = callback(list[i]);

        if (canAdd) {
          filteredList.push(list[i]);
        }
      }

      return filteredList;
    }
  }
})()

module.exports = i;