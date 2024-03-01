function criptografar() {
    document.getElementById("message").style.display = "none";
    document.getElementById("new_message").style.display = "block";

    var user_input = document.getElementById("input_text").value;

    var new_text = user_input.replace(/e/g, 'rry')
        .replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById("crypt_text").value = new_text;

    if (user_input.trim() === '' || /[A-Z]/.test(user_input)) {
        document.getElementById("message").style.display = "block";
        document.getElementById("new_message").style.display = "none";

        alert("Insira uma mensagem válida.");

        return;
    }

    var crypt_button = document.querySelector(".container__crypt_button");
    crypt_button.textContent = "Voltar";
    crypt_button.style.backgroundColor = "#0c7f55";
    crypt_button.style.color = "white";
    crypt_button.style.border = "0.0625rem solid #0c7f55";

    crypt_button.onclick = function () {
        window.location.href = "index.html";
    };

    var dcrypt_button = document.querySelector(".container__decrypt_button");
    dcrypt_button.textContent = "Descriptografar";
    dcrypt_button.style.backgroundColor = "transparent";
    dcrypt_button.style.color = "#c5500c";
    dcrypt_button.style.border = "0.0625rem solid #c5500c";
    dcrypt_button.onclick = descriptografar;
}

function descriptografar() {
    var decrypt_message = document.getElementById("input_text").value;
    var crypt_text = document.getElementById("crypt_text");

    if (crypt_text.value.trim() === '') {
        criptografar();
    } else {
        crypt_text.value = decrypt_message;
        var dcrypt_button = document.querySelector(".container__decrypt_button");
        dcrypt_button.textContent = "Criptografar";
        dcrypt_button.style.backgroundColor = "#c5500c";
        dcrypt_button.style.color = "white";
        dcrypt_button.style.border = "0.0625rem solid #c5500c";
        dcrypt_button.onclick = criptografar;
    }
}

function copiarTexto() {
    var texto = document.getElementById("crypt_text").value;

    navigator.clipboard.writeText(texto).then(function () {
        alert("Texto copiado para a área de transferência!");
    }, function (err) {
        console.error('Erro ao copiar texto: ', err);
    });
}