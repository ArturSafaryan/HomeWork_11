import fetch from 'node-fetch';

function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 1000);
  });
}

function handlePromise() {
  console.log('Loading...');

  fetchTodos()
    .then(todos => {
      const completedTodos = todos.filter(todo => todo.completed);
      console.log('Completed Todos:', completedTodos);
    })
    .catch(error => console.error('Error: my error', error));
}

handlePromise();

