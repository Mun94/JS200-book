function factory_movie(title) {
    return {
        get_title : function(){
            return title;
        },
        set_title : function(_title) {
            title = _title
        }
    }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost);
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');

console.log(ghost.get_title());
console.log(matrix.get_title());

///////////////////////////////////////

function create() {
    let count = 0;
    return {
        increase:function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = create();
const counter2 = create();

counter1.increase();
counter1.increase();

console.log('counter 1의 값 :' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 :' + counter2.getCount());