
const app={
 map: {
    action : document.querySelector('[data-id="actions"]'),
    list : document.querySelector('[data-id="action-list"]'),
    rest: document.querySelector('[data-id="reset"]'),
    new_round: document.querySelector('[data-id="new-round"]'),
    boxes : document.querySelectorAll('[data-id="box"]'),
},
init(){
this.eventleseners();
},

eventleseners(){
    app.map.action.addEventListener("click",() =>{
        app.map.list.classList.toggle("hidden")
        }),

        app.map.rest.addEventListener("click",()=>{
    console.log("rest");
    app.map.list.classList.toggle("hidden")
        }),

    app.map.new_round.addEventListener("click",()=>{
        console.log("new-round");
        app.map.list.classList.toggle("hidden")
        }),

       app.map.boxes.forEach(element => {
            element.addEventListener("click",()=>{
                console.log(element.id);
                element.textContent='x';
            })
        });
}

}
window.addEventListener("load",() => app.init() )
