// let questionContainer1 = document.querySelector('#questionContainer1');
// let questionContainer2 = document.querySelector('#questionContainer2');
// let questionContainer3 = document.querySelector('#questionContainer3');
// let questionContainer4 = document.querySelector('#questionContainer4');

// questionContainer1.addEventListener('click', function () {
//     let answer = document.querySelector('#answer1');
//     let img = document.querySelector('#questionContainer1 img');
//     if (answer.style.display !== 'block') {
//         answer.style.display = 'block';
//         img.src = 'assets/images/icon-minus.svg'
//     } else {
//         answer.style.display = 'none';
//         img.src = 'assets/images/icon-plus.svg'
//     }
// });

// questionContainer2.addEventListener('click', function () {
//     let answer = document.querySelector('#answer2');
//     let img = document.querySelector('#questionContainer2 img');
//     if (answer.style.display !== 'block') {
//         answer.style.display = 'block';
//         img.src = 'assets/images/icon-minus.svg'
//     } else {
//         answer.style.display = 'none';
//         img.src = 'assets/images/icon-plus.svg'
//     }
// });

// questionContainer3.addEventListener('click', function () {
//     let answer = document.querySelector('#answer3');
//     let img = document.querySelector('#questionContainer3 img');
//     if (answer.style.display !== 'block') {
//         answer.style.display = 'block';
//         img.src = 'assets/images/icon-minus.svg'
//     } else {
//         answer.style.display = 'none';
//         img.src = 'assets/images/icon-plus.svg'
//     }
// });

// questionContainer4.addEventListener('click', function () {
//     let answer = document.querySelector('#answer4');
//     let img = document.querySelector('#questionContainer4 img');
//     if (answer.style.display !== 'block') {
//         answer.style.display = 'block';
//         img.src = 'assets/images/icon-minus.svg'
//     } else {
//         answer.style.display = 'none';
//         img.src = 'assets/images/icon-plus.svg'
//     }
// });




// const questionContainers = document.querySelectorAll('.questionContainer');

// questionContainers.forEach(function (container, index) {
//     container.addEventListener('click', function () {
//         const answer = document.querySelector('#answer' + (index + 1));
//         const img = container.querySelector('img');

//         if (answer.style.display !== 'block') {
//             answer.style.display = 'block';
//             img.src = 'assets/images/icon-minus.svg';
//         } else {
//             answer.style.display = 'none';
//             img.src = 'assets/images/icon-plus.svg';
//         }
//     });
// });




const questionContainers = document.querySelectorAll('.questionContainer');

questionContainers.forEach(function (container, index) {
    container.addEventListener('click', function () {
        const answer = document.querySelector('#answer' + (index + 1));
        const img = container.querySelector('img');

        if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
            // Set max-height to the actual height of the answer content
            answer.style.maxHeight = answer.scrollHeight + 'px';
            img.src = 'assets/images/icon-minus.svg';
        } else {
            answer.style.maxHeight = '0';
            img.src = 'assets/images/icon-plus.svg';
        }
    });
});

