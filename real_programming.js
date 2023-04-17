// function fun(){
//     var x=document.getElementById("hiddenlist");
// x.classList="actionlist";

// }
// function closefun(){
//     var x=document.getElementById("hiddenlist");
// x.classList="actionlist hidden";

// }


// action.addEventListener('click',(event) =>{
// console.log(event);
//     list.classList.toggle("hidden")

// })

const app={
 map: {
    action : document.querySelector(".act"),
    list : document.querySelector(".actionlist"),
},
init(){
app.map.action.addEventListener("click",() =>{
app.map.list.classList.toggle("hidden")
})


}


}
window.addEventListener("load",() => app.init() )