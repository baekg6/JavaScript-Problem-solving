function solution(emergency) {
    const sortedArr = [...emergency].sort((a,b)=>b-a);
    let answer = []
    emergency.forEach(el=>{
        answer.push(sortedArr.indexOf(el)+1)
    })
    
    
    return answer;
}