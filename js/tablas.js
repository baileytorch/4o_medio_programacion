async function cargarDatos(){
    alert('Cargando datos...')
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const datos = await respuesta.json();
        console.log(datos);
        
        let cuerpoTabla = document.getElementById('cuerpoTabla');
        datos.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `<td>${usuario.id}</td><td>${usuario.name}</td><td>${usuario.username}</td><td>${usuario.email}</td><td>${usuario.phone}</td><td>${usuario.website}</td>`
            cuerpoTabla.appendChild(fila);
        });
    }catch(error){
        alert('No se han podido obtener los datos...', error);
    }
};