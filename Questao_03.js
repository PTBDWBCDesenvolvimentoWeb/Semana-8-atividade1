
var nomeAluno = [3];
nomeAluno[0]= "João da Silva";
nomeAluno[1]= "Carolina de Jesus";
nomeAluno[2]= "Marcos Santos";

var primeiraNota = [3];
primeiraNota[0]= 7;
primeiraNota[1]= 5;
primeiraNota[2]= 9;

var segundaNota = [3];
segundaNota[0]=8.5;
segundaNota[1]=2;
segundaNota[2]=10;

for (var i=0; i < 3; i++){
var resultadoP[i] = primeiraNota[i]*0.6;
var resultadoS[i] = segundaNota[i]*0.4;
var soma[i] = resultadoP[i] + resultadoS[i];
alert("Nome do aluno:"/n+nomeAluno[i]+"Nota1:\n"+primeiraNota[i]+,"Nota2:\n"+segundaNota[i]);
alert("Nome do aluno:"/n+nomeAluno[i]+"Nota final:"+soma[i]);
}
