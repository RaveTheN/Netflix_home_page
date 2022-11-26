const question = document.getElementsByClassName('question');

for(let  i = 0; i<question.length; i++) {
    question[i].addEventListener('click', () => {
    const answer = document.getElementsByClassName('answer');

    if(answer[i].classList.contains('invisible')) {
        for(let  i = 0; i<question.length; i++) {
            answer[i].classList.add('invisible');
        }

        answer[i].classList.remove('invisible');
        return;
    }
    
    answer[i].classList.add('invisible');
});
}