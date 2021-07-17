const newParseInt = textNum => Number(textNum)

// Tests
console.log(newParseInt('42'));
console.log(newParseInt('42') + 2);
console.log(newParseInt('421') - 12);
console.log(newParseInt('12') * 1);
console.log(newParseInt('100') / 10);