Object.create = Object.create || function(obj){
    function F() {};
    F.prototype = obj;
    return new F();
};