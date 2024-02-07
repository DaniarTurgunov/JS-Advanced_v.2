// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = []
    
    constructor(booksList) {
        const uniqueList = [...new Set(booksList)]
        if (uniqueList.length !== booksList.length) {
            throw new Error ('Список содержит дубликаты');
        }
        this.#books = booksList;
    }
    allBook(){
        return this.#books.join(', ');
    }
    addBook(title){
        try {
            if (this.#books.includes(title)) {
                throw new Error ('Такая книга уже есть');
            }
            this.#books.push(title);
            return this.#books.join(', ');
        } catch (error) {
            return error.message;
        }
    }
    removeBook(title){
        try {
            if (!this.#books.includes(title)) {
                throw new Error ('Такой книги нет в списке')
            }
            const titleId = this.#books.indexOf(title);
            this.#books.splice(titleId, 1);
            return this.#books.join(', ');
        } catch (error) {
            return error.message;
        }
    }
    hasBook(title) {
        return this.#books.includes(title);
    }

}

const bookList = ['Метаморфозы', 'Чудовище', 'Сиддхартха', 'Левиафан'];

// Создаем библиотеку
const library1 = new Library(bookList);
console.log(library1.allBook()); 

// Добавление новой книги
console.log(library1.addBook('Марсианин')); 
console.log(library1.addBook('Марсианин'));

// Удаление книги из списка
console.log(library1.removeBook('Марсианин')); 
console.log(library1.removeBook('Сияние')); 

//Проверка наличия книги в библиотеке
console.log(library1.hasBook('Метаморфозы')); 
console.log(library1.hasBook('Сияние')); 


// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.


const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
];

const userInput = document.querySelector('.user_input');
const sendBtn = document.querySelector('.submit');
const reviews = document.querySelector('.reviews');
const divError = document.querySelector('.error_msg');

initialData.forEach(element => {
    const productName = document.createElement('h3');
    productName.textContent = element.product;
    reviews.appendChild(productName);
    element.reviews.forEach(review => {
        const defaultReview = document.createElement('p');
        defaultReview.textContent = review.text;
        reviews.appendChild(defaultReview);
    });
});


sendBtn.addEventListener('click', function () {
    try {
        if (userInput.value.trim().length < 20 || userInput.value.trim().length > 500) {
            throw new Error ('Несоответствующая длина текста')
        }
        const reviewElem = document.createElement('p');
        reviewElem.textContent = (userInput.value);
        reviews.appendChild(reviewElem);
        divError.textContent = '';
    } catch (error) {
        divError.textContent = error.message;
    }
});