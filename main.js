function getGitHubProfileUser(){
  const url = 'https://api.github.com/users/shiryu13'

  fetch(url)
  .then(response => response.json() )
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userGitHubLogin.textContent = data.login
  })
}