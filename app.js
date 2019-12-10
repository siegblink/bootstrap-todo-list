const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

function generateTemplate(todo) {
  const html = `
    <li
      class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `
  list.insertAdjacentHTML('beforeend', html)
}

// Submit todo
addForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const todo = addForm.add.value.trim()
  todo.length && generateTemplate(todo)
  addForm.reset()
})

// Delete todo using "Event delegation"
list.addEventListener('click', function(event) {
  event.target.classList.contains('delete') &&
    event.target.parentElement.remove()
})

function filterTodo(term) {
  const listItemCollection = Array.from(list.children)
  listItemCollection
    .filter(function(listItem) {
      return !listItem.innerText.toLowerCase().includes(term)
    })
    .forEach(function(todo) {
      todo.classList.add('filtered')
    })

  listItemCollection
    .filter(function(listItem) {
      return listItem.innerText.toLowerCase().includes(term)
    })
    .forEach(function(todo) {
      todo.classList.remove('filtered')
    })
}

// Search todo
search.addEventListener('keyup', function(event) {
  event.preventDefault()
  const term = search.value.trim().toLowerCase()
  filterTodo(term)
})
