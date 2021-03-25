(function() {
  if ( document.getElementsByClassName("table")[0] ) {
    const sizeTable = 123
    
    // Адаптив для таблиц на страницах
    document.getElementsByClassName("table")[0].style.height = 
             document.getElementsByTagName("html")[0].clientHeight - 
             sizeTable + 
             "px"
    
    document.getElementsByClassName("strings")[0].style.height = 
             document.getElementsByClassName("table")[0].clientHeight - 
             141 + "px"
    
    // Ставим прослушку на изменение размера окна
    window.addEventListener(`resize`, event => {
      document.getElementsByClassName("table")[0].style.height = 
               document.getElementsByTagName("html")[0].clientHeight - 
               sizeTable + 
               "px"
      document.getElementsByClassName("strings")[0].style.height = 
               document.getElementsByClassName("table")[0].clientHeight - 
               141 + "px"
    }, false);
  }


  if ( document.getElementsByClassName("block-info")[0] ) {
    const sizeBlock = 123
    
    // Адаптив для форм с информацией на страницах
    document.getElementsByClassName("block-info")[0].style.height = 
             document.getElementsByTagName("html")[0].clientHeight - 
             sizeBlock + 
             "px"

    document.getElementsByClassName("info")[0].style.height = 
             document.getElementsByClassName("block-info")[0].clientHeight - 
             107 + "px"
    
    // Ставим прослушку на изменение размера окна
    window.addEventListener(`resize`, event => {
      document.getElementsByClassName("block-info")[0].style.height = 
               document.getElementsByTagName("html")[0].clientHeight - 
               sizeBlock + 
               "px"
      document.getElementsByClassName("info")[0].style.height = 
               document.getElementsByClassName("block-info")[0].clientHeight - 
               107 + "px"
    }, false);
  }
}())