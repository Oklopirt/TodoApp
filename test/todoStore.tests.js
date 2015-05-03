describe('TodoStore', function(){
    var store = new TodoStore();

    beforeEach(function(){
        store.clear();
    });

    it('should return empty array', function(){
        expect(store.getAll()).toEqual([]);
    });

    it('should return one todo', function(){
        var todo1 = {};
        todo1.id = "123";
        todo1.title = "asdasd";
        todo1.state = true;
        store.add(todo1);
        expect(store.getAll()).toEqual(
            [todo1]
        );
    });

    it('should return three todo', function(){
        var todo1 = {};
        todo1.id = "234";
        todo1.title = "asdasd";
        todo1.state = true;
        store.add(todo1);

        var todo2 = {};
        todo2.id = "54";
        todo2.title = "asdasd";
        todo2.state = true;
        store.add(todo2);

        var todo3 = {};
        todo3.id = "7786";
        todo3.title = "asdasd";
        todo3.state = true;
        store.add(todo3);
        expect(store.getAll()).toEqual(
            [todo1, todo2, todo3]
        );



    });
    it('should return with remove', function(){
        var todo1 = {};
        todo1.id = "234";
        todo1.title = "asdasd";
        todo1.state = true;
        store.add(todo1);

        var todo2 = {};
        todo2.id = "54";
        todo2.title = "asdasd";
        todo2.state = true;
        store.add(todo2);

        var todo3 = {};
        todo3.id = "7786";
        todo3.title = "asdasd";
        todo3.state = true;
        store.add(todo3);

        store.remove(todo1);
        expect(store.getAll()).toEqual(
            [todo2, todo3]
        );
    });

    it('should return with remove', function(){
        var todo1 = {};
        todo1.id = "234";
        todo1.title = "asdasd";
        todo1.state = true;
        store.add(todo1);

        var todo2 = {};
        todo2.id = "54";
        todo2.title = "asdasd";
        todo2.state = true;
        store.add(todo2);

        var todo3 = {};
        todo3.id = "7786";
        todo3.title = "asdasd";
        todo3.state = true;
        store.add(todo3);

        store.changeState(todo1, false);

        todo1.state = false
        expect(store.getAll()).toEqual(
            [todo1, todo2, todo3]
        );
    });
});