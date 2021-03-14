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

nav.childNodes[1].innerHTML = `${startSVG}
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              ${endSVG}` + nav.childNodes[1].innerHTML

nav.childNodes[3].innerHTML = `${startSVG}
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                              ${endSVG}` + nav.childNodes[3].innerHTML

nav.childNodes[5].innerHTML = `${startSVG}
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                              ${endSVG}` + nav.childNodes[5].innerHTML

nav.childNodes[7].innerHTML = `${startSVG}
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              ${endSVG}` + nav.childNodes[7].innerHTML