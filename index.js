function minMax(arr){
    let res = arr.sort((a,b) => a - b)

    return ([res[0], res[res.length-1]])
}