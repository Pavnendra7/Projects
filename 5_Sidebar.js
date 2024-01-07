const toggleBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');


toggleBtn.addEventListener('click', () => {
    // console.log(sideBar.classList);
    // if(sideBar.classList.contains('show-sidebar')) {
    //     sideBar.classList.remove('show-sidebar');
    // }
    // else {
    //     sideBar.classList.add('show-sidebar');
    // }
    sideBar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
})