var expect = require('chai').expect;
var Iterators = require('../iterators.js');

describe('Iterators', function () {


  describe('max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66, 22, 67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });

  describe("min", function() {
      var myArr;
      beforeEach(function () {
        myArr = [66, 22, 67, 34];
      });

      it("should return the min number of myArr", function() {
          expect(Iterators.min(myArr)).to.equal(22);
      });
      it("should return Infinity for empty array", function(){
          myArr = [];
          expect(Iterators.min(myArr)).to.equal(Infinity);
      });
  });


  describe("each", function() {
      var myArr = [2, 5, 10, 200];
      it("should return each number in the array", function() {
          var local = [];
          Iterators.each([1, 2], function(num){
            local.push(num);
          });
          expect(local).to.include.members([1, 2]);
      });
  });

    describe("Map", function() {
      var myArr = [2, 3, 4, 5];
      it("should return an new array where every number is doubled", function() {
          var double = function(a) {
            return a * 2;
          };
          expect(Iterators.map(myArr, double)).to.include.members([4, 6, 8, 10]);
      });
  });

});
