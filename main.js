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

const person = {
    firstname: 'jithin',
    secondname: 'j kumar',
    job: 'trainer',
    address: {
        district: 'Kochi',
        state: 'kerala'
    },
    languages: ['python', 'javscript']
}

console.log('***For in***')
for (let obj in person){
    console.log(`${ person[obj]}`)
}
 */

//functions
function add(x=1, y=10){
    return x+y
}

// console.log(add(10,20))

//Higher Order Function
// console.error('***Higher Order functions***')
// console.warn('***ForEach***')
// todos.forEach(function(todo){
//     console.log(add(10, todo.text.length))
// })


// error output
// todos.forEach(function(todo){
//     add(10, todo.text.length)
// }) 


/*
function square(x){
    return x*x
}

let num_array = [10,20,30]
console.log(num_array)

//map
const num_squares = num_array.map(square)
console.log(num_squares)

//foreach
const num_squares1 = num_array.forEach(square)
console.log(num_squares1)

//filter
const completed_todos = todos.filter(function(todo){
    return todo.isComplete == true
})
console.log(completed_todos)



// CONDITIONALS
let x =20
let y =20
let z ='20'
if(x < y){
    console.log(`${x} is less than ${y}`)
} else if(x === y ) {
    console.log(`${x} is equal to ${y}`)

} else {
    console.log(`${x} is greater than ${y}`)
}


//switch


switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue')
        break 
    default:
        console.log('no color set') 
        break    
}


//Ternary operator
let color = 'blue'
const z = color == 'red' ? 10:20
console.log(z)


//Arrow Functions
name ='jithin'
function greet(name){
    return `Hello ${name}`
}
console.log("Normal Function :",greet(name))


const greet1 = (name)=>`Hello ${name}`
console.log("Arrow Function : ",greet1(name))
console.log(greet1('ashwin'))
console.log(greet1('sanju'))

const square =(x)=>x*x
console.log(square(10))

const add_nums = (x,y)=>x+y
console.log(add_nums(10,20));
*/

// Object Oriented Programming
// console.log(document.getElementById('heading').innerText)

// name = 'jithin'
// const greet = name => `Hello ${name}`
// document.getElementById('heading').innerText = greet(name)

// const button = document.querySelector('button');
// console.log(button.innerText)

// button.addEventListener('click', event => {
//     event.preventDefault()
//     document.getElementById('heading').innerHTML ="jithin";
// });

// button.addEventListener('dblclick', event => {
//     event.preventDefault()
//     document.getElementById('heading').innerHTML = "ashwin";
// });

// const heading = document.getElementById('heading')
// heading.addEventListener('mouseenter',event =>{
//     heading.style.color= 'blue'
// })

// heading.addEventListener('mouseleave', event => {
//     heading.style.color = 'black'
// })


// const name_new = document.getElementById('name')
// const button = document.getElementById('submit')
// button.addEventListener('click', event =>{
//     event.preventDefault()
//     heading.innerText = `Hi ${name_new.value}`
// })

// const button = document.getElementById('submit')
// const listNames = document.getElementById('namelist')
// console.log(listNames)

// const button = document.getElementById('submit')
// button.addEventListener('click', event =>{
//     event.preventDefault()
//     li = document.createElement('li')
//     li.innerText = name_new.value
//     listNames.appendChild(li)
// })




// button.addEventListener('click', event => {
//     event.preventDefault()
    

    
// })

// const button = document.querySelector('button');

// button.addEventListener('click',event)


//Object Oriented Programming

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getUTCFullYear()
    }
    getAge() {
        return new Date().getFullYear() - this.getBirthYear()
    }

}

let person1 = new Person('jithin', 'kumar', '12/17/1989')
console.log(person1.getBirthYear())
console.log(person1.getAge())



