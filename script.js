// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при прокрутке
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Пример: можно добавить параллакс-эффект для героя
    const hero = document.getElementById('hero');
    if (hero) {
        hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }
    
    // Добавляем класс при прокрутке для анимации элементов
    const adviceItems = document.querySelectorAll('.advice-item');
    adviceItems.forEach((item, index) => {
        if (isInViewport(item)) {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.classList.add('animate');
        }
    });
});

// Функция проверки видимости элемента
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Инициализация анимации при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить дополнительные эффекты при загрузке
    const hero = document.getElementById('hero');
    if (hero) {
        hero.style.opacity = '1';
    }
});