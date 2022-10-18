(function () {

  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let btnContainer = document.createElement('div');
    let btn = document.createElement('button');

    btn.disabled = true;
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control', 'input');
    input.placeholder = 'Please,write new case';
    btnContainer.classList.add('input-group-append');
    btn.classList.add('btn', 'btn-primary', 'button');
    btn.textContent = 'Add case';

    form.append(input);
    form.append(btnContainer);
    btnContainer.append(btn);

    return {
      form,
      input,
      btn,
    }
  }

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(name) {
    let item = document.createElement('li');
    let btnGroup = document.createElement('div');
    let doneBtn = document.createElement('button');
    let delBtn = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    btnGroup.classList.add('btn-group', 'btn-group-sm');
    doneBtn.classList.add('btn', 'btn-succes', 'btn-done');
    doneBtn.textContent = 'Done';
    delBtn.classList.add('btn', 'btn-danger', 'btn-del');
    delBtn.textContent = 'Delete';
    item.id = 'item' + Math.round(Math.random() * 1000);

    btnGroup.append(doneBtn);
    btnGroup.append(delBtn);
    item.append(btnGroup);

    return {
      item,
      doneBtn,
      delBtn,
    }
  }

  function createTodoApp(container, title = 'Case list', arr) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    let localArray = [];
    localArray = JSON.parse(localStorage.getItem(title));

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    if (arr !== null) {
      for (let i of arr) {
        let preItem = createTodoItem(i.name);
        todoList.append(preItem.item);
        preItem.item.id = i.id;
        if (i.done) {
          preItem.item.classList.add('list-group-item-success');
        };
        preItem.doneBtn.addEventListener('click', function () {
          preItem.item.classList.toggle('list-group-item-success');
          let newArr = localArray.map(e => {
            if (e.id === preItem.item.id && e.done === false) {
              e.done = true;
            }else if (e.id === preItem.item.id && e.done === true) {
                e.done = false;
            };
            return e; 
            })
            localStorage.setItem(title, JSON.stringify(newArr));
        });
        preItem.delBtn.addEventListener('click', function () {
          if(confirm('Are you sure?')) {
            preItem.item.remove();
            localArray = JSON.parse(localStorage.getItem(title));
            newArr = localArray.filter(i => i.id !== preItem.item.id);
            localStorage.setItem(title, JSON.stringify(newArr));
          }
        })
      }
    };

    document.querySelector('.input').oninput = function btnDisabled() {
      if (document.querySelector('.input').value) {
        document.querySelector('.button').disabled = false;
      }
      else {
        document.querySelector('.button').disabled = true;
      }
    };

    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      let nameItem = todoItemForm.input.value;
      if (!todoItemForm.input.value) {
        return;
      };
      let todoItem = createTodoItem(todoItemForm.input.value);
  
      todoItem.doneBtn.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
        localArray = JSON.parse(localStorage.getItem(title));
        let newArr = localArray.map(e => {
          if (e.id === todoItem.item.id && e.done === false) {
            e.done = true;
          }else if (e.id === todoItem.item.id && e.done === true) {
              e.done = false;
          };
          return e; 
          })
          localStorage.setItem(title, JSON.stringify(newArr));
      });
      todoItem.delBtn.addEventListener('click', function () {
        if(confirm('Are you sure?')) {
          todoItem.item.remove();
          localArray = JSON.parse(localStorage.getItem(title));
          newArr = localArray.filter(i => i.id !== todoItem.item.id);
          localStorage.setItem(title, JSON.stringify(newArr));
        }
      });

      todoList.append(todoItem.item);
      localArray.push({name: nameItem, done: false, id: todoItem.item.id});
      localStorage.setItem(title, JSON.stringify(localArray));
      todoItemForm.input.value = '';
      todoItemForm.btn.disabled = true;
    });
  };

  window.createTodoApp = createTodoApp;
})();