(function() {
  // Добавляем header и aside на страницу
  // Выносим сюда, чтобы не дублировать одинаковый код на каждой странице
  
  
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
          <a href="${url}" id="homepage" alt="homepage">
            Главная
          </a>
          <a href="${url}orders" id="orders" alt="orders">
            Заказы
          </a>
          <a href="${url}products" id="products" alt="products">
            Товары
          </a>
          <a href="${url}shops" id="shops" alt="shops">
            Магазины
          </a>
          <a href="${url}users" id="users" alt="users">
            Пользователи
          </a>
        </nav>
      </aside>
    `
  }
  
  
  const pages = ["homepage", "orders", "products", "shops", "users"]
  
  let complete = false
  
  for (let i = 0; i < pages.length; i++) {
    if (window.location.href.indexOf(pages[i]) > -1) {
      complete = true
      if (i !== 0) {
        const pagesDetail = ["order-detail", "end"]
        for (page of pagesDetail) {
          if (page === "end") {
            addLeftBlock("../")
          } else if ( window.location.href.indexOf(page) > -1 ) {
            addLeftBlock("../../")
            break
          }
        }
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
}())