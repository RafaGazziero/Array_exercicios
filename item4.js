var cafe=[]
var almoco=[]
var jantar=[]
var c
var a 
var j

document.write("<h1>" + "Cardápio do dia" + "</h1>")

do{
    c=prompt("Digite seu café da manhã")
    cafe.push(c)
    if(c ==""){
    (alert("Digite algum item"))
    cafe.pop()
}
}while(c!=null)

alert(cafe)

document.write( "<h2>" + "Café da Manhã" + "</h2>")

document.write("<ul>")
for (var i = 0; i < cafe.length - 1; i++) {
    document.write("<li>" + cafe[i] + "</li>")
}
document.write("</ul>")



do{
    a=prompt("Digite seu almoço")
    almoco.push(a)
    if(a ==""){
    (alert("Digite algum item"))
    almoco.pop()
}
}while(a!=null)



alert(almoco)

 document.write("<h2>" + "Almoço" + "</h2>")

document.write("<ul>")
for (var i = 0; i < almoco.length - 1; i++) {
    document.write("<li>" + almoco[i] + "</li>")
}
document.write("</ul>")




do{
    j=prompt("Digite sua janta")
    jantar.push(j)
    if(j ==""){
    (alert("Digite algum item"))
    jantar.pop()
}
}while(j!=null)



alert(jantar)

 document.write("<h2>" + "Jantar" + "</h2>")

document.write("<ul>"); // abre a lista
for (var i = 0; i < jantar.length - 1; i++) {
    document.write("<li>" + jantar[i] + "</li>"); // escreve cada item
}
document.write("</ul>"); // fecha a lista