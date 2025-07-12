 const person = {
     
     name: 'nitesh',

     greet(){
          console.log(  `hello,   i am  + ${this.name}` );
     }

 }

 person.greet();

 // if we call now greet function is okey but if we transfer this data to another function that is written below that shows undefined beacause of missing context of upper function

 const anothePerson =  person.greet
 anothePerson();
 // here it shows undefined because of missing context of upper function

// now we need to bind this all stuff 
 const baoundGreet = person.greet.bind({ name: 'hitesh'})
  baoundGreet();

  // bind , call, apply reasearch about these methods 