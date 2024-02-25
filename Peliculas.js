
class Pelicula {
    constructor(titulo, director, duracion, genero) {
      this.titulo = titulo;
      this.director = director;
      this.duracion = duracion;
      this.genero = genero;
    }
  }
  

  class VideoClub {
    constructor() {
      this.peliculas = [];
    }
  

    agregarPelicula(pelicula) {
      this.peliculas.push(pelicula);
    }
  

    buscarPorTitulo(titulo) {
      const peliculaEncontrada = this.peliculas.find(pelicula => pelicula.titulo === titulo);
      return peliculaEncontrada ? peliculaEncontrada : 'Película no encontrada';
    }
  

    listarPeliculas() {
      this.peliculas.forEach(pelicula => {
        console.log(`Título: ${pelicula.titulo}, Director: ${pelicula.director}, Duración: ${pelicula.duracion}, Género: ${pelicula.genero}`);
      });
    }
  }
  

  const miVideoClub = new VideoClub();
  

  miVideoClub.agregarPelicula(new Pelicula('El Padrino', 'Francis Ford Coppola', '175 minutos', 'Drama'));
  miVideoClub.agregarPelicula(new Pelicula('Matrix', 'Lana Wachowski, Lilly Wachowski', '136 minutos', 'Ciencia Ficción'));
  miVideoClub.agregarPelicula(new Pelicula('El Señor de los Anillos: La Comunidad del Anillo', 'Peter Jackson', '178 minutos', 'Fantasía'));
  

  console.log(miVideoClub.buscarPorTitulo('Matrix'));
  
 
  console.log('Lista de películas disponibles:');
  miVideoClub.listarPeliculas();node 
  