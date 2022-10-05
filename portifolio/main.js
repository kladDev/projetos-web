async function getApiGithub() {

  const response = await fetch('https://api.github.com/users/kladdev')
  const body = await response.json()

  return body
}

const data = getApiGithub()

data.then(item => {
  let nome = document.getElementById("name")
  let img = document.getElementsByClassName("foto")
  let bio = document.getElementById("bio")
  let location = document.getElementById("location")
  let login = document.getElementById("login")
  let repos1 = document.getElementById("repos1")

  for (let i = 0; i < img.length; i++) {
    img[i].src = `${item.avatar_url}`
  }

  nome.innerHTML = `${item.name}`
  bio.innerHTML = `${item.bio}`
  location.innerHTML = `${item.location}`
  login.innerHTML = item.login
})


