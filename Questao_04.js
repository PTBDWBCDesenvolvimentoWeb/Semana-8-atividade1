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

}
