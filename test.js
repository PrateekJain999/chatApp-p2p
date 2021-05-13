var str1 = 'plusminusplusminus';
var str2 = 'plushellominus';

// do the test strings contain these terms?
var conditions = ["plus", "minus"];

// run the tests against every element in the array
var test1 = str1.match(^["plus"]);
var test2 = conditions.every(el => str2.includes(el));

// display results
console.log(str1, ' ===> ', test1);
console.log(str2, ' ===> ', test2);