var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

    min: function(numList) {
      var min = Infinity;
      for (var i = numList.length - 1; i >= 0; i--) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },

    each: function(arr, callback) {
      //if arr is null, use an empty array
      arr = arr || [];
      for (var i = arr.length - 1; i >= 0; i--) {
        callback(arr[i]);
      }
    },

    map: function (arr) {
      arr = arr || [];
      for (var i = arr.length - 1; i >= 0; i--) {
        return arr[i];
      }
    }



};

module.exports = iterators;


var cased = names.map(function (person) {
    return person.toUpperCase();
});