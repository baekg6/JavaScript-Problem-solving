function solution(my_string) {
    var answer = [];
    
    let data = [...my_string]
    
    answer = data.filter(v => v%1==0).map(v => parseInt(v))
    answer.sort((a,b) => a-b)
    return answer;
}