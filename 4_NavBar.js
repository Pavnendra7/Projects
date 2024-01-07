const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// classList :- Shows/get all the classes
// classList.contains :-  Check classlist for specific class
// classList.add :- add class
//  classList.remove :- Remove class
//  classList.toggle :- Toggle class



navToggle.addEventListener('click', () => {
    // console.log(links.classList.contains("random"));

    // console.log(links.classList.contains("links"));
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links'); 
    // }
    // else {
    //     links.classList.add('show-links');
    // }

    links.classList.toggle('show-links')
})

