const bar = document.getElementById('progress')
const nbCours = 8
const dta = sessionStorage.getItem('js_data')
const prc = (dta*100)/nbCours
bar.style.width = `${prc}%`