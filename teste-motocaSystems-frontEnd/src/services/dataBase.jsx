const port = 3000
const api = `http://localhost:${port}/motos`


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

export async function deteleCards(id){

    await new Promise(r => setTimeout(r, 2000));

    try {
        await fetch(api+`/${id}`, {method:"DELETE", })
    } catch (error) {
        console.log(error)
    }
}

export async function updateCards(id, moto){
    try {
      await  fetch(api+`/${id}`, {method:"PATCH", body: JSON.stringify(moto)})
    } catch (error) {
        console.log(error)
    }
}