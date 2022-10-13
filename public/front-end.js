//------------------------RESPONSIVE REPS AND WEIGHT------------------------
const addSet = document.querySelector('.add-set')
const formsTag = document.querySelector('.new-exercise')
const finishExerciseInput = document.querySelector('.finish-exercise')

const addRepsWeight = () => {
    const addReps = document.createElement('input')
    addReps.className = 'add-reps'
    Object.assign(addReps, {
        name: 'reps',
        type: 'Number',
        placeholder: 'reps'
    })

    const addWeight = document.createElement('input')
    addWeight.className = 'add-weight'
    Object.assign(addWeight, {
        name: 'weight',
        type: 'Number',
        placeholder: 'weight'
    })
    
    formsTag.insertBefore(addWeight, finishExerciseInput)    

    formsTag.insertBefore(addReps, addWeight)    

}


addSet.addEventListener('click', addRepsWeight)
