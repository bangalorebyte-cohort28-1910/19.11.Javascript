
const get_string = document.getElementById("reverse")
const btn = document.getElementById("action")
const string_reversed = document.getElementById("div")
btn.addEventListener("click", event => {
    event.preventDefault()
    string_reversed.innerHTML = get_string.value.split("").reverse().join("")

})

const get_string1 = document.getElementById("vowels")
const btn1 = document.getElementById("action1")
const vowels_count = document.getElementById("div1")
btn1.addEventListener("click", event => {
    event.preventDefault()
    let vowel = "aeiou"
    let count = 0
    for (let i = 0; i < get_string1.value.length; i++) {
        if (vowel.includes(get_string1.value[i])) {
            count += 1
        }
    }
    vowels_count.innerHTML = count

})


const get_string2 = document.getElementById("palin")
const btn2 = document.getElementById("action2")
const palindrome = document.getElementById("div2")
btn2.addEventListener("click", event => {
    event.preventDefault()
    if (get_string2.value == get_string2.value.split("").reverse().join("")) {
        palindrome.innerHTML = "true"
    } else {
        palindrome.innerHTML = "false"
    }


})



const get_number = document.getElementById("number")
const btn3 = document.getElementById("action3")
const fizz = document.getElementById("div3")
btn3.addEventListener("click", event => {
    event.preventDefault()
    if (get_number.value % 3 == 0 && get_number.value % 5 == 0) {
        fizz.innerHTML = "fizzbuzz"
    } else if (get_number.value % 3 == 0) {
        fizz.innerHTML = "fizz"
    } else if (get_number.value % 5 == 0) {
        fizz.innerHTML = "buzz"
    } else {
        fizz.innerText = get_number.value
    }
})


const get_number1 = document.getElementById("number1")
const btn4 = document.getElementById("action4")
const fib_num = document.getElementById("div3")
btn4.addEventListener("click", event => {
    event.preventDefault()
    let fib_arry = [0, 1]
    function fib(n) {
        if (n < 0) {
            fib_num.innerHTML = "please enter a positive value"
        } else {
            let temp_fib = fib(n - 1) + fib(n - 2)
            fib_arry.push(temp_fib)
            fib_num.innerHTML = temp_fib
        }
    }

})



const get_string3 = document.getElementById("cap")
const btn5 = document.getElementById("action5")
const captilize = document.getElementById("div5")
btn5.addEventListener("click", event => {
    event.preventDefault()
    let string_list = get_string3.value.split("")
    let captilize_string = []
    for (let i of string_list) {
        let s = i.charAt(0).toUpperCase() + i.slice(1)
        captilize_string.push(s)
    }
    captilize.innerHTML = captilize_string.join("")

})


const get_array = document.getElementById("array1")
let chunk_size = document.getElementById("chunk")
const btn6 = document.getElementById("action6")
const array_chunk = document.getElementById("div6")
btn6.addEventListener("click", event => {
    event.preventDefault()
    let array_ele = get_array.value.split(" ")
    console.log(array_ele)
    // let b = chunk_size.value
    // let a = 0
    // for (let i of array_ele) {
    //     let sliced = array_ele.slice(a, b)
    //     a += chunk_size.value
    //     b += chunk_size.value
    //     console.log(sliced)
    let b = chunk_size.value
    let c = []
    for (let i = 0; i < array_ele.length; i += chunk_size.value) {
        let sliced = array_ele.slice(i, b)
        b += chunk_size.value
        console.log(sliced)
    }
})

