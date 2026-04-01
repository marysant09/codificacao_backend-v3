const filmes = [
  { id: 1, titulo: "Jurassic Park: O Parque dos Dinossauros", ano: 1993 },
  { id: 2, titulo: "O Mundo Perdido: Jurassic Park", ano: 1997 },
  { id: 3, titulo: "Jurassic Park III", ano: 2001 },
  { id: 4, titulo: "Jurassic World: O Mundo dos Dinossauros", ano: 2015 },
  { id: 5, titulo: "Jurassic World: Reino Ameaçado", ano: 2018 },
  { id: 6, titulo: "Jurassic World: Domínio", ano: 2022 }
];

class FilmeService {
getAll() {
  return filmes;
}

// retornar por ID
getById(id) {
  return filmes.find(filme => filme.id === id);
}
}

export const filmeService = new FilmeService()


