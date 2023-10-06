const checkDogs = function(dogsJulia, dogsKate){
        const dogsJuliaCorrected = dogsJulia.slice();
        dogsJuliaCorrected.slice(0,1);
        dogsJuliaCorrected.slice(-2);
        // dogsJulia.slice(1,3);
        const dogs = dogsJuliaCorrected.concat(dogsKate);
        console.log(dogs);

        dogs.forEach( function(dog,i){
            if(dog>=3){
                console.log("dog number ${i+1} is an abult ,and is ${dog} years old");
            }else{
                console.log('dog number ${i+1} is still a puppy dog');
            }
        });

}
checkDogs([3,5,2,12,7],[4,1,15,8,3])