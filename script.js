
// heading line k call korte 
let heading = document.querySelector("h1")
console.log(heading)

// input k call korte 
let input = document.querySelector("input")
let button = document.querySelector("button")
let result = document.querySelector("h4")

console.log(button)

// input function k call 
button.addEventListener("click",function(){
        console.log("ami kicu korte cacchi");  

        // input value k call korte 
        console.log(input.value);

        // logical function er jnno 
        if(input.value >= 18){
                console.log("tmi vhot dite parba ");
                result.innerHTML="tmi vhot daw "
                result.style.color="green"
        }  
        else{
                console.log("tmi baccha");
                result.innerHTML="tmi vhot dite parba na"
                result.style.color="red"

        } 
        
})
// object call korar function 
let{name,age,area}={
        name: "MI",
        age: 19,
        area: "Noakhali"
}
console.log(name);
console.log(age);
console.log(area);


// map function er jnno 
let x = [12,13,18,19,39,37]
x.map((teams) =>{
        console.log(teams)

})
// for function er jnno 
for (let i = 0; i<x.length;i++){
        console.log(x[i]);
}

