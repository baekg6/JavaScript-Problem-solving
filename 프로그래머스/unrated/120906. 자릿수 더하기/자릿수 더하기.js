function solution(n) {
    var answer = 0;
    let numbers =  [...n.toString()].map(i=>parseInt(i));
    answer = numbers.reduce((a,b)=>a+b,0);
    return answer;
}