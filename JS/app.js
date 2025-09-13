const ulEl = document.querySelector('ul')
const liEl = document.querySelectorAll('li')
const button = document.querySelector('button')

button.addEventListener('click', () => {
	// ulEl.innerHTML += "<li>Yangi li element qo'shildi😊</li>"
	const li = document.createElement('li')
	li.textContent = "Yangi li element qo'shildi😊"
	ulEl.appendChild(li)
})

liEl.forEach(item => {
	item.addEventListener('click', e => {
		// e.target.style.textDecoration = 'line-through'
		// e.target.style.opacity = '0.7'
		// e.target.remove()
		// console.log('Li')
		// e.stopPropagation()
	})
})

ulEl.addEventListener('click', e => {
	// console.log('Ul')
	if (e.target.nodeName == 'LI') {
		e.target.remove()
	}
})
