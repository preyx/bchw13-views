const { axios } = window

const renderList = list => {
  // console.log(list)
  document.getElementById('undevoured').innerHTML = ''
  document.getElementById('devoured').innerHTML = ''
  list.forEach(({ id, burger_name, devoured }) => {
    if (!devoured) {
      document.getElementById('undevoured').innerHTML += `<div class="box"><div class="content is-clearfix"><p>${burger_name}</p><button class="button is-primary is-light is-pulled-right" id="${id}">Devour It!</button></div></div>`
    } else {
      document.getElementById('devoured').innerHTML += `<div class="box has-background-light"><div class="content has-text-danger"><p>${burger_name}</p></div></div>`
    }
  })
}

const listBurgers = _ => {
  axios.get('/api/burger')
    .then(({ data: list }) => renderList(list))
    .catch(e => console.error(e))
}

const addBurger = burger_name => {
  axios.post('/api/burger', { burger_name })
    .then(_ => axios.get('/api/burger'))
    .then(({ data: list }) => renderList(list))
    .catch(e => console.error(e))
  document.getElementById('burgerName').value = ''
}

const eatBurger = id => {
  axios.put(`/api/burger/${id}`)
    .then(_ => axios.get('/api/burger'))
    .then(({ data: list }) => renderList(list))
    .catch(e => console.error(e))
}

document.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.classList.contains('button')) {
    if (event.target.id === 'addBurger') {
      addBurger(document.getElementById('burgerName').value)
    } else {
      eatBurger(event.target.id)
    }
  }
})

listBurgers()
