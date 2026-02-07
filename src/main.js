const app = document.getElementById('app')

const p = document.createElement('p')
p.textContent = 'Это минимальный стартовый файл JavaScript.'
app.appendChild(p)

const time = document.createElement('p')
time.textContent = `Текущее время: ${new Date().toLocaleString()}`
time.style.fontStyle = 'italic'
time.style.marginTop = '0.5rem'
app.appendChild(time)

console.log('App started —', new Date().toISOString())