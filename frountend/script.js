let button = document.getElementById("secret")
if (!(localStorage.getItem('secret'))) {
    localStorage.setItem('secret', 'false');
}
if (localStorage.getItem('secret') == "true") {
    //do something secret?
    document.body.style.backgroundImage = "url('https://media3.giphy.com/media/kkoRgXbTCPY3K/giphy.gif')"; 
}
if (button) {
    button.addEventListener("click", function(event) {
        if (localStorage.getItem('secret') == "true") {
            localStorage.setItem('secret', 'false')
        } else {
            localStorage.setItem('secret', 'true')
        }
        window.location = "index.html"
    })
}
//not a arg
console.log("hiiii")