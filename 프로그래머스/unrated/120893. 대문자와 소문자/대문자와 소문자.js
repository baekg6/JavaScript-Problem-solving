function solution(my_string) {
    var answer = '';
    
    for (data of [...my_string]){
        if (data == data.toUpperCase()){ // 대문자
            answer += data.toLowerCase()
        } else { // 소문자
            answer += data.toUpperCase()
        }
    }
    return answer;
}