const newHiredPeople = (name) => {
  let employees = {
    nomeCompleto: name,
    email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`
  };
  return employees
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), 
      id2: callback('Luiza Drumond'), 
      id3: callback('Carla Paiva'), 
    }
    return employees;
};

const checagemDeNumero = (numbPessoa, numbSorteado) => {
  return numbPessoa === numbSorteado
};

const sorteio = (numbPessoa, callback) => {
  let numbSorteado = Math.ceil(Math.random() * 5);
  if (callback(numbPessoa, numbSorteado)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

console.log(sorteio(3, checagemDeNumero));

const RIGHT = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let hits = 0;

const corrector = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  let hits = 0;
  for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
      hits += 1;
    } if (RIGHT_ANSWERS[i] !== STUDENT_ANSWERS[i]) {
      hits -= 0.5;
    } if (STUDENT_ANSWERS[i] === 'N.A') {
      hits += 0.5;
    };;
  };
  return hits
};

const numberOfHits = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback ) => {
  return callback(RIGHT_ANSWERS, STUDENT_ANSWERS)
}

console.log(numberOfHits(RIGHT, STUDENT, corrector));