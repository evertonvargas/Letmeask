type User = {
  name: String;
  addrees: {
    city: String;
    uf: String;
  }
}

function welcome(user: User) {
  return `Bem-vindo ${user.name}, de ${user.addrees.city}-${user.addrees.uf}`
}

const everton = {
  name: "Everton",
  addrees: {
    city: "Florianópolis",
    uf: "SC"
  }
}

console.log(welcome(everton))