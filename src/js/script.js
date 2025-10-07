
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__content-navigation');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
 


document.getElementById('calorie-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = parseInt(document.getElementById('age').value);
  const height = parseInt(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value);

  if (!age || !height || !weight) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  // Формула Mifflin–St Jeor
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr += (gender === 'male') ? 5 : -161;

  const maintain = Math.round(bmr * activity);
  const loss = Math.round(maintain - maintain * 0.2);
  const gain = Math.round(maintain + maintain * 0.15);

  document.getElementById('maintain').textContent = maintain;
  document.getElementById('loss').textContent = loss;
  document.getElementById('gain').textContent = gain;

  document.getElementById('result').classList.remove('hidden');
  document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
});
