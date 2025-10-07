
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__content-navigation');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
 


document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = parseFloat(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (!age || !height || !weight) {
    alert("Будь ласка, заповни всі поля!");
    return;
  }

  // Формула Mifflin–St Jeor
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const maintain = Math.round(bmr * activity);
  const loss = Math.round(maintain - 400);
  const gain = Math.round(maintain + 400);

  document.getElementById("maintain").textContent = maintain;
  document.getElementById("loss").textContent = loss;
  document.getElementById("gain").textContent = gain;

  const result = document.getElementById("result");
  result.classList.remove("hidden");
});

