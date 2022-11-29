function solution(emergency) {
    const sortedArr = [...emergency].sort((a,b)=>b-a);
    console.log(sortedArr)
    let answer = []
    emergency.forEach(el=>{
        answer.push(sortedArr.indexOf(el)+1)
    })
    
    
    return answer;
}