document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const submit = document.getElementsByClassName('btn-ew')[0];
    const openModalBtns = document.querySelectorAll('.btn-new');
    const form = document.getElementById('feedbackForm');
    const serviceTypeInput = document.getElementById('serviceType');
    const successMessage = document.getElementById('successMessage');

    // Объект для хранения данных формы
    const formData = {
        name: '',
        email: '',
        phone: '',
        date: '',
        comment: '',

        printData() {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    // Открытие модального окна
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
            serviceTypeInput.value = this.getAttribute('data-service');
        });
    });

    // Закрытие модального окна по кнопке
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие модального окна по клику вне его
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Обработчик отправки формы
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Собираем данные из формы
        formData.name = form.elements["name"].value;
        formData.email = form.elements["email"].value;
        formData.phone = form.elements["phone"].value;
        formData.date = form.elements["date"].value;
        formData.comment = form.elements["message"].value;

        if (!formData.name || formData.name.length < 2 || /\d/.test(formData.name)) {
            alert("Пожалуйста, введите корректное имя (минимум 2 символа, без цифр).");
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            alert("Введите корректный e-mail.");
            return;
        }

        if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
            alert("Введите телефон в формате +7 (999) 999-99-99.");
            return;
        }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.date)) {
            alert("Введите корректную дату в формате YYYY-MM-DD.");
            return;
        }

        if (!formData.comment) {
            alert("Пожалуйста, заполните обязательное поле комментарий.");
            return;
        }
     
        formData.printData();

       
        successMessage.classList.add('show');

        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 2000);
        setTimeout(() => {
            modal.style.display = 'none';
        }, 3000);
        
    });

});