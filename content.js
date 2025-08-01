// Функция для скрытия Shorts в меню и ленте
function hideShorts() {
    // Скрываем Shorts в стандартном меню, мини-меню и ленте
    const shortsElements = document.querySelectorAll(
        'ytd-guide-entry-renderer a[title="Shorts"], ' +
        'ytd-guide-entry-renderer a[href*="/shorts"], ' +
        'ytd-mini-guide-entry-renderer a[title="Shorts"], ' +
        'ytd-mini-guide-entry-renderer a[href*="/shorts"], ' +
        'ytd-rich-shelf-renderer a[href*="/shorts"]'
    );

    shortsElements.forEach(element => {
        // Для меню и мини-меню скрываем родительский элемент
        const parent = element.closest('ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer, ytd-rich-shelf-renderer');
        if (parent) {
            parent.style.display = 'none';
        }
    });
}

// Выполняем сразу
hideShorts();

// Наблюдатель за изменениями в DOM
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
