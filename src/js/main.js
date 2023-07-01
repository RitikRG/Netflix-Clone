const option1btn = document.getElementById('planeGate');
const option2btn = document.getElementById('deviceOption');
const option3btn = document.getElementById('planOption');


const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');


const openOption1=()=>{
    if(!option1btn.classList.contains('activeBar')){
        option1btn.classList.add('activeBar');
        option2btn.classList.remove('activeBar');
        option3btn.classList.remove('activeBar');

        option1.setAttribute('style', 'display: block;');
        option2.setAttribute('style', 'display: none;');
        option3.setAttribute('style', 'display: none;');
    }
}
const openOption2=()=>{
    if(!option2btn.classList.contains('activeBar')){
        option2btn.classList.add('activeBar');
        option1btn.classList.remove('activeBar');
        option3btn.classList.remove('activeBar');


        option2.setAttribute('style', 'display: grid;');
        option1.setAttribute('style', 'display: none;');
        option3.setAttribute('style', 'display: none;');
    }
}
const openOption3=()=>{
    if(!option3btn.classList.contains('activeBar')){
        option3btn.classList.add('activeBar');
        option1btn.classList.remove('activeBar');
        option2btn.classList.remove('activeBar');


        option3.setAttribute('style', 'display: block;');
        option1.setAttribute('style', 'display: none;');
        option2.setAttribute('style', 'display: none;');
    }
}

option1btn.addEventListener('click', openOption1);
option2btn.addEventListener('click', openOption2);
option3btn.addEventListener('click', openOption3);
