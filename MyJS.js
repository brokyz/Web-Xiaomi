var btn = document.querySelector('.close');
var student = document.querySelector('.student-info');
var shadow = student.previousElementSibling;
btn.addEventListener('click', function(){
    student.style.display = 'none';
    shadow.style.display = 'none';
})