function solution(my_string) {
    var answer = my_string.replace(/[\D]/g,' ').split(' ').map(v=>+v).reduce((a,b)=>a+b);
    
    console.log(answer)

    return answer;
}