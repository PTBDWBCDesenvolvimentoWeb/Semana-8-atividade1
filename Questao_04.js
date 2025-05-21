Class Aluno{
  var primeiroNome,segundoNome,primeiraNota,segundaNota;
  public nomeCompleto (primeiroNome,segundoNome){
    return primeiroNome +" "+ segundoNome;
  }

  public media(){
    return (primeiraNota * 0.6) + (segundaNota*0.4);
  }

  public situacao(){
    if(media>6){
      return "Aprovado";
    }
    else{
      return "Reprovado";
    }
  }

var aluno1 = new Aluno("Carlos", "Souza", 10, 8);
var aluno2 = new Aluno("Maria", "da Silva", 4, 6);
var aluno3 = new Aluno("Luis", "Eduardo", 3, 8);
var aluno4 = new Aluno("Vinicius", "Nogueira", 9, 5);
var aluno5 = new Aluno("Roberto", "Oliveira", 4, 9);
var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

mostrarAlunos(){
    for(let aluno of alunos){
        alert("Nome do aluno: ["+aluno.nomeCompleto()+"] Média: ["+aluno.media().toFixed(2)+"] Situação: "+aluno.situacao());
    }
}
}
