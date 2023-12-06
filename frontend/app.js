document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectButton');
    const gatherButton = document.getElementById('gatherButton');
    const spreadButton = document.getElementById('spreadButton');
    const randomWalkButton = document.getElementById('randomWalkButton');

    gatherButton.addEventListener('click', function () {
        document.body.style.backgroundColor = 'blue';
    });

    spreadButton.addEventListener('click', function () {
        document.body.style.backgroundColor = 'green';
    });

    randomWalkButton.addEventListener('click', function () {
        document.body.style.backgroundColor = 'purple';
    });

    connectButton.addEventListener('click', function () {
        // Send a request to the server to execute connect_to_robots.sh
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/connect_to_robots", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert('Connected to robots successfully!');
                } else {
                    alert('Failed to connect to robots: ' + xhr.statusText);
                }
            }
        };
        xhr.send();
    });
});
