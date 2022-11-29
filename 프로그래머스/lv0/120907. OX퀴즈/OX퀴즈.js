function solution(quiz) {
    return quiz.map(v => 
           eval(`${v.replace(/=/g, '===')}`)? 'O' : 'X')
}