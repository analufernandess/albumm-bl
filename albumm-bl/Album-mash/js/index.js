//Lista de albuns com nome e imagem local
const albumMusica = [
    { nome: "Hit Me Hard And Soft", imagem: "img/BL-3.jpg"},
    { nome: "Happier Than Ever", imagem: "img/BL-4.jpg"},
    { nome: "When We All Fall Asleep, Where Do We Go?", imagem: "img/BL-2.jpg"},
    { nome: "Live at Third Man Records", imagem: "img/BL-6.jpg"},
    { nome: "Guitar Songs", imagem: "img/BL-5.jpg"},
    { nome: "Don't Smile at Me", imagem: "img/BL-1.jpg"},
];

//Começa todos os votos zerados
const votos = new Array(albumMusica.lenght).fill(0);
