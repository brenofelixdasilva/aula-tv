const visor = document.getElementById('visor');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {

    // se a tv estiver ligada acicione o iframe
    if(btn.checked == true){

        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/TpFy0gn6Y0E"
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "white";
        iframe.style.borderRadius = "10px";
        iframe.allow = "accelerometer; autoplay;";
        visor.appendChild(iframe);
    }
    else {
        // 1° coisa - remover iframe
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/TpFy0gn6Y0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
