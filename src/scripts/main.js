const teste = () => {
    document.getElementById('teste').addEventListener('sumbit',()=>{
        document.getElementById('texto').innerHTML='<h1>Teste<h1>'
        array.forEach(element => {
            const elemento = document.createElement('h2')
            elemento.innerText = element.index
        });
    }) 
}
teste()