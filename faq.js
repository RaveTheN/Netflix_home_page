const question = document.getElementsByClassName('question');

for(let  i = 0; i<question.length; i++) {
    question[i].addEventListener('click', () => {
    const answer = document.getElementsByClassName('answer');
    const cross = document.getElementsByClassName('cross');

    if(answer[i].classList.contains('invisible')) {
        for(let  i = 0; i<question.length; i++) {
            answer[i].classList.add('invisible');
            cross[i].classList.remove('rotate');
        }

        answer[i].classList.remove('invisible');
        cross[i].classList.add('rotate');
        return;
    }
    
    answer[i].classList.add('invisible');
    cross[i].classList.remove('rotate');
});
}

