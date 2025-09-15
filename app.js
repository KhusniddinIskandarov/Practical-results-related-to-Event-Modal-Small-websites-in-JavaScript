const timeEl = document.getElementById('time')
const smallTime = document.querySelector('.small-time')

smallTime.innerHTML = `
	<span>Hh:</span>
	<span>Mm:</span>
	<span>Ss</span>
`
const myFunc = () => {
	let now = new Date()

	let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
	let month = (now.getMonth() + 1).toString().padStart(2, '0')
	let year = now.getFullYear()

	let hour = now.getHours().toString().padStart(2, '0')
	let minut = now.getMinutes().toString().padStart(2, '0')
	let second = now.getSeconds().toString().padStart(2, '0')

	const getFunc = () => {}
	const setFunc = () => {}

	timeEl.innerHTML = `
		<span>${day}.</span>
		<span>${month}.</span>
		<span>${year}</span>
	`
	smallTime.innerHTML = `
		<span>${hour}:</span>
		<span>${minut}:</span>
		<span>${second}</span>
	`
}
setInterval(() => {
	myFunc()
}, 1000)
