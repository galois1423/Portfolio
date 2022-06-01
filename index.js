//get my github profile

fetch("https://api.github.com/users/galois1423").then(res=>res.json()).then(data=>{
    document.getElementById("profileimg").src = data.avatar_url
})

let add = (title, link) => {
    var a = document.createElement('a')
    a.setAttribute('class', 'projectslink')
    a.setAttribute('href', link)

    var t = document.createElement('div')
    t.setAttribute('class', 'projects')
    t.innerHTML = title
    a.appendChild(t)


    document.getElementById('myprojectstext').appendChild(a)
}

add('3D engine', 'https://playentry.org/project/6146e69008e47431e24849f7')
add('Puzzle game', 'https://playentry.org/project/609221adfbe22af0c476bc69')
add('Fourier series', 'https://playentry.org/project/615862c35d49526422448136')
add('2D physics engine', 'https://playentry.org/project/61b5643197c411003745f9bc')
