// переход на другую страницу
function page(namePage) {

}

// Добавляем header и aside на страницу
function addLeftBlock(url) {
  document.getElementsByTagName("article")[0].innerHTML = 
  `
    <header>
      <div id="logo">
        <img src="${url}PNG/logo.png" alt="logotype">
        <div>
          <h1>GARDERSHOP</h1>
          <p>Панель администратора</p>
        </div>
      </div>
      </header>

      <aside>
      <nav>
        <a href="${url}" id="Homepage">
          Главная
        </a>
        <a href="${url}Orders/index.html" id="Orders">
          Заказы
        </a>
        <a id="${url}Products">
          Товары
        </a>
        <a id="${url}Shop">
          Магазины
        </a>
      </nav>
    </aside>
  `
}


const pages = ["Homepage", "Orders"]

let complete = false

for (let i = 0; i < pages.length; i++) {
  if (window.location.href.indexOf(pages[i]) > -1) {
    complete = true
    if (i !== 0) {
      addLeftBlock("../")
    } else {
      addLeftBlock("")
    }
    document.getElementById(pages[i]).className = "active"
  }
}

if (!complete) {
  addLeftBlock("")
  document.getElementById(pages[0]).className = "active"
}