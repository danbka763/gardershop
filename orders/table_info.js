(function() {
  // let elems = `
  // <div class="string">
  //   <div>1</div>
  //   <div>Danil</div>
  //   <div>1.000</div>
  //   <div>Наличные</div>
  //   <div>Shop</div>
  //   <div>Ожидает</div>
  //   <div>22.01.2020</div>
  // </div>
  // `

  const elems = [
    {
      id: 1,
      name: "Danil",
      cost: "1 000 Р.",
      costMethod: "Наличные",
      nameShop: "TBOE",
      status: 0,
      date: "2021/04/10 07:03:52"
    },
    {
      id: 2,
      name: "Danil",
      cost: "1 000 Р.",
      costMethod: "Наличные",
      nameShop: "TBOE",
      status: 1,
      date: "2021/04/10 07:03:52"
    },
    {
      id: 3,
      name: "Danil",
      cost: "1 000 Р.",
      costMethod: "Наличные",
      nameShop: "TBOE",
      status: 2,
      date: "2021/04/10 07:03:52"
    },
    {
      id: 4,
      name: "Danil",
      cost: "1 000 Р.",
      costMethod: "Наличные",
      nameShop: "TBOE",
      status: 3,
      date: "2021/04/10 07:03:52"
    },
  ]

        end = '</a>'
  let output = ""

  const status = {0: "Ожидание магазина", 1: "В пути", 2: "Завершен", 3: "Отменен"}

  for (elem of elems) {
    output += `<a href="order-detail/?id=${elem.id}" class="string">
                <div>${elem.id}</div>
                <div>${elem.name}</div>
                <div>${elem.cost}</div>
                <div>${elem.costMethod}</div>
                <div>${elem.nameShop}</div>
                <div class="status${elem.status}">${status[elem.status]}</div>
                <div>${elem.date}</div>
              ` + end
  }

  document.getElementsByClassName("strings")[0].innerHTML += output
}())