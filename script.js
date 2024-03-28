const inPutElements = document.querySelectorAll (".card__input");
const submitButton = document.querySelector(".card__button");

const validateDay = (day) => {
if (day && day > 0 && day <= 31){
return true
}
}

const validateMonth = (month) => {
if (month && month > 0 && month <= 31){
return true
}
}

const validateYear = (year) => {
if (year && year > 0 && year <= 31){
return true
}
}


const calculateAgeMonth = (year, month, day) => {
  const age = {
    year : null,
    month : null,
    day : null
  }
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let ageMonth = today.getMonth() - birthDate.getMonth();
  let ageYear = today.getFullYear() - birthDate.getFullYear();
  var monthDff = today.getMonth() - birthDate.getMonth();
  var ageDay = today.getDate() - birthDate.getDate();
  
  if (
    monthDff < 0 
  ) {
    ageYear --
    ageMonth +=12;
  }
  if(ageDay < 0){
    ageMonth--
    ageDay +=30
  } 

age.year = ageYear
age.month = ageMonth
age.day = ageDay
  return age;
};

const onClickHandler = () => {
  const dayElement = document.querySelector(".card__input[name=day]");
  const monthElement = document.querySelector(".card__input[name=month]");
  const yearElement = document.querySelector(".card__input[name=year]");
  const resultYear = document.querySelector(".card__resultValue[name=year]");
  const resultMonth = document.querySelector(".card__resultValue[name=month]");
  const resultDay = document.querySelector(".card__resultValue[name=day]");

  let age = calculateAgeMonth(
    yearElement.value,
    monthElement.value,
    dayElement.value
  );
  resultYear.textContent = age.year
  resultMonth.textContent = age.month
  resultDay.textContent = age.day
  
};

inPutElements.forEach((item) => {
  item.addEventListener("keydown", (event) => {
    event.key === "Enter" && onClickHandler();
  });
});

submitButton.addEventListener("click", onClickHandler);
