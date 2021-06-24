// styles
require("../style/style.scss")

// module
const Tags = require("./simple-tags")

// run immediately
;(function () {
    let DOMSimpleTags = document.querySelectorAll(".simple-tags")
    DOMSimpleTags = Array.from(DOMSimpleTags)
    DOMSimpleTags.forEach(function (dom) {
        new Tags(dom)
    })
})()
