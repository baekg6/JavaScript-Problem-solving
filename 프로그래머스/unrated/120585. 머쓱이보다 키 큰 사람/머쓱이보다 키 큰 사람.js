function solution(array, height) {
    var answer = array.filter(i=>i>height).length;
    return answer;
}