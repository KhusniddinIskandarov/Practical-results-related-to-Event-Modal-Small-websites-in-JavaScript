const signupForm = document.getElementById('signup-form')
const input = document.getElementById('username')
const message = document.getElementById('message')

const regEX = /^[a-zA-Z0-9]{6,12}$/

signupForm.addEventListener('submit', e => {
	e.preventDefault()
	if (regEX.test(signupForm.username.value)) {
		message.textContent = "Malumot to'g'ri kiritildi"
		setTimeout(() => {
			message.textContent = ''
		}, 2500)
	} else {
		message.textContent =
			"Malumot 6 va 12 oralig'ida bo'ishi kerak va Malumo katta va kichik lotin harflaridan iborat bo'lishi zarur. Va Malumotda 0-9 orasidagi raqamlar ham qatnashishi mumkin"
		setTimeout(() => {
			message.textContent = ''
		}, 2500)
	}
})

signupForm.addEventListener('keyup', e => {
	if (regEX.test(signupForm.username.value)) {
		signupForm.username.setAttribute('class', 'success')
	} else {
		signupForm.username.setAttribute('class', 'error')
	}
})
