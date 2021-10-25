function convertToRoman(num) {
  const romans = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  let romanNumerals = '';
  //return the numeral keys reversed
  const romanKeys = Object.keys(romans).reverse();
  //iterating through decimal/roman keys
  romanKeys.forEach(key =>{
    while(key <= num){
      romanNumerals += romans[key];
      num -=key;
    }
  });
 return romanNumerals;
}

console.log(convertToRoman(36));
