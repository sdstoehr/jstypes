import Comparison from '../comparision';

var Table = (function (_window, _document, undefined) {

    var Table = function (element, comparator, caption) {
        this.init(element, comparator, caption);
    };

    Table.EQUAL = Comparison.EQUAL;
    Table.STRICTEQUAL = Comparison.STRICTEQUAL;

    Table.prototype = {
        'element': null,
        'comparator': Comparison.STRICTEQUAL,
        'caption': '',

        'init': function (element, comparator, caption) {
            this.element = element;
            this.comparator = (comparator === Table.EQUAL) ? Table.EQUAL : Table.STRICTEQUAL;
            this.caption = (caption) ? caption : '';
            this.render();
        },

        'render': function () {
            if (!this.element) {
                return;
            }

            this.element.innerHTML = '';

            var table, tbody, thead, tr, td, captionElem,
                values1 = Comparison.getValues(), values2 = Comparison.getValues(),
                i, j, val1, val1str,  val2, val2str, result, resultText, span;

            table = _document.createElement('table');
            table.className = 'comparison-table';
            captionElem = _document.createElement('caption');
            tbody = _document.createElement('tbody');
            thead = _document.createElement('thead');

            table.appendChild(captionElem);
            table.appendChild(thead);
            table.appendChild(tbody);

            // Render header
            captionElem.appendChild(_document.createTextNode(this.caption));
            tr = _document.createElement('tr');
            thead.appendChild(tr);

            tr.appendChild(_document.createElement('th'));

            for (i = 0; i < values1.length; i = i + 1) {
                td = _document.createElement('th');

                span = _document.createElement('span');
                span.appendChild(_document.createTextNode(Comparison.toString(values1[i])));

                td.appendChild(span);
                tr.appendChild(td);
            }

            for (i = 0; i < values1.length; i = i + 1) {
                val1 = values1[i];
                val1str = Comparison.toString(val1);

                tr = _document.createElement('tr');
                tbody.appendChild(tr);

                td = _document.createElement('th');
                td.appendChild(_document.createTextNode(val1str));
                tr.appendChild(td);

                for (j = 0; j < values2.length; j = j + 1) {
                    val2 = values2[j];
                    val2str = Comparison.toString(val2);

                    result = Comparison.compare(val1, val2, this.comparator);

                    td = _document.createElement('td');
                    td.title = val1str + ' ' + this.comparator + ' ' + val2str;

                    if (result) {
                        td.className = 'result-true';
                        resultText = 'true';
                    } else {
                        td.className = 'result-false';
                        resultText = 'false';
                    }

                    span = _document.createElement('span');
                    span.appendChild(_document.createTextNode(resultText));

                    td.appendChild(span);
                    tr.appendChild(td);
                }
            }

            this.element.appendChild(table);
        }
    };

    return Table;

}(window, window.document));

export default Table;