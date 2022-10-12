function solution(order) {
    var answer = 0;
    answer = [...String(order)].filter(x => x==3 || x==6 || x==9).length
    return answer;
}