const api = "http://localhost:3000/motos"

export function registro(moto){

    try {
    fetch(api, {method:"POST", body:JSON.stringify(moto)})
        
    } catch (error) {
        console.log(error)
    }

}

export  function getCards(setCards) {

    try {
        fetch(api).then((res) => res.json()).then((data) => setCards(data))
         
    } catch (error) {
        console.log(error)
    }
}

export function deteleCards(id){
    try {
        fetch(api+`/${id}`, {method:"DELETE", })
    } catch (error) {
        console.log(error)
    }
}