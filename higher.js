// 高階関数
function arrayWalk(data,f) {
    for(var key in data){
        f(data[key],key);
    }
}

// 配列を処理するためのユーザー定義関数
// コールバック関数
function showElement(value, key){
    console.log(key + ' : ' + value);
}

// コールバック関数
function showDecoratedElement(value, key) {
    // console.log ('キー(' + key +') :値(' + value + ')');
    console.log (`キー (${key}): 値(${value})`);
}

var ary = [1, 2, 4, 8, 16];
 arrayWalk(ary, showDecoratedElement);