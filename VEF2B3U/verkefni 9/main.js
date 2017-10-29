(function() {
    "use strict";
    let teljari = 0;
    let totalCorrect = 0;
    /* DOM element */
    let elContainer = document.getElementById('svarmoguleikar');

    /* Smiður fyrir spurningu */
    function Question(question, answers, correctAnswer) {
        this.question = question; /* Spurning (strengur) */
        this.answers = answers; /* fylki með svarmöguleikum */
        this.correctAnswer = correctAnswer; /* Rétt svar (strengur) */
    }

    let questions = [
        new Question('Hvað fékk Miðflokkurinn marga þingmenn?', ['3', '5', '7', '9'], '7'),
        new Question('Hver er formaður Miðflokks?', ['Sigmundur Davíð', 'Bergþór Ólason ', 'Gunnar Bragi'], 'Sigmundur Davíð'),
        new Question('Hvaða ár var miðflokkurinn stofnaður?', ['2016', '2017'], '2017'),
        new Question('Hver er konan sem Sigmundur Davíð sagði að væri fulltrúi Miðflokks í Framsókn', ['Lilja Alfreðsdóttir', 'Þórunn Egilsdóttir', 'Halla Signý', 'Silja Dögg'], 'Lilja Alfreðsdóttir'),
    ];

    function shuffleArray(array) {
        let m = array.length,
            t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
    }
    // notum shuffle á fylkið með gögnunum (objects)
    shuffleArray(questions);

    /* Template */
    Question.prototype.getTemplate = function() {
        let tmplAnswers = "";
        for (let i = 0; i < this.answers.length; i++) {
            tmplAnswers += "<div class=\"btn btn-secondary svar\">" + this.answers[i] + "</div>";
        }
        return "<h4>" + this.question + "</h4>" + tmplAnswers;
    };


    elContainer.innerHTML = questions[0].getTemplate();
    let correctAns = questions[0].correctAnswer;

    var el = document.getElementById('svarmoguleikar');
    el.addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() === 'div') {
                if (e.target.textContent === correctAns) {
                    totalCorrect++;
                    e.target.className += " btn-success";
                } else {
                    e.target.className += " btn-danger";
                }
            setTimeout(function() {
          teljari++;
          if (teljari === 4) {
            elContainer.innerHTML = "<h2> You scored " + totalCorrect + "/" + questions.length + "</h2>";
          }
          else {
            elContainer.innerHTML = questions[teljari].getTemplate();
            correctAns = questions[teljari].correctAnswer;
          }
        }, 500);

        }
    });
}());