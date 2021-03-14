// go page
function page(namePage) {

}

const pages = ["Homepage", "Orders"]

let complete = false

for (let i = 0; i < pages.length; i++) {
  if (window.location.href.indexOf(pages[i]) > -1) {
    complete = true

    console.log(document.getElementById(pages[i]))
  }
}

if (!complete) {
  document.getElementById(pages[0]).className = "active"
}