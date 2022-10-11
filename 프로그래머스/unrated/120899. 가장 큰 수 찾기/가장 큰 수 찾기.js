function solution(array) {
    var answer = [];
    
    let max = array[0]
    let index = array[0]
    for(let i = 0 ; i < array.length ; i++){
        if (array[i] > max) {
            max = array[i]
            index = i
        }    
    }
    
    answer = [max, index]
    
    return answer;
}