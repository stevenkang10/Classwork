/* Load the todos from the back-end */
const backendUrl = 'http://localhost:3000/todos'
// CRUD
// READ
$(document).ready(function(){
  fetch(backendUrl)
  .then(response => response.json())
  .then(data => {
    $('ul').empty();
    data.map(function(todo){
      $('ul').append(`
      <li data-id=${todo.id}
      class="${todo.isComplete ? 'completed' : ''}">
      ${todo.description}
      <span><i class="fas fa-trash-alt"></i></span>
      </li>
      `)
    })
  })
  .catch(err => {
    console.log(err)
  })
})
/* Updating list item complete */
$("ul").on("click", "li", function(){
  // 1. get the id
  let thisId = $(this).data('id') // pulls out id 2345 from data-id="2345"
  // 2. form the backend url
  let url = `${backendUrl}/${thisId}`
     // 3. inform the backend
  $.ajax({
    url: url,
    method: 'PUT'
  })
  .done(()=> {
      // 4. if success then inform the front-end
    $(this).toggleClass('completed')
  })
  .fail((err)=> {
    console.log ('Something went wrong')
  })
})

/* Deleting an list item*/
$("ul").on("click", "span", function(event){
  event.stopPropagation();
  let thisId = $(this).parent().data('id');
  let url = `${backendUrl}/${thisId}`

 $.ajax({
  url: url, 
  method: 'DELETE'
 })
 .done(() => {
   //informing the front-end
   $(this).parent().remove();
 })
 .fail((err) => {
   console.error('Something went wrong, please inform Elisa or Rebecca!')
 })
}); 

/* Adding A Todo item */
$("input").keypress(function(event){
  if(event.which === 13){
    let newTodoItem = {
      description: $(this).val()
    }
    fetch(backendUrl,
      {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodoItem)
    })
    .then(response => response.json())
    .then(todoItem => {
      $("ul").append(
        `<li data-id=${todoItem.id} >${todoItem.description}<span><i class="fas fa-trash-alt"></i></span></li>`
      )
      $(this).val("")
    })
    .catch(err => {
      console.log('Error posting to server', err)
    })  
  }
})



/* my follow along in class code  doesnt all a new todo to be added */
// /* load the todos from the back-end*/
// const backendURL = 'http://localhost:3000/todos'
// //CRUD
// //READ
// $(document).ready(function(){
//     fetch(backendUrl)
//   .then(response => response.json())
//   .then(data => {
//     $('ul').empty();
//     data.map(function(todo){
//       $('ul').append(`<li data-id=${todo.id} >${todo.description}
//       <span><i class="fas fa-trash-alt"></i></span>
//       </li>`)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     })
// })
// // updating list item complete
// $("ul").on("click", "li", function(){
//     $(this).toggleClass('completed')
// })
// //deleting a list item
// $("ul").on("click", "span", function(event){
//     let endpoint = `${backendURL}/${thisId}`
//     fetch()
//     .then()
//     .then()
//     .catch()
//     $(this).parent().remove()
// });
//     // adding A Todo item
// $("input").keypress(function(event){
//     if(event.which === 13){
//         let newTodoItem = {
//             description: $(this).val()
//         }
//         fetch(backendUrl,
//             {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(newTodoItem)
//         })
//         .then(response => response.json())
//         .then(todoItem => {
//             $("ul").append(
//                 `<li data-id=${todoItem.id} >${todoItem.description}<span><i class="fas fa-trash-alt"></i></span></li>`
//                  )
//                 $(this).val("")
//             })
//             .catch(err=> {
//                 console.log('Error posting to server', err)
//         })
//     }
// })