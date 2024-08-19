<!DOCTYPE html>
    <><html><link rel="stylesheet" type="text/css" href="interactions.css"></link>
        <body>
        <div class="hero-bkg-animated">
  <h1>Hero Headline</h1>
</div>

            <h2>JavaScript addEventListener()</h2>

            <p>This example uses the addEventListener() method to attach a click event to a button.</p>

            <button id="myBtn">Try it</button>

            <p id="demo"></p>

            <script>
                document.getElementById("myBtn").addEventListener("click", displayDate);

                function displayDate() {document.getElementById("demo").innerHTML = Date()};
                }
            </script>

        </body>
        <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
    </html><div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/M9kgjEsLG6LMbYC9dl" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/M9kgjEsLG6LMbYC9dl">via GIPHY</a></p><script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script></>