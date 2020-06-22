

document.getElementById("formulario").addEventListener("submit",cadastrarPessoa);

function cadastrarPessoa(event){





var nome=document.getElementById("nome").value;
var endereco=document.getElementById("endereco").value;
var telefone=document.getElementById("telefone").value;
var peso=document.getElementById("peso").value;
var altura=document.getElementById("altura").value;
var id= document.getElementById("id").value;
 
    

Pessoa={
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    peso: peso,
    altura: altura ,
    id: id,
}

console.log(id);
// event.preventDefault();
  
if(localStorage.getItem('agenda2')===null){
 var agenda =[];
 agenda.push(Pessoa);
 for (let i = 0; i < agenda.length; i++) {
    agenda[i].id+=1;
    console.log(agenda.id);
     
 }
 localStorage.setItem('agenda2',JSON.stringify(agenda)); 
}else{
    if(localStorage.getItem('agenda')!=null){
         var agenda= JSON.parse(localStorage.getItem('agenda')); 
    }else{
       var agenda = [];
    }
  
  // console.log(Pessoa); 
  
   console.log(agenda);
   agenda.push(Pessoa);
   localStorage.setItem('agenda',JSON.stringify(agenda)); 
    localStorage.setItem('agenda2',JSON.stringify(agenda)); 
   
}

console.log(Pessoa);

}//-----------------------

function chamarAgenda(){
var agenda = JSON.parse(localStorage.getItem('agenda2'));
var agendaResultado = document.getElementById("resultados");

agendaResultado.innerHTML=" ";

for (let i = 0; i < agenda.length; i++) {

   var id=agenda[i].id;
  // console.log(agenda[i].id);
   var nome = agenda[i].nome;
   var endereco = agenda[i].endereco;
   var telefone = agenda[i].telefone;
   var peso = agenda[i].peso;
   var altura = agenda[i].altura;

   agendaResultado.innerHTML+="<tr><td>"+nome+"</td><td>"+endereco+"</td><td>"+telefone+"</td><td>"+peso+"</td><td>"+altura+"</td><td>"+"<button onclick='excluirPessoa("+id+")'><i class='fa fa-remove'></i></button>"+"</tr>";
     
    }


}{


function excluirPessoa(id){

var agenda= JSON.parse(localStorage.getItem("agenda2"))

for (let i = 0; i< agenda.length; i++) {
if(agenda[i].id==id){
console.log("slicing");
    agenda.splice(i,1);
}
localStorage.setItem("agenda",JSON.stringify(agenda));
localStorage.setItem("agenda2",JSON.stringify(agenda));

    
}

chamarAgenda();


}
function MostrarPessoa(id){

    var agenda= JSON.parse(localStorage.getItem("agenda2"))
    
    for (let i = 0; i< agenda.length; i++) {
    if(agenda[i].id==id){
    console.log("modaling");
    agenda[i].onclick = function(){document.getElementById("myModal").showModal();};
      


    }
 
        
    }
}

}