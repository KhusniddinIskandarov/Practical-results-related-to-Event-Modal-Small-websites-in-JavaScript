const container = document.querySelector('.container')
const heading = document.querySelector('h1')
const buttons = document.querySelectorAll('button')

let timeInterval = null

buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.textContent == 'start') {
			heading.style.color = 'green'
			clearInterval(timeInterval)
			timeInterval = setInterval(() => {
				heading.textContent = Number(heading.textContent) + 1
			}, 1000)
		} else if (button.textContent == 'pouse') {
			heading.style.color = 'black'
			clearInterval(timeInterval)
		}
	})
})
