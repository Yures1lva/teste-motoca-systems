export function registro(moto){
    fetch("http://localhost:3000/motos", {method:"POST", body:JSON.stringify(moto)})
}