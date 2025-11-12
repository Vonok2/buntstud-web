// Находим все элементы с классом .slide — это отдельные слайды
const slides = document.querySelectorAll('.slide');

// Находим кнопки переключения слайдов (влево и вправо)
const prevBtn = document.querySelector('.slider-arrow-left');
const nextBtn = document.querySelector('.slider-arrow-right');

// Индекс текущего слайда
let currentSlide = 0;

/**
 * Функция для отображения слайда по индексу
 * @param {number} index — индекс слайда, который нужно показать
 */
function showSlide(index) {
  // Перебираем все слайды
  slides.forEach((slide, i) => {
    // Добавляем класс "active" только выбранному слайду
    slide.classList.toggle('active', i === index);
  });
}

// Обработчик клика по кнопке "Назад"
prevBtn.addEventListener('click', () => {
  // Переходим к предыдущему слайду
  // (если текущий — первый, переходим на последний)
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  // Отображаем новый слайд
  showSlide(currentSlide);
});

// Обработчик клика по кнопке "Вперёд"
nextBtn.addEventListener('click', () => {
  // Переходим к следующему слайду
  // (если текущий — последний, возвращаемся к первому)
  currentSlide = (currentSlide + 1) % slides.length;

  // Отображаем новый слайд
  showSlide(currentSlide);
});
