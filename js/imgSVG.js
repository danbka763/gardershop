(function() {
  // Выносим добавление SVG сюда, чтобы не загразнять HTML код
  
  // aside block
  let nav = document.getElementsByTagName("nav")[0]
  
  const startSVG = `<svg xmlns="http://www.w3.org/2000/svg" 
                         width="24" 
                         height="24" 
                         viewBox="0 0 24 24" 
                         fill="none" 
                         stroke="currentColor" 
                         stroke-width="2" 
                         stroke-linecap="round" 
                         stroke-linejoin="round" 
                         class="feather feather-home">`
  const endSVG = '</svg>'
  
  
  // ["homepage", "orders", "products", "shops", "users", "order-detail"]
  const mass_SVG = [
    `
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    `,
    `
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    `,
    `
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    `,
    `
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    `,
    `
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    `,
    `
      <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `
  ]
  
  nav.childNodes[1].innerHTML = `${startSVG}
                                   ${mass_SVG[0]}
                                 ${endSVG}` + nav.childNodes[1].innerHTML
  
  nav.childNodes[3].innerHTML = `${startSVG}
                                   ${mass_SVG[1]}
                                 ${endSVG}` + nav.childNodes[3].innerHTML
  
  nav.childNodes[5].innerHTML = `${startSVG}
                                   ${mass_SVG[2]}
                                 ${endSVG}` + nav.childNodes[5].innerHTML
  
  nav.childNodes[7].innerHTML = `${startSVG}
                                   ${mass_SVG[3]}
                                 ${endSVG}` + nav.childNodes[7].innerHTML
  
  nav.childNodes[9].innerHTML = `${startSVG}
                                   ${mass_SVG[4]}
                                 ${endSVG}` + nav.childNodes[9].innerHTML
  
  
  // Добавляем иконки в основной блок
  let icon = document.getElementById("icon")
  if ( icon ) {
    const pages = ["Заказы", "Товары", "Магазины", "Пользователи"]
    const index = pages.indexOf(icon.innerHTML) > -1 ? 
                    pages.indexOf(icon.innerHTML)+1 : 5
    
    if (index < 5) {
      icon.innerHTML = startSVG + mass_SVG[index] + endSVG + icon.innerHTML
    } else {
      icon.innerHTML = '<a href="../">' +
                         startSVG + 
                         mass_SVG[index] + 
                         endSVG +  
                       "</a>" + icon.innerHTML
    }
  
    const iconSearch = `
      <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="black" stroke-opacity="0.54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.5 17.5L13.875 13.875" stroke="black" stroke-opacity="0.54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `
  
    let ending = "ам"
    if (index === pages.length) {
      ending = "ям"
    }
  
    // добавляем imput
    if (index < 5) {
      document.getElementById("search").innerHTML = 
              '<input placeholder="Поиск по ' +  
                pages[index-1].slice(0, pages[index-1].length-1) + 
                ending +
              '...">' +
              document.getElementById("search").innerHTML
    
  
    // добавляем иконку лупы к input
      document.getElementById("search").innerHTML = startSVG + 
                                                      iconSearch + 
                                                    endSVG + 
                                                    document.getElementById('search').innerHTML
  
    // Иконки далее и назад
      const iconNextAndBack_start = `
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L1 7L7 1" stroke="black" stroke-opacity="`
      const iconNextAndBack_end = `" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
      document.getElementById("back_icon").innerHTML = iconNextAndBack_start + 0.54 + iconNextAndBack_end
      document.getElementById("next_icon").innerHTML = iconNextAndBack_start + 1 + iconNextAndBack_end
    }
  }
}())