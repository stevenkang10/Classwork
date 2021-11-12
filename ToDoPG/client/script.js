// // NOTE: Original trial class code
// $("input").keypress(function (event) {
//   if (event.which === 13 && $(this).val() !== "") {
//     var todoItem = $(this).val();
//     $("ul").append(
//       `<li>${todoItem}<span><i class='far fa-trash-alt'></i></span></li>`
//     );
//     $("input").val("");
//   }
// });

// $("ul").on("click", "li", function() {
//   $(this).toggleClass("completed");
// });

// $("ul").on("click", "span", function(event) {
//   $(this).parent().remove();
// });

const baseUrl = "http://localhost:3000";

// READ
$(document).ready(function () {
  let endpoint = `${baseUrl}/todos`;
  fetch(endpoint)
    .then(function (response) {
			if(!response.ok ){
				throw Error("No response")
			} else {
				return response.json();
			}
    })
    .then(function (dataArray) {
      $("ul").empty();
      dataArray.forEach(function (todo) {
        let completed = todo.isComplete ? "completed" : "";
        $("ul").append(
          `<li data-id=${todo._id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
        );
      });
    })
    .catch(function (error) {
      console.error("Issues READING the data.", error);
    });
});

// CREATE
$("input").keypress(function (event) {
  if (event.which === 13 && $(this).val()) {
    let newTodoItem = {
      description: $(this).val(),
    };
    let endpoint = `${baseUrl}/todos`;
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(newTodoItem), // converts out object into JSON
      headers: {
        "Content-Type": "application/json" // required for the backend
      }
    })
      .then(function (response) {
        if(!response.ok ){
					throw Error("No response")
				} else {
					return response.json();
				}
      })
      .then(function (newTodo) {
        $("ul").append(
          `<li data-id=${newTodo._id}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
        );
        $("input").val("");
      })
      .catch(function (error) {
        console.error("Issues with CREATING data on backend");
      });
  }
});

// DELETE
$("ul").on("click", "span", function (event) {
  event.stopPropagation(); // TODO: what is stopPropagation?
	// handles route based on id of the parent element since user clicks on span element (no id)
  let thisId = $(this).parent().data("id");
  let endpoint = `${baseUrl}/todos/${thisId}`;
  console.log("This outside", this);
  let self = this; 	// this refers to span and is global inside the function
										// You need access to it later in another function so you can
										// set 'self' var to 'this' so you have access throughout the handler

  fetch(endpoint, { method: "DELETE" })
    .then(function (response) {
      if(!response.ok ){
				throw Error("No response")
			} else {
				return response.json();
			}
    })
    .then(function (data) {
      console.log("This inside: ", self);
      $(self).parent().remove(); // removes the li element of the span clicked in browser
    })
    .catch(function (error) {
      console.error("Issue with deleting from backend");
    });
});

// UPDATE
$("ul").on("click", "li", function () {
  let thisId = $(this).data("id");
  let endpoint = `${baseUrl}/todos/${thisId}`;
  let self = this;
  fetch(endpoint, { method: "PUT" })
    .then(function (response) {
      if(!response.ok ){
				throw Error("No response")
			} else {
				return response.json();
			}
    })
    .then(function (data) {
      $(self).toggleClass("completed");
    })
    .catch(function (error) {
      console.error("Error updating data from back end");
    });
});

// NOTE: this is not needed for the app, but is used to show
// bubbling in action if stopPropagation() is not used in DELETE method
$('body').on('click',()=>{
	console.log('I am the body')
})

$('div').on('click',()=>{
	console.log('I am the div')
})