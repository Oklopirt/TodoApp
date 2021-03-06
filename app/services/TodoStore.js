/**
 *  Сервис позволяет работать со списком задач
 * @constructor
 */
function TodoStore() {
    this.storageKey = 'todolist';
}

/**
 * Получить список всех задач, активные + выполненные
 */
TodoStore.prototype.getAll = function () {
    return JSON.parse(localStorage[this.storageKey] || '[]');
};

/**
 * Добавить задачу в список
 * @param todo
 */
TodoStore.prototype.add = function (todo) {
    //TODO implement
    if (!todo.title){
        throw new Error("Заполните значение");
    }
    todo.id = this.$generateUniqueId();
    var storage = this.getAll();
    storage.push(todo);
    this.$save(storage);
};

/**
 * Удалить задачу из списка
 * @param todo
 */
TodoStore.prototype.remove = function (todo) {
    //TODO implement
    if (!todo.id){
        throw new Error("Нет ID!");
    }
    var storage = this.getAll();


    for (var i = 0; i < storage.length; i++){
        if (storage[i].id === todo.id) {
            storage.splice(i, 1);
            this.$save(storage);
            return;
        }
    }


};

/**
 * Завершить выполнение
 * @param todo
 */
TodoStore.prototype.changeState = function (todo, state) {
    //TODO implement
    var storage = this.getAll();
    //var todoItemIndex = storage.indexOf(todo);
    //
    //if (todoItem >= 0){
    //    var todoItem = storage[todoItemIndex];
    //    todoItem.complete = state;
    //    this.$save(storage);
    //}

    for (var i = 0; i < storage.length; i++){
        if (storage[i].id === todo.id)
            storage[i].state = state;
     }

    this.$save(storage);
};

/**
 * Очищает список задач
 */
TodoStore.prototype.clear = function () {
    this.$save([]);
};

TodoStore.prototype.$save = function (todos) {
    localStorage[this.storageKey] = JSON.stringify(todos);
};

TodoStore.prototype.$generateUniqueId = function () {
    // always start with a letter (for DOM friendlyness)
    var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 32);
    return (idstr);
};
