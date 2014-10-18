import Table from './table/table';

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

  return {};

}(window, window.document));

export default main;