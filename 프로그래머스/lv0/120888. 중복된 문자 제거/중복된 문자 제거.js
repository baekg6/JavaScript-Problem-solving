function solution(my_string) {
    var answer = '';
    let dupCheck = []
    
    for (const i of my_string){
        if (dupCheck.indexOf(i)===-1){
            answer+=i
            dupCheck.push(i)
        }
    }
    return answer;
}