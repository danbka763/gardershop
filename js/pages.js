// переход на другую страницу
function page(namePage) {

}

// Добавляем 
document.getElementsByTagName("article")[0].innerHTML = 
  `
    <header>
      <div id="logo">
        <img src="PNG/logo.png" alt="logotype">
        <div>
          <h1>GARDERSHOP</h1>
          <p>Панель администратора</p>
        </div>
      </div>
      </header>

      <aside>
      <nav>
        <a href="./" id="Homepage">
          Главная
        </a>
        <a href="Orders" id="Orders">
          Заказы
        </a>
        <a id="products">
          Товары
        </a>
        <a id="shop">
          Магазины
        </a>
      </nav>
    </aside>
  `

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