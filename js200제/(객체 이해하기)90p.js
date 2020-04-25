//{Key : Value}
var family = {
    'address' : 'seoul',
    members : {},
    addFamily : function(age, name, role){
        this.members[role] = {
            age : age,
            name : name,
        };
    },
    getHeadcount : function() {
        return Object.keys(this.members);
        
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.address);
console.log(family.members);
console.log(family.members.aunt.age);
console.log(family.getHeadcount());
console.log(family.getHeadcount().length);