/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Data Scientist', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// About me read buttons

var readMoreButton = document.getElementById('readMore');
var readLessButton = document.getElementById('readLess');
var beforeRead = document.getElementById('beforeRead');
var afterRead = document.getElementById('afterRead');

readMoreButton.addEventListener('click', function(event) {
    event.preventDefault();
    beforeRead.style.display = 'none';
    afterRead.style.display = 'block';
    readMoreButton.style.display = 'none';
    readLessButton.style.display = 'inline';
});

readLessButton.addEventListener('click', function(event) {
    event.preventDefault();
    beforeRead.style.display = 'block';
    afterRead.style.display = 'none';
    readMoreButton.style.display = 'inline';
    readLessButton.style.display = 'none';
});

// Services readmore and readless buttons
document.querySelectorAll('.readmoreServiceButton').forEach((button) => {
    button.addEventListener('click', function () {
      // Find the parent service box and expand it
      const serviceBox = this.closest('.services-box');
  
      // Hide all service boxes except the one that was clicked
      document.querySelectorAll('.services-box').forEach((box) => {
        if (box !== serviceBox) {
          box.style.display = 'none';
        } else {
          box.classList.add('expanded');
        }
      });
  
      // Show the read-more content and buttons
      serviceBox.querySelector('.readlessService').style.display = 'none';
      serviceBox.querySelector('.readmoreService').style.display = 'block';
      serviceBox.querySelector('.readlesserviceButton').style.display = 'inline-block';
      serviceBox.querySelector('.request').style.display = 'inline-block';
  
      // Hide the "Read More" button
      this.style.display = 'none';
    });
  });
  
  // Event listener for "Other Services" button
  document.querySelectorAll('.readlesserviceButton').forEach((button) => {
    button.addEventListener('click', function () {
      // Find the parent service box and collapse it
      const serviceBox = this.closest('.services-box');
      serviceBox.classList.remove('expanded');
  
      // Show all service boxes again
      document.querySelectorAll('.services-box').forEach((box) => {
        box.style.display = 'block';
      });
  
      // Show the read-less content and hide the expanded content
      serviceBox.querySelector('.readlessService').style.display = 'block';
      serviceBox.querySelector('.readmoreService').style.display = 'none';
      serviceBox.querySelector('.readlesserviceButton').style.display = 'none';
      serviceBox.querySelector('.request').style.display = 'none';
  
      // Show the "Read More" button again
      serviceBox.querySelector('.readmoreServiceButton').style.display = 'inline-block';
    });
  });
  