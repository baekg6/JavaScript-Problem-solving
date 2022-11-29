function solution(my_string) {
    var answer = [];

    answer = Array.from(my_string).filter(e => e%1==0).map(e => +e)
    answer = answer.reduce((a,b) => a+b,0)
    return answer;
}