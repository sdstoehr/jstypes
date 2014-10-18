var main = (function (_window, undefined) {

    var _document = _window.document;

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



  return {};

}(window));

export default main;