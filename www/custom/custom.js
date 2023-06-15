//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.

const serverUrl = 'http://18.223.106.31:3000'

function deviceReady() {

	//Your code here **********
	//Su código aquí **********
	alert("adentro")

try{
	fetch(`${serverUrl}/titlesPosterDB`).then(response => response.json())
	.then(data => {
		const movieList = document.getElementById('movieList');
  
	  // Iterar sobre los objetos del JSON y generar los elementos de la lista
	  	data.forEach(item => {
		const li = document.createElement('li');
		
		// Crear un elemento de imagen para mostrar el poster
		const img = document.createElement('img');
		img.src = item.posterURL;
		li.appendChild(img);
  
		// Crear un elemento de título para mostrar el título
		const title = document.createElement('h3');
		title.textContent = item.title;
		li.appendChild(title);

		li.addEventListener('click', function() {
			const nombrePelicula = item.title; // Reemplaza con el nombre de la película que deseas consultar

			fetch(`${serverUrl}/consultaPelicula`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ nombre: nombrePelicula })
			})
			.then(response => response.json())
			.then(data => {
				/* console.log(data)
				const desc = document.createElement('div');
				desc.textContent = data.description;
				li.appendChild(desc); */
				const posterBig = document.getElementById('mainPoster');
				posterBig.src = data.poster;
				const mainTitle = document.getElementById('mainTitle');
				mainTitle.textContent = data.title;
				const trailer = document.getElementById('mainTrailer');
				trailer.href = data.trailer;
				const desc = document.getElementById('mainDescription');
				desc.textContent = data.description;
				mui.viewport.showPage('pageMovie','SLIDE_RIGHT');

			})
			.catch(error => alert('Error al realizar la consulta:', error));

		  });
  
		movieList.appendChild(li);
    });
  })
  .catch(error => alert('Error al obtener los datos:', error));
	
	//Hide splash
	//Ocultar el splash
	if (navigator.splashscreen) {
		navigator.splashscreen.hide();
	}

	installEvents();

}catch(error){
	alert.error(error);
}


}

function installEvents() {

	$('#ingresar').click(function() {
		mui.viewport.showPage('pageMain','SLIDE_LEFT');
		return false;
	});

	$('#registro').click(function() {
		mui.viewport.showPage('pageSignUp','SLIDE_RIGHT');
		return false;
	});

	$('#retorno').click(function() {
		mui.viewport.showPage('pageStart','SLIDE_LEFT');
		return false;
	});

	$('#user-icon').click(function() {
		mui.viewport.showPage('pageMovie','SLIDE_RIGHT');
		return false;
	});

}