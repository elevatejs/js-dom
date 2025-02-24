<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubble</title>
    <style>
        body {
            border: 2px solid red;
            margin: 4px;
        }

        h1,
        h3 {
            text-align: center;
        }

        section {
            border: 2px solid purple;
            margin: 4px;
        }

        ol {
            border: 2px solid orange;
            margin: 4px;
        }

        li {
            border: 2px solid blue;
            margin: 4px;
        }
    </style>
</head>

<body id="body">
    <h1 id="heading">Explore Event Bubble</h1>
    <section id="section">
        <h3>Mke Bubble into This List</h3>
        <ol id="ol-list">
            <li id="item-1">Lorem, ipsum.</li>
            <li id="item-2">Perspiciatis, libero.</li>
            <li id="item-3">Illo, necessitatibus.</li>
            <li id="item-4">Velit, deserunt!</li>
            <li id="item-5">Consectetur, aliquam?</li>

        </ol>
    </section>
    <script>
        // bubbling list items 2
        document.getElementById('item-2')
            .addEventListener('click', function () {
                console.log('list of item 2 has been clicked here');
            });
        // bubbling list items 5
        document.getElementById('item-5')
            .addEventListener('click', function () {
                console.log('list of items 5 has been clicked here');
            });
        // bubbling order list
        document.getElementById('ol-list')
            .addEventListener('click', function () {
                console.log('You have clicked in order list');
            });
        // bubbling in section 
        document.getElementById('section')
            .addEventListener('click', function () {
                console.log('You have clicked in section');
            });
        // bubbling in h1 tag
        document.getElementById('heading')
            .addEventListener('click', function () {
                console.log('You have clicked in Heading');
            });
        // bubbling in body
        document.getElementById('body')
            .addEventListener('click', function () {
                console.log('You have clicked in Whole Body');
            })
    </script>
</body>

</html>
