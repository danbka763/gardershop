(function() {
  // Создание скелета таблиц на сайте
  if ( document.getElementsByClassName("table")[0] ) {
    const icon = document.getElementById("icon")
    const pages = ["Заказы", "Товары", "Магазины", "Пользователи"]
    const index = pages.indexOf(icon.innerHTML)
    
    const tableFooter = 
    ` <footer>
        <div>
          <div>1-10 из 100</div>
          <div class="icons">
            <span id="back_icon"></span>
            <span id="next_icon"></span>
          </div>
        </div>
      </footer>`
    
    const tableStart = '<div><div class="heightTable">'
    const tableEnd = '</div><div class="strings"></div></div>'
    
    const tableParam = [
      ["ID", "Клиент", "Сумма", "Способ оплаты", "Магазин", "Статус", "Дата"],
      ["ID", " ", "Название", "Цена", "Категория", "Магазин", "Статус", "Дата"],
      ["ID", " ", "Название", "Баланс", "Город", "Адрес", "Дата создания"],
      ["ID", "Имя", "E-mail", "Привязан к магазину", "Текущий город", "Дата регистрации"],
    ]

    document.getElementsByClassName("table")[0].className += " table" + index

    let tableHeader = ""

    for (let elem of tableParam[index]) {
      tableHeader += "<div>" + elem + "</div>"
    }

    document.getElementsByClassName("table")[0].innerHTML = tableStart + 
                                                              tableHeader + 
                                                              tableEnd + 
                                                            tableFooter
  } 
}())