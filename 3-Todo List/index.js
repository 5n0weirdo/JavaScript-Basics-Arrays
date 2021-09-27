 var todos = ["Work on a project"];

var input = prompt("What would you like to do?");
 window.setTimeout(function() {
    while (input !== "quit") {
     // handle input
     if (input === "list") {
       todos.forEach(function(todo, index) {
         console.log("****************");
         console.log(index + " " + ":" + " " + todo);
       });  console.log("****************");

     } else if (input === "new") {
       // ask for new todo
       var newTodo = prompt("Enter a new Todo:");
       // add to todos array
       todos.push(newTodo);
       console.log("Todo Added");

     } else if (input === "delete") {
       // ask for index of todo to be deleted
       var indexDelete = prompt("Index of todo to delete: ");

       // delete the todo
       // splice()
       todos.splice(indexDelete, 1)
       console.log("Deleted Todo");
     }
     //  ask again for new input
     input = prompt("What would you like to do?");
   }
   // quit the app:
   console.log("You quit the app.");
 }, 500);
