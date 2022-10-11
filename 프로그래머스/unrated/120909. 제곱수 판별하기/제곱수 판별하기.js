function solution(n) {
    var answer = 0;
    if(Number.isInteger(n**(0.5))){
        answer=1
    } else{
        answer=2
    }
    return answer;
}