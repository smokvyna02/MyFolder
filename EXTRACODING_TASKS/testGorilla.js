function find_total(my_numbers){
    let score = 0;
    for (let i = 0; i < my_numbers.lenghth; i++){
        if (my_numbers[i] % 2 == 0){
            score +=1}
        if (my_numbers[i] % 2 !== 0 && my_numabers !== 5){
            score += 3}
        if (my_numbers[i] == 5){
            score += 5}        
    }
    return score;
}