// problem
// pascal triangle

// solution
var generate = function(numRows) {
    let ans = []
    for(let i=0; i<numRows; i++){
        let rowAns=[]
        if(i===0) rowAns.push(1)
        else {
            rowAns.unshift(1)
            if(i>1){
                const prevRow=ans[i-1]
                for(let j=0; j<prevRow.length; j++){
                    if(rowAns.length <= i){
                        if(prevRow[j+1]){
                            rowAns[j+1] = prevRow[j]+prevRow[j+1]
                        }
                    }
                }
            }
            rowAns.push(1)
        }
        ans.push(rowAns)
    }
    return ans
};
// or
var generate = function(numRows) {
    let res = [[1]]
    let ans = [];
    for(let i=0; i<numRows; i++){
        res[i].push(0)
        res[i].unshift(0)
        const temp = res[i]
        const row = []
        for(let j=0; j<res.length; j++){
            row.push(temp[j]+temp[j+1])
        }
        res.push(row)
        ans.push(res[res.length-1])
    }
    return ans.map(a => a.filter(n => n !== 0))
};
