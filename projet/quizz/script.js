class Question {
    constructor (text,choices,answer){
    this.text=text; 
    this.choices = choices;
    this.answer =answer;
}
    isCorrectAnswer(choice){
        return this.answer ===choice;
    }
}
//tableau contenant les question 
let questions = [
    new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", ["indexOf()", "map()", "filter()", "reduce()"], "filter()"),
    new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau", ["isNaN()","includes()", "findIndex()", "isOdd()"], "includes()"),
    new Question("Quelle méthode transforme du JSON en un objet Javascript ?", ["JSON.parse()","JSON.stringify()", "JSON.object()", "JSON.toJS"], "JSON.parse()"),
    new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche", ["Math.ceil()","Math.floor()", "Math.round()", "Math.random()"], "Math.round()")
  ];


class Quiz {
    constructor(questions){
        this.score =0; 
        this.questions =questions;
        this.currentQuestionIndex = 0;
    }
//afficher les questions 
    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
//vérification de la réponse 
    guess(answer){
        if (this.getCurrentQuestion().isCorrectAnswer(answer)){
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded(){
        return this.currentQuestionIndex >=this.questions.length;
    }
}

//regroupe les fonctions affichage 

const display = {
    elementShown:function(id,text){
        let element = document.getElementById(id);
        element.innerHTML = text;
    }, 
    endQuiz : function(){
        let endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length} </h3>`;
        this.elementShown("question", endQuizHTML);
    },
    question: function(){
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function(){
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler =(id, guess)=>{
            document.getElementById(id).onclick = function(){
                quiz.guess(guess);
                quizApp();
            }
        }
        for(let i = 0; i < choices.length; i++){
            this.elementShown('choice' + i,choices[i]);
            guessHandler("guess" + i,choices[i]); 
        }
    },
  //afficher question arrivé   
    progress: function(){
        let getCurrentQuestionNumber= quiz.currentQuestionIndex + 1; 
        this.elementShown('progress', "Question " + getCurrentQuestionNumber + "sur" + quiz.questions.length)
    }
}

//logique de jeu 
quizApp = ()=>{
    if (quiz.hasEnded()){
    display.endQuiz();    
    }else{ 
        display.question();
        display.choices();
        display.progress();
}
}
//
let quiz = new Quiz(questions);
quizApp();

 