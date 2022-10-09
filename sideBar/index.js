function menu() {
    const teste = document.querySelector("nav")
    const text = document.querySelectorAll("span")

    text.forEach(item => {
        item.classList.toggle('text')
    })

    teste.classList.toggle("teste")
}