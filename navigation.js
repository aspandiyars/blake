function toggleMenuFile() {
    const menu = document.querySelector('.menu');
    const menuImg = document.getElementById('menu-img');
    
    if (menu.classList.contains('active')) {
        menuImg.src = '../img/menu.black.png';
    } else {
        menuImg.src = '../img/close.png';
    }
    
    menu.classList.toggle('active');
  }

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuImg = document.getElementById('menu-img');
    
    if (menu.classList.contains('active')) {
        menuImg.src = 'img/menu.black.png';
    } else {
        menuImg.src = 'img/close.png';
    }
    
    menu.classList.toggle('active');
  }
  
  
  function toggleAnswer(question) {
    const answer = question.querySelector('.answer');
    answer.classList.toggle('open');
  
    const image = question.querySelector('#rotateImage');
    image.classList.toggle('rotate');
  }
  
  function showThankYouMessage() {
    const contactForm = document.querySelector('#subscribe-form');
    const thankYouMessage = document.querySelector('#thank-you-message');
    contactForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
  }
