const modal = document.getElementById('modal')
const showBtn = document.getElementById('show-btn')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

const addFunc = () => {
	modal.classList.add('hidden')
	overlay.classList.add('hidden')
}

const removeFunc = () => {
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', removeFunc)
closeBtn.addEventListener('click', addFunc)
overlay.addEventListener('click', addFunc)

document.addEventListener('keydown', e => {
	if (e.key == 'Escape') {
		modal.classList.add('hidden')
		overlay.classList.add('hidden')
	}
})
