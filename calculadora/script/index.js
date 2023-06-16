// variavel que tranforma a tela em um objeto 
var screen = document.querySelector('#screen');

/*função para deletar tela*/
document.querySelector('#cleaner')
  .addEventListener('click', function(){
     screen.value = '';
  })
  
  /*função para deletar números na tela, um a um*/
  document.querySelector('#delete')
  .addEventListener('click', function(){
     screen.value = screen.value.substring(0,(screen.value.length -1));
  })

  /*função para os operadores matemáticos*/
  function addToScreen(value){
    const operaçoes = ['*','-','+','/','.'] 
     screen.value += value;
     if (operaçoes.includes(value)){
      var valorAnterior = screen.value.length ;
         if(operaçoes.includes(screen.value[valorAnterior])){
            screen.value = screen.value.substring(0,(screen.value.length));
            screen.value = screen.value + value;
       }
     }
      /*tratamento de erros*/
   switch( screen.value[0]){
      case'*':
        screen.value = '';
        case '/':
         screen.value = '';
       case '.':
         screen.value=''; 
  } 
}


  /* função para exibir resultado na tela*/
  function result(){
    if (screen.value){
      screen.value = eval(screen.value);
    }
    else{
       screen.value = 'Dúvida?'
    }
  }
  
