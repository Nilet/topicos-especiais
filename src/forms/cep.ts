export const cep = () => {
    const input = document.querySelector<HTMLInputElement>("#cep");

    if (input) {


        input.oninput = () => {
            input.value = input.value
                .replace(/\D/, '')
                .replace(/(\d{5})(\d{3})/, '$1-$2')
        }

        input.onblur = () => {
            if (input.value.length === 9) {
                const api = `https://brasilapi.com.br/api/cep/v1/${input.value}`;
                fetch(api).then(response => response.json())
                    .then((data) => {
                        input.style.border = "none"
                        data.cep ?  console.log(data): input.style.border = "1px solid red"
                    })
            }
        }
    }

}


