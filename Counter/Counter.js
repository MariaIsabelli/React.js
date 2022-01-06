function Counter (){
let quantity = 10;

function upQauntity(){
    quantity = quantity +1;
    document.getAnimations("counter-box").innerHTML = quantity
    console.log(quantity);
}

    return(
        <div>
             <h1 id="couter-box">{quantity}</h1>
       <button onClick={upQauntity}>Aumentar</button>
        </div>
      
    )
}
export default Counter;