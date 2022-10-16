//------------------------RESPONSIVE REPS AND WEIGHT------------------------
const addSet = document.querySelector('.add_set')
const formsTag = document.querySelector('.new_exercise')
const finishExerciseInput = document.querySelector('.finish_exercise')

let setCount = 1

const addRepsWeight = () => {

    setCount += 1


    const addReps = document.createElement('input')
    addReps.className = 'add_reps'
    Object.assign(addReps, {
        name: 'reps',
        type: 'Number',
        placeholder: `Set ${setCount}: reps`
    })

    const addWeight = document.createElement('input')
    addWeight.className = 'add_weight'
    Object.assign(addWeight, {
        name: 'weight',
        type: 'Number',
        placeholder: `Set ${setCount}: weight`
    })
    
    formsTag.insertBefore(addWeight, finishExerciseInput)    

    formsTag.insertBefore(addReps, addWeight)    

}
addSet.addEventListener('click', addRepsWeight)

