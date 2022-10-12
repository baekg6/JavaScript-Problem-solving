function solution(s1, s2) {
    var answer = 0;
    for (data of s1){
        if (s2.includes(data)){
            answer += 1
        }
    }
    return answer;
}