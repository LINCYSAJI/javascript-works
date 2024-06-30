

fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>displayPosts(data))

function displayPosts(posts){

    let htmlData=``

    for (let p of posts){

        htmlData+=`
        
        <div class="col-4">

        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${p.userId}</h6>
    <p class="card-text">${p.body}.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

            </div>
        `
    }

    document.querySelector("#root").innerHTML=htmlData
}