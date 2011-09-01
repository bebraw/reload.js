require(
    ['src/reloader'],
    function(reloader) {
        require.ready(function() {
            var r = reloader(2000);

            document.body.appendChild(r.ui());

            r.play();
        });
    }
);
