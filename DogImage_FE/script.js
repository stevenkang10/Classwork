let image = document.getElementById('pic')
image.setAttribute('src', `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`)

let btn = document.getElementById('btn')

const baseUrl = 'https://dog.ceo/api'


btn.addEventListener('click', () =>{
    let route = "breeds/image/random";
    let endpoint = `${baseUrl}/${route}`
    // make our API call
    fetch(endpoint)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        throw Error('Something happend with network')
    })
    .then(data => {
        image.setAttribute('src', data.message)
    })
    .catch(error => {
        console.error(error)
        render(errorPage, document.querySelector('body'))
    })
})

const render = (template, node) => {
    node.innerHTML = template 
}

const errorPage = `
        <div id="error_page">
            <h1> Something isn't right</h1>
        </div>
    `