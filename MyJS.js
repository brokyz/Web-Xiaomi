var btn = document.querySelector('.close');
var student = document.querySelector('.student-info');
var shadow = student.previousElementSibling;
var more = document.querySelector('.more-info');
btn.addEventListener('click', function(){
    student.style.display = 'none';
    shadow.style.display = 'none';
    more.style.display = 'block';
})

more.addEventListener('click',function(){
    shadow.style.display = 'block';
    student.style.display = 'block';
    more.style.display = 'none';
})

var title = student.children[0];
title.addEventListener('mouseover',function(){
    this.style.cursor = 'move';
})
title.addEventListener('mousedown',function(e){
    var x = e.pageX - student.offsetLeft;
    var y = e.pageY - student.offsetTop;
    document.addEventListener('mousemove',move);
    function move(e) {
        student.style.left = e.pageX - x + 'px';
        student.style.top = e.pageY -y + 'px';
    }
    document.addEventListener('mouseup',function(e){
        document.removeEventListener('mousemove',move);
    })
});
