function solution(my_string) {
    let answer = my_string
                .replace(/[\D]/g,' ')
                .split(' ').map(v=>+v)
                .reduce((a,b)=>a+b);
    return answer
}