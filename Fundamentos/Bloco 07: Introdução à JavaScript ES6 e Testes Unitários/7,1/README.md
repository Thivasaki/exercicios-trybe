# Dia 7.1  JavaScript ES6 - let, const, arrow functions e template literals

## REQUISITOS

#### PARTE 1

1. Altere as variáveis para respeitarem o escopo em que foram declaradas.
    - Modifique a estrutura da função para que ela seja uma arrow function;
    - Modifique as variáveis para que respeitem o escopo onde estão declaradas;
    - Modifique as concatenações para template literals.

2. Crie uma função que retorne um array em ordem crescente com o código disponibilizado no Course.
    - Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
    - Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
    - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

#### PARTE 2

Abaixo, você verá algumas especificações de algoritmos para desenvolver.

1. Crie uma função que receba um número e retorne seu fatorial.
    - Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. **Exemplo:** 4! = 4 * 3 * 2 * 1 = 24.

2. Crie uma função que receba uma frase e retorne a maior palavra.

3. Crie uma página com um contador de cliques
    - Um botão ao qual será associado um event listener;
    - Uma variável `clickCount` no arquivo **JavaScript** que acumule o número de clicks no botão;
    - Um campo no **HTML** que vá atualizando a quantidade de clicks no botão conforme a variável `clickCount` é atualizada.

4. Crie duas funções **JavaScript** com as seguintes especificações:
- _Função 1_: Escreva uma função que substitua a letra 'x' em uma frase.
    - A função deverá receber um `nome` por parâmetro;
    - Declare dentro da função uma variável com o nome frase, do tipo `const` e com o valor igual a `'Tryber x aqui!'`;
    - A função deverá retornar uma nova frase onde o x da frase `'Tryber x aqui!'` seja substituído pelo `nome` passado por parâmetro.

- _Função 2_: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
    - A função deverá receber o retorno da Função 1 por parâmetro;
    - Declare dentro da função uma variável com o nome **skills**, do tipo `const`;
    - A variável **skills** deverá ser um `array` contendo três `strings` com tecnologias que você já aprendeu.
    - Concatene o valor retornado da Função 1, a frase `'Minhas três principais habilidades são:'` e o valor da variável `skills`.