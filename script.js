let checkPrato;
let checkBebida;
let checkSobremesa;

function selecionarPrato(pratoSelecionado) {

    if (checkBebida !== undefined & checkSobremesa !== undefined) {
        const acionarButton = document.querySelector("button")
        acionarButton.classList.add("green");
        acionarButton.disabled = false;
        acionarButton.innerHTML = "Fechar pedido"

    }

        checkPrato = document.querySelector(".prato .selecionado");

    if (checkPrato !== null) {
        checkPrato.classList.remove("selecionado");
        checkPrato.innerHTML = "<figure><img src='images/frango_yin_yang.png'><figcaption>Frango Yin Yang</figcaption></figure><p>Um pouco de batata,<br>um pouco de salada</p><div><p>R$ 14,90</p></div>";
    }

    pratoSelecionado.classList.add("selecionado");
    pratoSelecionado.innerHTML = "<figure><img src='images/frango_yin_yang.png'><figcaption>Frango Yin Yang</figcaption></figure><p>Um pouco de batata,<br>um pouco de salada</p><div><p>R$ 14,90</p><div><ion-icon name='checkmark-circle'></ion-icon></div></div>";
}

function selecionarBebida(bebidaSelecionada) {

    if (checkPrato !== undefined & checkSobremesa !== undefined) {
        document.querySelector("button").classList.add("green");
        document.querySelector("button").disabled = false;

    }

        checkBebida = document.querySelector(".bebida .selecionado");

    if (checkBebida !== null) {
        checkBebida.classList.remove("selecionado");
        checkBebida.innerHTML =  "<figure><img src='images/coca-cola.png'><figcaption>Coquinha gelada</figcaption></figure><p>Lata 350ml</p><div><p>R$ 4,90</p></div>";
    }

    bebidaSelecionada.classList.add("selecionado");
    bebidaSelecionada.innerHTML = "<figure><img src='images/coca-cola.png'><figcaption>Coquinha gelada</figcaption></figure><p>Lata 350ml</p><div><p>R$ 4,90</p><div><ion-icon name='checkmark-circle'></ion-icon></div></div>";
}

function selecionarSobremesa(sobremesaSelecionada) {

    if (checkPrato !== undefined & checkBebida !== undefined) {
        document.querySelector("button").classList.add("green");
        document.querySelector("button").disabled = false;
    }

        checkSobremesa = document.querySelector(".sobremesa .selecionado");

    if(checkSobremesa !== null) {
        checkSobremesa.classList.remove("selecionado");
        checkSobremesa.innerHTML = "<figure><img src='images/pudim.png'><figcaption>Pudim</figcaption></figure><p>Apenas pudim</p><div><p>R$ 7,90</p></div>";
    }

    sobremesaSelecionada.classList.add("selecionado");
    sobremesaSelecionada.innerHTML = "<figure><img src='images/pudim.png'><figcaption>Pudim</figcaption></figure><p>Apenas pudim</p><div><p>R$ 7,90</p><div><ion-icon name='checkmark-circle'></ion-icon></div></div>";
}
