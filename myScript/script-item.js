window.addEventListener('scroll', function(){
    const sections = document.querySelectorAll('.fade');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(sectionTop < windowHeight - 300){
            section.classList.add('visible');
        }else{
            section.classList.remove('visible');
        }
    });
});