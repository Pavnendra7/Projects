const div = document.querySelector('.container-button');

const btn1 = document.createElement('button');
btn1.setAttribute("class", "btn decrease");
btn1.textContent = "Decrease";
div.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.setAttribute("class", "btn reset");
btn2.textContent = "Reset";
div.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.setAttribute("class", "btn increase");
btn3.textContent = "Increase";
div.appendChild(btn3);


// Set Initial count
let count = 0;

// Select value and buttons
const value =  document.querySelector('#value');
const btns =document.querySelectorAll('.btn');


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
            
        }
        else {
            count = 0;
        }
        if(count>0) {
            value.style.color = 'green';
            
        }
        if(count<0){
            value.style.color = 'red';
        }
        if(count==0){
            value.style.color = 'black';
        }

        value.textContent=count;
    })
})