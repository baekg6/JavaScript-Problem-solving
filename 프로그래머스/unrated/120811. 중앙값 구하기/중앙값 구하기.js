function solution(array) {
    var answer = 0;
    index = parseInt((array.length)/2)
    answer = array.sort((a,b)=>a-b)[index]
    return answer;
}