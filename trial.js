const reps = [ '1', '2', '3' ]
const weight =  [ '1', '2', '3' ]

let sets = []


for (let i = 0; i < reps.length; i++) {
    let obj = {}
    obj.reps = reps[i]
    obj.weight = weight[i]
    sets.push(obj)
}
console.log(sets)



// sets: [
//     { reps: 1, weight: 1 },
//     { reps: 2, weight: 2 },
//     { reps: 3, weight: 3 },
//   ]