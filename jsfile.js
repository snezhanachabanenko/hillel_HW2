const homeworkSwitchCase = () => {
  const unit = prompt("Type unit here, please");
  const value = prompt("Type a value here, please");

  const kilometersToMeters = () => {
    const meters = Number(value) * 1000;
    return alert(`${value} km is ${meters} meters`);
  };

  const kilogrammToGramm = () => {
    const gramm = Number(value) * 1000;
    return alert(`${value} kilogramm is ${gramm} gramm`);
  };

  const hoursToMinutes = () => {
    const minutes = Number(value) * 60;
    return alert(`${value} hours is ${minutes} minutes`);
  };

  switch (unit) {
    case "km":
      //or break instead of return
      return kilometersToMeters();
    case "h":
      //or break instead of return
      return hoursToMinutes();
    case "kg":
      //or break instead of return
      return kilogrammToGramm();

    default:
      alert("Invalid unit!");
  }
};

const homeworkAge = () => {
  const age = Number(prompt("Type your age here, please:"));

  if (isNaN(age) || age < 1) {
    alert("Wrong age");
    return;
  }

  if (age === 1) {
    alert(`${age} рік`);
  } else if (age < 5) {
    alert(`${age} роки`);
  } else {
    alert(`${age} років`);
  }
};

//switch func here
window.addEventListener("load", homeworkAge);
