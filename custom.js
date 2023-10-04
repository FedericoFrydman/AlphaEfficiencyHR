function updateCountdownSection() {
  const DateToGo = new Date('2024-01-01 00:00:00').getTime();
  const current = new Date().getTime();
  const timeLeft = DateToGo - current;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = Getformat(days);
  document.getElementById('hours').innerText = Getformat(hours);
  document.getElementById('minutes').innerText = Getformat(minutes);
  document.getElementById('seconds').innerText = Getformat(seconds);
}

function Getformat(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdownSection, 1000);

function HamburguerMenu() {
  var menuIconOpen = document.getElementsByClassName('open')[0];
  var menuIconClose = document.getElementsByClassName('close')[0];
  var menuItems = document.getElementsByClassName('menu');

  menuIconClose.style.display = 'none';

  menuIconOpen.onclick = function () {
    this.style.display = 'none';
    menuIconClose.style.display = 'block';
    HamburguerMenuDisplay('show', menuItems);
  };

  menuIconClose.onclick = function () {
    this.style.display = 'none';
    menuIconOpen.style.display = 'block';
    HamburguerMenuDisplay('hide', menuItems);
  };
}

function HamburguerMenuDisplay(state, items) {
  if (state == 'show') {
    for (var i = 1; i < items.length; i++) {
      items[i].classList.add('show');
    }
  } else {
    for (var i = 1; i < items.length; i++) {
      items[i].classList.remove('show');
    }
  }
}

window.onload = function () {
  HamburguerMenu();
};

//FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
