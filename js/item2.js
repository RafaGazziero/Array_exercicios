lista=["Gervronilson","Estrada A","Linha B", 1880, 18.5, true]
alert(lista)

/**Exibir os elementos da lista percorrendo com laço de repetição e inserindo os dados no HTML */

for(var i=0; i<lista.length; i++)
{
    document.write("<h2>"+lista[i]+"</h2>")
}

/**Adicionar elemento ao fim da lista */
lista.push("84530-000")
alert(lista)

/**Remover o ultimo elemento da lista */
lista.pop()
alert(lista)

/**remover o primeiro elemento da lista */
lista.shift()
alert(lista)

/**Adicionar item como o primeiro elemento da lista */
lista.unshift("Gervronésio")
alert(lista)