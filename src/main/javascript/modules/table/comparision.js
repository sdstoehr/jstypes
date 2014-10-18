var Comparison = (function (JSON, undefined) {

    var isString, isObject, toString, compare, getValues,
        COMPARE_EQUAL = '==', COMPARE_STRICTEQUAL = '===';

    getValues = function () {
        return [true, false, 1, 0, -1, 'true', 'false', '1', '0', '-1', '', null, undefined, [], {}, [[]], [0], [1], parseFloat('nan')];
    };

    isString = function (o) {
        return Object.prototype.toString.call(o) === "[object String]";
    };

    isObject = function (o) {
        return Object.prototype.toString.call(o) === "[object Object]";
    };

    toString = function (o) {
        if (isString(o)) {
            return '"' + o + '"';
        }
        if (isObject(o)) {
            return JSON.stringify(o);
        }
        if (o === null) {
            return 'null';
        }
        if (o === undefined) {
            return 'undefined';
        }
        if (isNaN(o)) {
            return 'NaN';
        }
        return JSON.stringify(o);
    };

    compare = function (val1, val2, comparator) {

        if (comparator === COMPARE_EQUAL) {
            return (val1 == val2);
        }

        return (val1 === val2);

    };

    return {
        'getValues': getValues,
        'toString': toString,
        'compare': compare,
        'EQUAL': COMPARE_EQUAL,
        'STRICTEQUAL': COMPARE_STRICTEQUAL
    };

}(window.JSON));

export default Comparison;