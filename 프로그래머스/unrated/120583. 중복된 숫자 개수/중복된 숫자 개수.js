function solution(array, n) {
    var answer = array.filter(i=>i===n).length;
    return answer;
}