// Ejercicio 1

function numeros(n1, n2, n3)
{
  var a = Math.max(n1, n2, n3);
  var b = Math.min(n1, n2, n3);

  return "Maximo = " + a + " , Minimo = " + b;
}

console.log(numeros(10, 30, 5));

// Ejercicio 2

var arr = [15, 29, 78, 29, 40, 20, 18, 100, 78, 68];

function parImpar(arr)
{
  var p = [];
  var im = [];

  for(var i = 0; i < arr.length; i++)
    {
      if(i % 2 == 0)
        {
          p.push(i);
        }else
          {
            im.push(i);
          }
    }

  return "Elementos de posición par : " + p + " y " + " Elementos de posición impar : " + im;

}

console.log(parImpar(arr));


// Ejercicio 3

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function reverso(array)
{
  var arraicito = array.reverse();
  return arraicito;
}

console.log(reverso(array));
