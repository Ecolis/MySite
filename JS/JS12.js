document.addEventListener("DOMContentLoaded", function () {

    function showMessage(message) {
        console.log(message);
    }


    function logCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
    }


    function changeBackgroundColor(selector, color) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.backgroundColor = color;
        } else {
            console.error(`Элемент с селектором "${selector}" не найден.`);
        }
    }


    function resetBackgroundColor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.backgroundColor = "white";
        } else {
            console.error(`Элемент с селектором "${selector}" не найден.`);
        }
    }
   
    function toggleVisibility(selector) {
        const element = document.querySelector(selector);
        if (element) {
            if (element.style.display === "none") {
                element.style.display = "block"; 
            } else {
                element.style.display = "none"; 
            }
        }
    }


    function updateH1FromUtmTerm() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmTerm = urlParams.get("utm_term");
        const h1Element = document.querySelector("h1");

        if (utmTerm && h1Element) {
            h1Element.textContent = utmTerm;
        }
    }

   
    showMessage("Скрипт загружен!"); 
    logCurrentTime();
    changeBackgroundColor(".content", "lightblue"); 
    resetBackgroundColor(".content"); 
    toggleVisibility(".logo"); 
    updateH1FromUtmTerm();

    //Относится к 13 работе(таблица меняется)
     const Button = document.getElementsByClassName('tableButton')[0];
     const tableOne = document.getElementsByClassName('tableOne')[0];
     const tableTwo = document.getElementsByClassName('tableTwo')[0];
     const lecturesTable = document.getElementsByClassName('tableLect')[0];
     const showLecturesButton = document.getElementsByClassName('tablebtn')[0];
     


     
    Button.addEventListener('click', () => {
        if (tableOne.style.display === 'block') {
            tableOne.style.display = 'none';
            tableTwo.style.display = 'block';
        } else {
            tableTwo.style.display = 'none';
            tableOne.style.display = 'block';
        }
    });


    //14 тетрадь анимация с таблицей лекций

    lecturesTable.style.display = 'none';

    showLecturesButton.addEventListener('click', () => {
        if (lecturesTable.style.display === 'none') {
            
            lecturesTable.style.display = 'block'; 
            lecturesTable.style.opacity = '0'; 
            lecturesTable.style.transition = 'opacity 0.5s ease'; 
            setTimeout(() => {
                lecturesTable.style.opacity = '1'; 
            }, 10); 
        } else {
           
            lecturesTable.style.opacity = '0'; 
            setTimeout(() => {
                lecturesTable.style.display = 'none'; 
            }, 500); 
        }
    });


});