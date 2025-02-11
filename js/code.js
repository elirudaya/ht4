document.addEventListener ('DOMContentLoaded', function(){

    document.addEventListener("mousemove", function(event) {
        document.body.innerText = `X: ${event.clientX}, Y: ${event.clientY}`;

    });
})