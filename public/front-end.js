//------------------------RESPONSIVE REPS AND WEIGHT------------------------
const addSet = document.querySelector('.add-set')
const formsTag = document.querySelector('.new-exercise')
const finishExerciseInput = document.querySelector('.finish-exercise')

const addRepsWeight = () => {
    const addWeight = document.createElement('input')
    addWeight.className = 'add-weight'
    Object.assign(addWeight, {
        name: 'weight',
        id: 'weight',
        type: 'Number'
    })
    
    formsTag.insertBefore(addWeight, finishExerciseInput)    

}


addSet.addEventListener('click', addRepsWeight)
