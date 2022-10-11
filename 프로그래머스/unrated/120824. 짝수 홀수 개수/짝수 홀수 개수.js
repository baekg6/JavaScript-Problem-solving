function solution(num_list) {
    var answer = [];
    let even = num_list.filter(i=>i%2===0).length
    answer.push(even,num_list.length-even)
    return answer;
}