document.addEventListener("DOMContentLoaded", function () {

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
