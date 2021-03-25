axios
  .post("https://api.gardershop.kz/admin_scripts/auth.php", "action=get_status")
  .then(function(res) {
    console.log(res.data)
    document.getElementsByClassName("preloader")[0].style.display = "none"
    document.getElementsByTagName("main")[0].classList = ""

    if (res.data.message === "not-authorized") {
      document.getElementById("authForm").style.display = "block"
    } else if (res.data.message === "authorized") {

    }
  })
  .catch(function(err) {
    document.getElementsByClassName("preloader")[0].style.display = "none"
    console.error(err)
  })

function openButton() {
  let button = document.getElementById("authButton")
  
  if (document.getElementById("login").value.length > 3 && 
      document.getElementById("pass").value.length > 5) {
    button.disabled = false
    button.className = "active"
  } else {
    button.disabled = true
    button.className = ""
  }
}

function login() {
  const login = encodeURIComponent(document.getElementById("login").value),
        pass = encodeURIComponent(document.getElementById("pass").value)

  const post = "action=login" + "&email=" + login + "&password=" + pass
  console.log(post)
  axios
    .post("https://api.gardershop.kz/admin_scripts/auth.php", post)
    .then(function(res) {
      console.log(res.data)
    })
    .catch(function(err) {
      console.error(err)
    })
}