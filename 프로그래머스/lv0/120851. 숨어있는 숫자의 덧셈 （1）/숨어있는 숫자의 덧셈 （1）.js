function solution(my_string) {;
    return my_string.match(/\d/g).map(v=>+v).reduce((a,b)=>a+b);
}