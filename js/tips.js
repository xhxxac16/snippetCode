// 1.把字符串强制转换成数字类型
var foo = 1;
var bar = '2';

console.log(foo + Number(bar));
console.log(foo + +bar);


// 2.被判定为true的值
'0'; //字符串0
'any string'; //任意字符串
[]; //一个空数组
{}; //一个空对象
1; //不为0的数


// 3.被判定为false的值
0;
''; //一个空串
NaN; //javascript中的“not a number”（NaN是一个不确定的数）
null;
undefined; //注意--undefined可以被重新定义


// 4.switch替代方式
switch (foo) {

    case 'bar':
        alert('the value was bar -- yay!');
    break;

    case 'baz':
        alert('boo baz :(');
    break;

    default:
        alert('everything else is just ok');
    break;

}

var stuffToDo = {
    'bar' : function() {
        alert('the value was bar -- yay!');
    },

    'baz' : function() {
        alert('boo baz :(');
    },

    'default' : function() {
        alert('everything else is just ok');
    }
};


if (stuffToDo[foo]) {
    stuffToDo[foo]();
} else {
    stuffToDo['baz']();
}