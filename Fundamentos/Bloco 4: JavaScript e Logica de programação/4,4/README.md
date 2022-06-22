# Dia 4.3 JavaScript - Objetos e funções

Nesse exercício, aprendemos como e quando devemos aplicar funções e como manipulas um objeto e suas ‘chaves’.

## REQUISITOS

#### Parte I - Objetos e For/In

Usando um objeto predeterminado, faça os exercícios a seguir:

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: "Bem-vinda, Margarida".

2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

3. Faça um `for/in` que mostre todas as chaves do objeto. 

4. Faça um novo `for/in`, mas agora mostre todos os valores das chaves do objeto.

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

Usando outro objeto, faça os exercícios a seguir:

6. Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um `console.log` no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

7. Adicione um novo livro favorito na chave `livrosFavoritos`, que é um `array`. Atribua a esta chave um objeto contendo as seguintes informações:
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }

8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

#### Parte II - Funções

1. Crie uma função que receba uma `string` e retorne `true` se for um palíndromo, ou `false`, se não for.

2. Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.

3. Crie uma função que receba um `array` de inteiros e retorne o índice do menor valor.

4. Crie uma função que receba um `array` de nomes e retorne o nome com a maior quantidade de caracteres.

5. Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.

6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

7. Crie uma função que receba uma `string word` e outra `string ending`. Verifique se a `string ending` é o final da `string word`. Considere que a `string ending` sempre será menor que a string word.

## BÔNUS

1. Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

2. Crie uma função chamada `arrayOfNumbers` que receberá a variável `vector` como parâmetro. Através de um loop `for`, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

3 - A partir do array de frutas `basket`, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: *Sua cesta possui: x Melancias, x Abacates...*

Usando um objeto predeterminado, faça os exercícios a seguir:

4. Acesse as chaves `nome`, `sobrenome`, `andar` e `apartamento` do último morador do `blocoDois` e faça um `console.log` no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

5. Utilize o `for` para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves `nome` e `sobrenome`, depois faça o mesmo para os moradores do bloco 2.