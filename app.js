'use strict'

document.addEventListener('DOMContentLoaded', () => {
async function buscarSerie(query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`

    try {
        const response = await fetch(url)
        const resultado = await response.json()

        if (resultado.length > 0) {
            return resultado[0].show
        } else {
            return null
        }
    } catch (error) {
        console.error("Erro ao buscar a série")
        return null
    }

}


const input = document.getElementById('input-serie')
const button = document.getElementById('button-search')
const resultado = document.getElementById('resultado')




function updateShow(showData) {

    if (!showData) {
        resultado.innerHTML = 'serie não encontrada'
    }

  
}

button.addEventListener('click', async () => {
    const query = input.value.trim()
    const serie = await buscarSerie(query)
    updateShow(serie)
})

})
