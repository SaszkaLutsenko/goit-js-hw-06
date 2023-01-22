

const itemEl = document.querySelectorAll(".item")
console.log(`Numbers of categories: ${ itemEl.length} `)

const aboutItemEl = itemEl.forEach((about) => {
    console.log(`Category: ${about.querySelector("h2").textContent}`)
    console.log(`Elements: ${about.querySelector("h2 + ul > li").length}`)
})




