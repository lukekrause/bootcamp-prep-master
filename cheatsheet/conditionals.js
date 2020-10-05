// YOUR CODE BELOW
function howEqual(arg1, arg2){
    if(arg1 === arg2 ){
      return 'strictly'
    }
    else if(arg1 == arg2){
      return 'loosely'
    }
    else {return 'not equal'}
  }
  console.log(howEqual(3, 9/3))
  describe('howEqual', () => {
    it('is a function', () => {
      expect(typeof howEqual).toEqual('function');
    });
    it('returns a string', () => {
      let returnedValue = howEqual(10, 5 + 5);
      expect(typeof returnedValue).toEqual('string');
    });
    it('returns the string \'loosely\' if the values are loosely equal', () => {
      let returnedValue = howEqual(0, false);
      expect(returnedValue).toEqual('loosely');
    });
    it('returns the string \'strictly\' if the values are strictly equal', () => {
      let returnedValue = howEqual(0 === -1, false);
      expect(returnedValue).toEqual('strictly');
    });
    it('returns the string \'not equal\' if the values are not equal', () => {
      let returnedValue = howEqual(0, -1);
      expect(returnedValue).toEqual('not equal');
    });
  });

  // YOUR CODE BELOW
  function isTruthy(arg){
    let booleanValue = !!arg;
   if (arg === null){
        return 'The null value is falsey'
      }
   if (arg === undefined){
        return 'undefined is falsey'
      }
    if (arg === 0){
        return 'The number 0 is falsey (the only falsey number)'
      }
     if (arg === ''){
        return 'The empty string is falsey (the only falsey string)'
      }
     if(booleanValue === true)
     {return true}
    else { return 'The boolean value false is falsey'}
  }
  console.log(isTruthy("I yearn for truth"));
  console.log(isTruthy(null));
  describe('isTruthy', () => {
    it('is a function', () => {
      expect(typeof isTruthy).toEqual('function');
    });
    it('returns true if given the boolean true', () => {
      let returnedValue = isTruthy(true);
      expect(returnedValue).toEqual(true);
    });
    it('returns true if given a truthy number', () => {
      let returnedValue = isTruthy(1);
      expect(returnedValue).toEqual(true);
    });
    it('returns true if given a truthy string', () => {
      let returnedValue = isTruthy('Honesty is the best policy');
      expect(returnedValue).toEqual(true);
    });
    it('returns the expected string if given the boolean false', () => {
      let returnedValue = isTruthy(false);
      expect(returnedValue).toEqual('The boolean value false is falsey');
    });
    it('returns the expected string if given null', () => {
      let returnedValue = isTruthy(null);
      expect(returnedValue).toEqual('The null value is falsey');
    });
    it('returns the expected string if given undefined', () => {
      let returnedValue = isTruthy();
      expect(returnedValue).toEqual('undefined is falsey');
    });
    it('returns the expected string if given the number 0', () => {
      let returnedValue = isTruthy(0);
      expect(returnedValue).toEqual('The number 0 is falsey (the only falsey number)');
    });
    it('returns the expected string if given an empty string', () => {
      let returnedValue = isTruthy('');
      expect(returnedValue).toEqual('The empty string is falsey (the only falsey string)');
    });
  });
  
  
  // YOUR CODE BELOW
  function myOr(arg1, arg2, arg3){
    if(!!arg1 === true)
      {return arg1}
    else if (!!arg2 === true)
      {return arg2}
    else if (!!arg3 === true)
      {return arg3}
    else {return arg3}
  }
  function myAnd(arg1, arg2, arg3){
      if(arg1 == false)
      {return arg1}
    else if (arg2 == false)
      {return arg2}
    else if (arg3 == false)
      {return arg3}
    else {return arg3}
  }
  describe('myOr', () => {
    it('is a function', () => {
      expect(typeof myOr).toEqual('function');
    });
    it('returns the first value if it is the first truthy value', () => {
      let returnedValue = myOr('apples', 1, false);
      expect(returnedValue).toEqual('apples');
    });
    it('returns the second value if it is the first truthy value', () => {
      let returnedValue = myOr(null, 'i am truthy', 'also true');
      expect(returnedValue).toEqual('i am truthy');
    });
    it('returns the third value if it is the first truthy value', () => {
      let returnedValue = myOr(false, false, true);
      expect(returnedValue).toEqual(true);
    });
    it('returns the third value if none of the values are truthy', () => {
      let returnedValue = myOr('', 0, null);
      expect(returnedValue).toEqual(null);
    });
  });
  describe('myAnd', () => {
    it('is a function', () => {
      expect(typeof myAnd).toEqual('function');
    });
    it('returns the first value if it is the first falsey value', () => {
      let returnedValue = myAnd(0, 1, false);
      expect(returnedValue).toEqual(0);
    });
    it('returns the second value if it is the first falsey value', () => {
      let returnedValue = myAnd(20, '', 'i am truthy');
      expect(returnedValue).toEqual('');
    });
    it('returns the third value if it is the first falsey value', () => {
      let returnedValue = myAnd(true, 'happy', 0);
      expect(returnedValue).toEqual(0);
    });
    it('returns the third value if all of the values are truthy', () => {
      let returnedValue = myAnd('finally', 'we did it!', 'yay!');
      expect(returnedValue).toEqual('yay!');
    });
  });
  
  // YOUR CODE BELOW
  function onlyOne(arg1, arg2, arg3){
    if (arg1 && arg2) 
       {return false}
    else if (arg2 && arg3)
      {return false}
    else if (arg1 && arg3)
      {return false}
    else if (arg1 || arg2)
      {return true}
    else if (arg2 || arg3)
      {return true}
    else {return false}
  }
  // a || b = false (a & b = false)
  // b || c = false (b & c = false)
  // a && b = true (a & b = true)
  // b && c = true (a & b = true)

  describe('onlyOne', () => {
    it('is a function', () => {
      expect(typeof onlyOne).toEqual('function');
    });
    it('returns a boolean', () => {
      let returnedValue = onlyOne(1, 1, 1);
      expect(typeof returnedValue).toEqual('boolean');
    });
    it('returns true if only the first value is truthy', () => {
      let returnedValue = onlyOne(1, 0, false);
      expect(returnedValue).toEqual(true);
    });
    it('returns true if only the second value is truthy', () => {
      let returnedValue = onlyOne(null, 'hi!', undefined);
      expect(returnedValue).toEqual(true);
    });
    it('returns true if only the third value is truthy', () => {
      let returnedValue = onlyOne(0, '', true);
      expect(returnedValue).toEqual(true);
    });
    it('returns false if all of the values are falsey', () => {
      let returnedValue = onlyOne(false, null, undefined);
      expect(returnedValue).toEqual(false);
    });
    it('returns false if only the first value is falsey', () => {
      let returnedValue = onlyOne('', -20, true);
      expect(returnedValue).toEqual(false);
    });
    it('returns false if only the second value is falsey', () => {
      let returnedValue = onlyOne(true, null, 'i am truthy');
      expect(returnedValue).toEqual(false);
    });
    it('returns false if only the third value is falsey', () => {
      let returnedValue = onlyOne(true, 'pumpkin', 0);
      expect(returnedValue).toEqual(false);
    });
    it('returns false if all of the values are truthy', () => {
      let returnedValue = onlyOne(true, 'yes!', 100);
      expect(returnedValue).toEqual(false);
    });
  });

  // YOUR CODE BELOW
  function zeroDarkThirty(num){
    if (num === 0)
      {return NaN}
    let zeroDarkString = num.toString()
    let newStr = ''
    for(i = 0; i < zeroDarkString.length; i++){
      if(zeroDarkString[i] !== "0"){
        newStr += zeroDarkString[i]
      }
    }
    return parseInt(newStr)
  }
  describe('zeroDarkThirty', () => {
    it('is a function', () => {
      expect(typeof zeroDarkThirty).toEqual('function');
    });
    it('returns a number', () => {
      let returnedValue = zeroDarkThirty(10);
      expect(typeof returnedValue).toEqual('number');
    });
    it('returns the original number after stripping out the zeros', () => {
      let returnedValue = zeroDarkThirty(10000000000);
      expect(returnedValue).toEqual(1);
    });
    it('returns NaN if given an 0', () => {
      let returnedValue = zeroDarkThirty(0);
      expect(returnedValue).toEqual(NaN);
    });
  });