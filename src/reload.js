define(function() {
    return function(interval) {
        var scope = this;
        this.interval = Math.max(interval, 500); // 500ms at min

        var ui = function(playLabel, stopLabel) {
            playLabel = playLabel || 'Play';
            stopLabel = stopLabel || 'Stop';

            var elem = document.createElement('div');
            var running = !('_timerId' in scope);

            var setText = function() {
                elem.innerHTML = running? stopLabel: playLabel;
            };

            var setState = function() {
                running = !running;
                setText();
                running? stop(): play();
            };

            elem.id = 'playback';
            elem.onclick = setState;

            setText();

            return elem;
        };

        var play = function() {
            var reload = function() {
                location.reload(true);
            };

            scope._timerId = setTimeout(reload, scope.interval);
        };

        var stop = function() {
            clearTimeout(scope._timerId);
        };

        return {
            ui: ui,
            play: play,
            stop: stop
        };
    };
});
