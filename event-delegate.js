
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delegate</title>
</head>

<body>
    <h1>Explore Event Delegate</h1>
    <ol id="ol-list">
        <li class="li-item">My Awesome list -1</li>
        <li class="li-item">My Awesome list -2</li>
        <li class="li-item">My Awesome list -3</li>
        <li class="li-item">My Awesome list -4</li>
        <li class="li-item">My Awesome list -5</li>
        <li class="li-item">My Awesome list -6</li>
    </ol>
    <button id="btn-add">Add New</button>
    <script>
        document.getElementById('ol-list')
            .addEventListener('click', function (event) {
                event.target.parentNode.removeChild(event.target);
            });
        document.getElementById('btn-add')
            .addEventListener('click', function () {
                // parent to be add 
                const ol = document.getElementById('ol-list');
                // new items 
                const li = document.createElement('li');
                li.classList.add('li-item');
                li.innerHTML = 'Added New items';
                ol.appendChild(li)
            })
    </script>
</body>

</html>
