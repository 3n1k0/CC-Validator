let form = document.querySelector("form");
let checkCC = [];
let feedback = document.querySelector(".feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let ccn = document.getElementsByClassName("ccn")[0].value;

  if (creditcardCheck(ccn)) {
    if (isitvalid(ccn)) {
      console.log("CARD NUMBER IS VALID");
    } else {
      console.log("CARD NUMBER IS INVALID");
    }
    feedback.textContent = "YAY! Your credit card number is 100% valid!";
    feedback.classList.add("valid");
  } else {
    feedback.textContent = "Unfortunately, this is an invalid credit card number.";
    feedback.classList.add("invalid");
  }
  }
);







function creditcardCheck(num) {
  var ccString = num.toString();
  var firstDigits = ccString.substring(0, 2);

  if ((firstDigits == 34 || firstDigits == 37) && ccString.length == 15) {
    return "AMEX";
  } else if (firstDigits >= 51 && firstDigits <= 55 && ccString.length == 16) {
    return "MASTERCARD";
  } else if (
    firstDigits.charAt(0) == 4 &&
    (ccString.length == 16 || ccString.length == 13)
  ) {
    return "VISA";
  } else {
    console.log("INVALID");
  }
}

function isitvalid(num) {
  var split = num.split("");
  var everySecond = getEverySecond(split, 2);

  let everySecondMultipliedbyTwo = everySecond.map((x) => x * 2);

  let reduced = ArraytoString(everySecondMultipliedbyTwo);

  let sumofeverydigit = sumDigits(reduced);

  let everySecondfromLast = getEverySecond(split, 1);

  let reduced2 = ArraytoString(everySecondfromLast);

  let sumofeveryotherdigit = sumDigits(reduced2);

  let finalsum = sumofeverydigit + sumofeveryotherdigit;

  return finalsum.toString().slice(-1) == 0;
}

function sumDigits(num) {
  return num
    .toString()
    .split("")
    .reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    });
}

function getEverySecond(arr, offset) {
  var everySecond = [];
  for (var i = arr.length - offset; i >= 0; i -= 2) {
    everySecond.push(parseInt(arr[i]));
  }
  return everySecond;
}

function ArraytoString(arr) {
  return arr.reduce((acc, item) => {
    return acc.toString() + item;
  });
}

// INNENTOL KOVETKEZIK A STYLE

