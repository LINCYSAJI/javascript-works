

// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>displayUsers(data))

getData()
async function getData(){

  let response=await fetch("https://jsonplaceholder.typicode.com/users")

  let data= await response.json()

  displayUsers(data)
}


function displayUsers(users){

    let htmlData=``

    for (let u of users){

        htmlData+=`
        
        <div class="col-4">

        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${u.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${u.username}</h6>
    <p class="card-text">${u.email}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

            </div>
        `

    }

    document.querySelector("#root").innerHTML=htmlData
}
