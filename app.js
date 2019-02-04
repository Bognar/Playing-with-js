var people = ['Joe', 'Rony', 'Kiki'];
const ppldiv = document.getElementById('loop');
const hidemeh = document.getElementById('kokica');
itemsToPut = JSON.stringify(people); 
var names = JSON.parse(localStorage.getItem('myPeople'));


people.forEach(function(peeps){
    const li = document.createElement('li');
    ppldiv.appendChild(li);
    li.textContent = peeps;
    li.style.color ='red';
});

// Event listeners

// run fun

EventListener();

// explicit fun event list.

function EventListener() {
    ppldiv.addEventListener('click', clickerfun);
    ppldiv.addEventListener('mouseover', moverfun);
    hidemeh.addEventListener('mouseover', hidemefun);
    hidemeh.addEventListener('mouseout', showmefun);
}
// fun functions
function clickerfun(e) {
    console.log('ohh, you clicked me! Than ill store this names in local storage');
    localStorage.setItem('myPeople', itemsToPut);
    displayNames();
    }
function moverfun(e) {
    
    ppldiv.style.background = 'green';
}
function hidemefun(e) {
    hidemeh.style.visibility = 'hidden';
}
function showmefun(e){
    hidemeh.style.visibility = 'visible';
}
function displayNames(){
    console.log(names);
}