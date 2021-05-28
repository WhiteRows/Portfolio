const contents = document.querySelectorAll(".content");
const btnsClose = document.querySelectorAll(".btn-close");

contents.forEach((content) =>{
    content.addEventListener('click', function() {
        this.classList.add('active');
    });
});

btnsClose.forEach((btnClose) =>{
    btnClose.addEventListener('click', (e) =>{
        e.preventDefault;
        contents.forEach((content) =>{
            content.classList.remove('active');
        });
    });
});