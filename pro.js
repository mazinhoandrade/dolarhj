        const c = e => document.querySelector(e);
        const url = 'https://economia.awesomeapi.com.br/all/USD';
        let valorDoDolar;
        let dolaratu;
        let valorx;
        let valatu;

        async function dolar() {
            const r = await fetch(url)
            const json = await r.json();

            console.log(json)

            dolaratu = Number(json.USD.bid);

            c('.visu').innerHTML = `1 USD <=> ${dolaratu.toFixed(2)} R$`;

            c('#a').addEventListener('click', () => {
                valorx = c('.nu').value;
                valatu = dolaratu;
                if (valorx && valorx != 0) {
                    valorDoDolar = valatu * valorx;
                    c('.visu').innerHTML = `${valorx} USD <=> ${valorDoDolar.toFixed(2)} R$`;
                } else {
                    c('.visu').innerHTML = `DIGITE UM VALOR EM USD :(`;
                }

            });

        }
        dolar();