function solution(my_string, num1, num2) {
    var answer = '';
    let data = [...my_string]
    
    let tmp = data[num1];
    data[num1] = data[num2];
    data[num2] = tmp
    
    answer = data.join('')
    return answer;
}