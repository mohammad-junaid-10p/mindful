let accordianBtn = document.querySelector('.hslda-card-footer');
let accordian = document.querySelector('.card-accordian-wrapper');


function sidebarToggle() { 
    layoutWrap = document.querySelector('.layout-wrapper');
    layoutWrap.classList.toggle('sidebar-expanded');
};

function accordianToggle(element) {
    element.classList.toggle('accordian-expanded');
};

function accordianToggle(element) {
    element.classList.toggle('accordian-expanded');
};

function eyeToggle(element) {
    element.classList.toggle('icon-eye');
    let password = element.previousElementSibling;
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
}