let checkPrato;
let checkBebida;
let checkSobremesa;
let checkOptionPrato;
let checkOptionBebida;
let checkOptionSobremesa;
let pratoFinal;
let bebidaFinal;
let sobremesaFinal;
let custoSobremesa;
let custoPrato;
let custoBebida;


function selecionarPrato(pratoSelecionado, optionClass) {

    if (checkBebida !== undefined & checkSobremesa !== undefined) {
        const acionarButton = document.querySelector("button");
        acionarButton.classList.add("habilitado");
        acionarButton.disabled = false;
        acionarButton.innerHTML = "Fechar pedido";

    }

        checkPrato = document.querySelector(".prato .selecionado");
        checkOptionPrato = document.querySelector(".prato .confirmado");

    if (checkPrato !== null) {
        checkPrato.classList.remove("selecionado");
        checkOptionPrato.classList.remove("confirmado");
        
    }

    pratoSelecionado.classList.add("selecionado");
    document.querySelector(optionClass).classList.add("confirmado");
    pratoFinal = document.querySelector(".prato .selecionado figcaption").innerHTML;
    custoPrato = document.querySelector(".prato .selecionado .custo").innerHTML;
}

function selecionarBebida(bebidaSelecionada, optionClass) {

    if (checkPrato !== undefined & checkSobremesa !== undefined) {
        const acionarButton = document.querySelector("button");
        acionarButton.classList.add("habilitado");
        acionarButton.disabled = false;
        acionarButton.innerHTML = "Fechar pedido";
    }

        checkBebida = document.querySelector(".bebida .selecionado");
        checkOptionBebida = document.querySelector(".bebida .confirmado");

    if (checkBebida !== null) {
        checkBebida.classList.remove("selecionado");
        checkOptionBebida.classList.remove("confirmado");

    }

    bebidaSelecionada.classList.add("selecionado");
    document.querySelector(optionClass).classList.add("confirmado");
    bebidaFinal = document.querySelector(".bebida .selecionado figcaption").innerHTML;
    custoBebida = document.querySelector(".bebida .selecionado .custo").innerHTML;
}

function selecionarSobremesa(sobremesaSelecionada, optionClass) {

    if (checkPrato !== undefined & checkBebida !== undefined) {
        const acionarButton = document.querySelector("button");
        acionarButton.classList.add("habilitado");
        acionarButton.disabled = false;
        acionarButton.innerHTML = "Fechar pedido";
    }

        checkSobremesa = document.querySelector(".sobremesa .selecionado");
        checkOptionSobremesa = document.querySelector(".sobremesa .confirmado");

    if(checkSobremesa !== null) {
        checkSobremesa.classList.remove("selecionado");
        checkOptionSobremesa.classList.remove("confirmado");
    }

    sobremesaSelecionada.classList.add("selecionado");
    document.querySelector(optionClass).classList.add("confirmado");
    sobremesaFinal = document.querySelector(".sobremesa .selecionado figcaption").innerHTML;
    custoSobremesa = document.querySelector(".sobremesa .selecionado .custo").innerHTML;

   
}
function url() {
    const custoTotal = (Number(Number(custoPrato).toFixed(2)) + Number(Number(custoBebida).toFixed(2)) + Number(Number(custoSobremesa).toFixed(2))).toFixed(2);
    alert(custoTotal);
    window.open(`https://wa.me/5547999984688?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0a-%20Prato:%20${pratoFinal}%0a-%20Bebida:%20${bebidaFinal}%0a-%20Sobremesa:%20${sobremesaFinal}%0aTotal:%20R$%20${custoTotal}`)
    //alert(pratoFinal);
   // alert(bebidaFinal);
   // alert(sobremesaFinal);
   // alert(custoPrato);
   // alert(custoBebida);
   // alert(custoSobremesa);
    
}

