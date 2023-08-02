function foo (){
    console.log('foo');
    bar();
    return foo;
}
function bar (){
    console.log('bar');
    return bar;
}

foo();
bar();