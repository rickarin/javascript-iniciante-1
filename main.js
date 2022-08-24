const items = document.querySelectorAll('.tab-item')
const imgs = document.querySelectorAll('.img')


function removeMark () {
    items.forEach(item => item.classList.remove('marked'))
}

function removeShow () {
    imgs.forEach(item => item.classList.remove('show'))
}

items.forEach(item => item.addEventListener('click', function (e) {
    removeMark()
    removeShow()
    this.classList.add('marked')
    const atualItem = document.querySelector(`#${this.id}-img`)
    atualItem.classList.add('show')
}))