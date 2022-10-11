function solution(money) {
    var answer = []
    answer.push(parseInt(money / 5500), money % 5500);
    return answer;
}