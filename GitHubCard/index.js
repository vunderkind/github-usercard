function userGrabber(username){
  axios.get(`https://api.github.com/users/afrocentriccynic`)
  .then( (response) => {
    const followerCard = domCreate(response)
    entryPoint.appendChild(followerCard)
  })
.catch(err=>console.log(err))
}
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const entryPoint = document.querySelector('.cards')

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['vunderkind'];

followersArray.forEach( (element) => {
  userGrabber(element);
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a 
          component that will return the following DOM element:

*/
function domCreate(object){
  const mainDiv = document.createElement('div')
  mainDiv.classList.add('card')

  const image = document.createElement('img')
  image.src = object.data.avatar_url

  const cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')

  const h3Name = document.createElement('h3')
  h3Name.classList.add('name')
  h3Name.textContent = object.data.name

  const usernameDiv = document.createElement('p')
  usernameDiv.classList.add('username')
  usernameDiv.textContent = `Username: ${object.data.login}`

  const locationDiv = document.createElement('p')
  locationDiv.textContent = object.data.location

  const profileDiv = document.createElement('p')
  profileDiv.textContent = 'Profile:'

  const profileLInk = document.createElement('a')
  profileLInk.href = object.data.url
  profileLInk.textContent = object.data.url

  const followers = document.createElement('p')
  followers.textContent = `Followed by ${object.data.followers} people`

  const following = document.createElement('p')
  following.textContent = `Following ${object.data.following} ${object.data.following>1? 'fellas':'fella'}`

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${object.data.bio? object.data.bio:'Nothing to see here'}`

  mainDiv.appendChild(image)
  mainDiv.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(h3Name)
  cardInfoDiv.appendChild(usernameDiv)
  cardInfoDiv.appendChild(locationDiv)
  cardInfoDiv.appendChild(profileDiv)
  profileDiv.appendChild(profileLInk)
  cardInfoDiv.appendChild(followers)
  cardInfoDiv.appendChild(following)
  cardInfoDiv.appendChild(bio)

  return mainDiv
}

/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/