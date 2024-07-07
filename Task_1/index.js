

document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = document.getElementById('todo-input').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    document.getElementById('todo-input').value = '';
});
