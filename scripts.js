const questionContainers = document.querySelectorAll('.questionContainer');

function toggleAnswer(container, index) {
    const answer = document.querySelector(`#answer${index + 1}`);
    const img = container.querySelector('img');

    function collapseAll() {
        questionContainers.forEach((container, i) => {
            const answer = document.querySelector(`#answer${i + 1}`);
            answer.style.maxHeight = '0';
            container.querySelector('img').src = 'assets/images/icon-plus.svg';
        });
    }

    if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
        collapseAll();
        answer.style.maxHeight = answer.scrollHeight + 'px';
        img.src = 'assets/images/icon-minus.svg';
    } else {
        answer.style.maxHeight = '0';
        img.src = 'assets/images/icon-plus.svg';
    }
}

questionContainers.forEach((container, index) => {
    container.addEventListener('click', () => toggleAnswer(container, index));
});


