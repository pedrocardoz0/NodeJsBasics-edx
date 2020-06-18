var sayHelloEnglish = function () {
  return "Hello";
};

var sayHelloSwedish = function () {
  return "Hej";
};

var sayHelloTatar = function () {
  return "Isanme";
};

console.log(
  "Swedish " +
    sayHelloInSwedish() +
    " & English " +
    sayHelloInEnglish() +
    " & Tatar " +
    sayHelloInTatar()
);
