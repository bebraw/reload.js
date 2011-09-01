require(
    ['src/reload'],
    function(reload) {
        require.ready(function() {
            var r = reload(2000);

            document.body.appendChild(r.ui());

            r.play();
        });
    }
);
