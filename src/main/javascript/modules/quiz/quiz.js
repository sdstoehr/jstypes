import Comparison from '../comparision';

var Quiz = (function (_window, _document, undefined) {

    var Quiz = function (element, totalQuestions) {
        this.init(element, totalQuestions);
    };

    Quiz.prototype = {
        'element': null,

        'quizElement': null,
        'questionElement': null,
        'countElement': null,
        'innerElement': null,

        'correctAnswer': null,
        'totalQuestions': 5,
        'currentQuestion': 0,
        'points': 0,

        'history': [],

        'init': function (element, totalQuestions) {
            this.element = element;
            if (totalQuestions) {
                this.totalQuestions = totalQuestions;
            }
            this.render();
            this.next();
        },

        'next': function () {
            var values1, values2, rand1, rand2, rand3,
                value1, value2, comparator, question, historyEntry;

            this.currentQuestion = this.currentQuestion + 1;
            if (this.currentQuestion > this.totalQuestions) {
                this.finished();
                return;
            }

            values1 = Comparison.getValues();
            values2 = Comparison.getValues();

            rand1 = Math.floor(Math.random() * values1.length);
            rand2 = Math.floor(Math.random() * values2.length);
            rand3 = Math.round(Math.random());

            value1 = values1[rand1];
            value2 = values2[rand2];
            comparator = (rand3 === 0) ? Comparison.EQUAL : Comparison.STRICTEQUAL;

            this.correctAnswer = Comparison.compare(value1, value2, comparator);
            question = Comparison.toString(value1) + ' ' + comparator + ' ' + Comparison.toString(value2);

            historyEntry = {
                'value1': value1,
                'value2': value2,
                'comparator': comparator,
                'question': question,
                'correctAnswer': this.correctAnswer
            };
            this.history.push(historyEntry);

            this.questionElement.innerHTML = '';
            this.questionElement.appendChild(_document.createTextNode(question));

            this.countElement.innerHTML = '';
            this.countElement.appendChild(
                _document.createTextNode(this.currentQuestion + '/' + this.totalQuestions));
        },

        'finished': function () {

            if (_window.ga) {
                _window.ga('send', 'event', 'quiz', 'finished', this.points);
            }

            this.questionElement.innerHTML = '';
            this.questionElement.appendChild(_document.createTextNode('Results'));

            this.countElement.innerHTML = '';

            this.innerElement.innerHTML = '';

            var table, thead, tbody, tr, td, i, historyEntry, icon, score;

            table = _document.createElement('table');
            table.className = 'history';

            thead = _document.createElement('thead');
            table.appendChild(thead);

            tr = _document.createElement('tr');
            thead.appendChild(tr);

            td = _document.createElement('th');
            td.appendChild(
                _document.createTextNode('Question'));
            tr.appendChild(td);

            td = _document.createElement('td');
            td.appendChild(
                _document.createTextNode('Your answer'));
            tr.appendChild(td);

            td = _document.createElement('td');
            td.appendChild(
                _document.createTextNode('Correct answer'));
            tr.appendChild(td);

            tbody = _document.createElement('tbody');
            table.appendChild(tbody);

            for (i = 0; i < this.history.length; i = i + 1) {
                historyEntry = this.history[i];

                tr = _document.createElement('tr');
                tr.className = 'history-' + ((historyEntry.correct) ? 'correct' : 'wrong');
                tbody.appendChild(tr);

                td = _document.createElement('th');
                td.appendChild(
                    _document.createTextNode(historyEntry.question));
                tr.appendChild(td);

                td = _document.createElement('td');
                td.appendChild(
                    _document.createTextNode((historyEntry.answer) ? 'true' : false));
                tr.appendChild(td);

                td = _document.createElement('td');
                td.appendChild(
                    _document.createTextNode((historyEntry.correctAnswer) ? 'true' : false));
                tr.appendChild(td);
            }

            score = _document.createElement('h2');

            icon = _document.createElement('i');
            icon.className = 'fa fa-trophy fa-2x';
            score.appendChild(icon);
            score.appendChild(_document.createTextNode(this.points + '/' + this.totalQuestions));

            this.innerElement.appendChild(score);
            this.innerElement.appendChild(table);
        },

        'render': function () {
            if (!this.element) {
                return;
            }

            this.element.innerHTML = '';

            var headerElement,
                trueButton, falseButton;

            this.quizElement = _document.createElement('div');
            this.quizElement.className = 'quiz';

            headerElement = _document.createElement('div');
            headerElement.className = 'header';
            this.quizElement.appendChild(headerElement);

            this.questionElement = _document.createElement('h3');
            headerElement.appendChild(this.questionElement);

            this.countElement = _document.createElement('span');
            this.countElement.className = 'count';
            headerElement.appendChild(this.countElement);

            this.innerElement = _document.createElement('div');
            this.innerElement.className = 'inner';
            this.quizElement.appendChild(this.innerElement);

            trueButton = _document.createElement('a');
            trueButton.className = 'btn btn-true';
            trueButton.appendChild(_document.createTextNode('true'));
            trueButton.onclick = (function(that) {
                return function () {
                    that.answer(true);
                };
            }(this));
            this.innerElement.appendChild(trueButton);

            falseButton = _document.createElement('a');
            falseButton.className = 'btn btn-false';
            falseButton.appendChild(_document.createTextNode('false'));
            falseButton.onclick = (function(that) {
                return function () {
                    that.answer(false);
                };
            }(this));
            this.innerElement.appendChild(falseButton);

            this.element.appendChild(this.quizElement);
        },

        'answer': function (answer) {

            if (this.correctAnswer === null) {
                return false;
            }

            var i, historyEntry, correct = (answer === this.correctAnswer);

            i = this.history.length;
            if (i > 0) {
                historyEntry = this.history[i-1];
                historyEntry.answer = answer;
                historyEntry.correct = correct;
                this.history[i-1] = historyEntry;
            }

            if (correct) {
                this.points = this.points + 1;
            }

            this.quizElement.className = 'quiz quiz-' + ((correct) ? 'correct' : 'wrong');
            _window.setTimeout((function (that) {
                return function () {
                    that.quizElement.className = 'quiz';
                };
            }(this)), 1000);

            this.next();
        }
    };

    return Quiz;

}(window, window.document));

export default Quiz;