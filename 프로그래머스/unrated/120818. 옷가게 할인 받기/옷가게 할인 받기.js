function solution(price) {
    var answer = 0;
    let discount = 0
    
    if (price >= 500000) {
        discount = 20
    } else if (price >= 300000) {
        discount = 10
    } else if (price >= 100000) {
        discount = 5
    }
    
    answer = parseInt(price*(1-discount/100))
    return answer;
}