


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form#create-task-form')

  form.addEventListener('submit', function (ev) {
    ev.preventDefault() 
  
    let taskDescription = form.querySelector('input#new-task-description').value
    let taskName = form.querySelector('input#new-task-name').value
    let tasks = document.querySelector('ul#tasks')
    let li = document.createElement('li')
    let h4 = document.createElement('h4')

    h4.innerText = taskName
    li.innerText = taskDescription

    tasks.append(h4)
    h4.append(li)
    // ev.target.children[1].reset
    debugger
  })

});
