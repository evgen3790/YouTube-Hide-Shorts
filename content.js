// Функция для скрытия Shorts в обоих меню
function hideShorts() {
    // Ищем элементы Shorts в стандартном и мини-меню
    const shortsElements = document.querySelectorAll(
        'ytd-guide-entry-renderer a[title="Shorts"], ' +
        'ytd-guide-entry-renderer a[href*="/shorts"], ' +
        'ytd-mini-guide-entry-renderer a[title="Shorts"], ' +
        'ytd-mini-guide-entry-renderer a[href*="/shorts"]'
    );

    shortsElements.forEach(element => {
        // Скрываем родительский элемент (ytd-guide-entry-renderer или ytd-mini-guide-entry-renderer)
        const parent = element.closest('ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer');
        if (parent) {
            parent.style.display = 'none';
        }
    });
}

// Выполняем сразу
hideShorts();

// Наблюдатель за изменениями в DOM (YouTube загружает меню динамически)
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            hideShorts();
        }
    });
});

// Настраиваем и запускаем наблюдатель
observer.observe(document.body, {
    childList: true,
    subtree: true
});