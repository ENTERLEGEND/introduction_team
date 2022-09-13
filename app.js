let starts = document.getElementById('starts')
let moon = document.getElementById("moon")
let mountains_behind = document.getElementById("mountains_behind")
let mountains_front = document.getElementById("mountains_front")
let text = document.getElementById("text")
let btn = document.getElementById("btn")

window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    starts.style.left = value + 0.25 +'px'
    moon.style.top = value + 1 +'px'
    text.style.marginRight = value + 1 +'px'
    // mountains_behind.style.top = value + 0.001 +'px'

})
