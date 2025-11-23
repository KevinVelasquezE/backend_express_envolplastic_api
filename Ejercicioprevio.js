// definir un constante que me retorne el precio total de las ventas.
//  
const calcularPreciototal=(precio_unitario, cantidad, igv)=>{
    // retornar el precio total
    const igvTotal = (precio_unitario*cantidad)*igv;
    return (precio_unitario*cantidad+igvTotal);
}
// Imprimir precio total
console.log(calcularPreciototal(12,4,0.18));