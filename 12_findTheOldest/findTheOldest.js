function personAge(birth,death){
    if(death===undefined)
    {
        death= new Date().getFullYear()
    }
   return death-birth;
}
const findTheOldest = function(people) {
    return people.reduce((old, person) => {
        const oldest=personAge(old.yearOfBirth,old.yearOfDeath);
        const current=personAge(person.yearOfBirth,person.yearOfDeath);
        if (oldest>current)
        {
            return old;
        }
        else
            return person;

    });
        
};

// Do not edit below this line
module.exports = findTheOldest;
