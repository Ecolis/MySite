document.addEventListener("DOMContentLoaded", function () {
    // 11 WORK
    const h1Element = document.querySelector("h1");
    h1Element.textContent = "Добро пожаловать на наш сайт!";
    const h2Element = document.querySelector("h2");
    h2Element.style.color = "red";
    const firstParagraph = document.querySelector("p");
    firstParagraph.textContent = "Это новый текст параграфа.";
    const firstVideo = document.querySelector("video");
    if (firstVideo) {
        firstVideo.style.display = "none";
    } else {
        console.log("Видео не найдено на странице.");
    }

    //Это 13 тетрадь наводится на заголовок
    h1Element.addEventListener('click', function() {
       alert("Вы нажали на заголовок!");
    });

    const studentImage = document.getElementById('oneImage');
    const studentImage2 = document.querySelector('#oneImage');
    /*studentImage.addEventListener('mouseover', () => {
        studentImage.style.width = `${parseInt(studentImage.style.width || studentImage.width) * 1.1}px`;
        studentImage.style.height = `${parseInt(studentImage.style.height || studentImage.height) * 1.1}px`;
    });
    studentImage.addEventListener('mouseout', () => {
        studentImage.style.width = '';
        studentImage.style.height = ``;
    });*/

    studentImage.addEventListener('click', () => {
        studentImage.src = '/img/Teacher.jpg'; 
    });

    studentImage.addEventListener('dblclick', () => {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });

    

    //14 тетрадь

    studentImage2.addEventListener('mouseover', () => {
        studentImage2.classList.add('rotate');
    });
    
    
    studentImage2.addEventListener('mouseout', () => {
        studentImage2.classList.remove('rotate');
    });

    h1Element.addEventListener('mouseover', () => {
        h1Element.style.transition = 'font-size 0.3s ease'; 
        h1Element.style.fontSize = `${parseInt(window.getComputedStyle(h1Element).fontSize) * 1.2}px`;
    });
    
    
    h1Element.addEventListener('mouseout', () => {
        h1Element.style.transition = 'font-size 0.3s ease'; 
        h1Element.style.fontSize = ''; 
    });


    const paragraph = document.querySelector('.paragraph');


    paragraph.addEventListener('click', () => {
    
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    paragraph.style.transition = 'background-color 0.5s ease';
    paragraph.style.backgroundColor = randomColor;
    });


});
