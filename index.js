$(document).ready(function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  
  $("#content").click(function(){

    $(this).select();

    document.execCommand('copy');

  })

  function btnText(texto) {
    document.querySelector('#texto1').innerText = texto;
  }


  /**
   * Remove Space Function
   */
  function removeSpace() {
    var i = 6;

    var value = document.querySelector('#send-rm').value

    function extractNumber(number){
      return number ? number.replace(/\D/g, ''): number
    }
    
    var replace = extractNumber(value)
    document.querySelector('#content').value = replace

    var contentvalue = document.querySelector('#content').value
    document.querySelector('#length').value = contentvalue.length

    
      var timer = setInterval(function(func) {
      i--;
      document.getElementById("relogio").value = i;
      
        if(i <= 0){
          clearInterval(timer)
        document.querySelector('#send-rm').value = ""
        document.querySelector('#content').value = ""
        document.querySelector('#length').value = "0"
        }

    }, 1000);    
  }

  function showOnOff(id) {
    var div = document.getElementById(id);
    var disp = div.style.display;
    div.style.display = disp == 'inline' ? 'none' : 'inline';
    setTimeout(() => {
      div.style.display = 'none';
    }, 10000);
}


function handlePisAndCofins(){
  var vbruto = parseInt(document.querySelector("#valorbruto").value);
  var pis = parseFloat(0.0165);
  var multpis = eval(vbruto * pis);

  var cofins = parseFloat(0.076);
  var multcofins = eval(vbruto * cofins);

  document.querySelector("#pis").value = multpis.toFixed(2).replace('.', ',');
  document.querySelector("#cofins").value = multcofins.toFixed(2).replace('.', ',');

  var brut = multcofins + multpis
  var multliquidi = vbruto - brut;
  document.querySelector("#valorliquido").value = multliquidi.toFixed(2).replace('.', ',');

  if (document.querySelector("#valorbruto").value == "" || document.querySelector("#valorbruto").value == null){
    document.querySelector("#pis").value = "";
    document.querySelector("#cofins").value = "";
    document.querySelector("#valorliquido").value = "";   
  }
}

function handlePisAndCofinsClear(){
  document.querySelector("#valorbruto").value = "";
  document.querySelector("#pis").value = "";
  document.querySelector("#cofins").value = "";
  document.querySelector("#valorliquido").value = "";
}

/* Calculadora Monofásica 

function calcular() {
  const valorFixo = parseFloat(document.getElementById('valor').value);
  const numero = parseFloat(document.getElementById('numero').value);
  const resultado = valorFixo * numero;
  document.getElementById('resultado').value = `R$ ${resultado}`;
}
*/

/*Classificação com opção*/
function mostrarTabela() {
  const tabelaSelecionada = document.getElementById('tabelas').value;
  const tabelas = ['tabela1', 'tabela2', 'tabela3'];

  // Esconder todas as tabelas
  tabelas.forEach(tabela => {
      document.getElementById(tabela).style.display = 'none';
  });

  // Mostrar a tabela selecionada, se houver
  if (tabelaSelecionada) {
      document.getElementById(tabelaSelecionada).style.display = 'table';
  }
}