// let sum = document.getElementById('sum')

// const input = document.querySelectorAll('input')

const input = document.getElementById('input')
const rate__ETH = document.getElementById('rate-ETH')
const rate__SOL = document.getElementById('rate-SOL')

const result__ETH = document.getElementById('result-ETH')
const result__SOL = document.getElementById('result-SOL')

const API_ETH = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=php'
const API_SOL = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=php'


async function getRate__ETH() {
    const res = await fetch(API_ETH)
    const data = await res.json()
    final__ETH = data.ethereum.php
    rate__ETH.innerHTML = final__ETH.toLocaleString()

    input.addEventListener('change', () => {
        const userInput = input.value
        multiply = calcResult(final__ETH, userInput)
        result__ETH.innerHTML = Math.ceil(multiply).toLocaleString()
    })
}

getRate__ETH()

async function getRate__SOL() {
    const res = await fetch(API_SOL)
    const data = await res.json()
    final__SOL = Math.ceil(data.solana.php)
    rate__SOL.innerHTML = final__SOL.toLocaleString()

    input.addEventListener('change', () => {
        const userInput = input.value
        multiply = calcResult(final__SOL, userInput)
        result__SOL.innerHTML = Math.ceil(multiply).toLocaleString()
    })
}

getRate__SOL()

function calcResult(x, y) {
    return x * y
}






