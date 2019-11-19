/*
// equalent to print in python
console.log("Hello World from main")
console.warn("This is a warning") // to print a warning
console.error("This is an error") // to print an error
// alert("hello") // this is not used

var name = 'jithin'
console.log("My name is ",name)

const name1 = 'ashwin'
console.log(name1,"sit besides me")

let name2 = 'sanju'
console.log(name2, " is present today")

name = 'jithin j kumar'
console.log("My name is ", name)

name2 = 'ashwin2'


//Datatypes
const name='jithin'
console.log("type of variable name is :",typeof(name))

const num = 20
console.log("type of variable num is :", typeof (num))

const decimal = 20.5
console.log("type of variable decimal is :", typeof (decimal))

const isPresent = true
console.log("type of variable isPresent is :", typeof (isPresent))

const zero = null
console.log("type of variable zero is :", typeof (zero))

const none = undefined
console.log("type of variable none is :", typeof (none))

//important
let z=10
console.log("type of z is ",typeof(z))


//String Concatenation
name = 'jithin'
job = 'trainer'
console.log("My name is",name,"and i'm a",job)
console.log(`My name is ${name} and i'm a ${job}`)

// String concatenation
const s = "Hello World"
console.log(`Length of string s is ${s.length}`)
console.log(`when string ${s} is converted to lowercase, it becomes ${s.toLowerCase()}`)

console.log(`when string ${s} is converted to uppercase, it becomes ${s.toUpperCase()}`)

console.log(s.substring(2,5))

console.log(s.split(' '))


// Javscript arrays
const numbers = [1,2,3,4,5]
console.log("numbers is an ",Array.isArray(numbers))

const fruits = ['jackfruit','apple','oranges']
console.log("fruits is an "+Array.isArray(fruits))

fruits[3]='banana'
console.log(fruits)

console.log(fruits.length)
console.log(fruits.pop())
console.log(fruits.push('blueberries'))
console.log(fruits)
console.log(fruits.unshift('mangoes'))
console.log(fruits)
console.log(fruits.indexOf('apple'))



// Objects
let x = null
console.log(typeof(x))

const person = {
    firstname : 'jithin',
    secondname : 'j kumar',
    job :'trainer',
    address:{
        district :'Kochi',
        state :'kerala'
    },
    languages:['python','javscript']
}
console.log('Person is of datatype',typeof(person))
console.log(person.firstname)
console.log(person.secondname)
console.log(person.address)
console.log(person.languages)

person.industry = 'education'
console.log(person.industry)
console.log(person)
console.log(person.address.state)
person.languages.push('c++')

*/
const todos = [
    {
        id:1,
        text:'teach js',
        isComplete: false
    },
    {
        id:2,
        text:'have tea',
        isComplete:true
    },
    {
        id:3,
        text:'complete assignment',
        isComplete:false
    }
]

todos.push({
    id:4,
    text: 'visit Mt Everest',
    isComplete:false
})

/*
todos[2].isComplete=true
console.log(todos)
console.log(JSON.stringify(todos))
*/


//Loops
console.log("***For Loop***")
for(let i=0;i<4;i++){
    console.log(todos[i])
}
console.log("*********")
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text)
}

console.log("***While***")
let i = 0
while(i<todos.length){
    console.log(todos[i].text);
    i++;
}

console.log("***Do While****")
let j=0
do{
    console.log(todos[j].text);
    j++
}while(j<todos.length)

console.log('***For Of***')
for(let todoitem of todos){
    console.log(todoitem.text)
}







