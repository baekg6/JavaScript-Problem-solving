function solution(n) {
    var answer = 0;
    for (let i = 0 ; i < n**0.5 ; i++){
        if (n%i == 0){
            answer += 1;
        }
    }
    answer*=2;
    
    if ((n**0.5) %1 ==0){
        answer += 1
    }
    
    return answer;
}