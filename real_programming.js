
const nine=[0,0,0,0,0,0,0,0,0,0]
let turn=0;
const app={
 map: {
    action : document.querySelector('[data-id="actions"]'),
    list : document.querySelector('[data-id="action-list"]'),
    rest: document.querySelector('[data-id="reset"]'),
    new_round: document.querySelector('[data-id="new-round"]'),
    boxes : document.querySelectorAll('[data-id="box"]'),
    topleft:document.querySelector('[data-id="topleft"]'),
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
            element.addEventListener("click",(event)=>{

if(turn==0 && nine[element.id]==0){
    const iconx= document.createElement("i");
    iconx.classList.add('fa-solid' ,'fa-x' ,'clearbackground');
    const icony= document.createElement("i");
    icony.classList.add('fa-solid' ,'fa-o','clearbackground');

    
    const icondiv=document.createElement("div");
    icondiv.classList.add('topleftdiv')
    icondiv.appendChild(icony);
    const p=document.createElement("p");
    p.classList.add('topleftp')
    p.innerHTML="player 2 has to play";

   
    
    app.map.topleft.replaceChildren();
    app.map.topleft.appendChild(icondiv);
    app.map.topleft.appendChild(p);

   
    console.log(element.id);
    element.replaceChildren(iconx);
    nine[element.id]=1
    turn=1;
}
else if(turn==1 && nine[element.id]==0){

    const icony= document.createElement("i");
    icony.classList.add('fa-solid' ,'fa-o','clearbackground');
    const iconx= document.createElement("i");
    iconx.classList.add('fa-solid' ,'fa-x' ,'clearbackground');

    const icondiv=document.createElement("div");
    icondiv.classList.add('topleftdiv')
    icondiv.appendChild(iconx);
    const p=document.createElement("p");
    p.classList.add('topleftp')
    p.innerHTML="player 1 has to play";

   
    
    app.map.topleft.replaceChildren();
    app.map.topleft.appendChild(icondiv);
    app.map.topleft.appendChild(p);


    console.log(element.id);
    element.replaceChildren(icony);
    
     nine[element.id]=2;
    turn=0;
}
else{
    console.log("a7aa");

}

               
               
               

            })
        });
}

}
window.addEventListener("load",() => app.init() )
