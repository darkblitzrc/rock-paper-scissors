function computerPlay(){
    let decider = Math.floor(Math.random() * 3);
    let rock = 0
    let scissors = 1
    let paper = 2
    if (decider == 0){
        return 'Rock'
    } else if (decider == 1){
        return 'Scissors'
    } else {
        return 'Paper'
    }
}