function mail() {
    var comment = document.getElementById("message").value;
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var link = 'mailto:sikder.dinesh2@gmail.com?subject=A message from ' + name + '. ' + subject + '&body=' + comment;
    console.log("link", link)
    window.location.href = link;
}

function typeWriter(text, elementId, delay, callback) {
    let i = 0;
    const speed = delay || 100;

    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 500); // Small delay before starting the next text
        }
    }

    document.getElementById(elementId).innerHTML = ''; // Clear previous text
    type();
}

function startTypingEffect() {
    const headerText = "Hi !!👋🏻 I'm Dinesh Sikder";
    const subHeaderText = "I am a Fullstack Developer | Associate Staff Engineer at Nagarro";

    // Clear both header and subheader before starting the typing effect
    document.getElementById("typingHeader").innerHTML = '';
    document.getElementById("typingSubheader").innerHTML = '';
    
    typeWriter(headerText, "typingHeader", 100, function () {
        typeWriter(subHeaderText, "typingSubheader", 100);
    });
}

window.onload = function () {
    startTypingEffect();
};

// Smooth scrolling for navigation links and triggering typewriter effect on "Home" click
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;

        if (target === "#page-top") {
            startTypingEffect(); // Trigger typewriter effect when "Home" is clicked
        }

        $('html, body').animate({
            scrollTop: $(target).offset().top - 60
        }, 800);
    });
});

// Change navbar background on scroll
document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Trigger animations on scroll
const sections = document.querySelectorAll('.fade-in, .slide-in');

const options = {
    threshold: 0.1,
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Scroll to Top functionality
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
