function solution(array) {
    var answer = 0;
    let data = array.join('')
    answer = [...data].filter(x=>x==7).length
    return answer;
}