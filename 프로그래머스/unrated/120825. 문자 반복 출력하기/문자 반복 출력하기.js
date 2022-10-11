function solution(my_string, n) {
    var answer = [...my_string].map(i=>i.repeat(n)).join('');
    return answer;
}