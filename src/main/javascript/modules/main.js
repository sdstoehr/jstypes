import Table from './table/table';
import Quiz from './quiz/quiz';

var main = (function (_window, _document, undefined) {

    (function externalLinks() {

        var links = _document.querySelectorAll('a[rel*="external"]'), i, link, track;

        track = function (e) {
            var target = e.target, href, _ga = _window.ga;
            if (!target) {
                return;
            }

            href = target.href;

            if (!href) {
                return;
            }

            _ga('send', 'event', 'link', 'click', href);

        };

        for (i = 0; i < links.length; i = i + 1) {
            link = links[i];
            link.setAttribute('target', '_blank');
            link.onclick = track;
        }

    }());


    (function renderTables() {

        var tables = _document.querySelectorAll('.comparison-table'), i, table, comparator, caption;

        for (i = 0; i < tables.length; i = i + 1) {
            table = tables[i];
            comparator = table.getAttribute('data-comparator');
            caption = table.getAttribute('data-caption');

            if (comparator !== Table.STRICTEQUAL && comparator !== Table.EQUAL) {
                comparator = Table.STRICTEQUAL;
            }

            new Table(table, comparator, caption);
        }
    }());

    (function renderQuizes() {

        var quizes = _document.querySelectorAll('.render-quiz'), i, quiz;

        for (i = 0; i < quizes.length; i = i + 1) {
            quiz = quizes[i];
            new Quiz(quiz, 10);
        }
    }());

    (function sharerLinks() {

        var sharers = _document.querySelectorAll('.share-popup'), i, sharer;

        for (i = 0; i < sharers.length; i = i + 1) {
            sharer = sharers[i];
            sharer.onclick = function (e) {
                if (!this || !this.href) {
                    return false;
                }
                e.preventDefault();
                return window.open(this.href,
                    'jst-sharer', 'height=400,width=600,resizable=1');
            }
        }
    }());

  return {};

}(window, window.document));

export default main;