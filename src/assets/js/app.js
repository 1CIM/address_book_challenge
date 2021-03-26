const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('#contact-list')
  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')

    contacts.forEach(contact => {
      let li = document.createElement('li')

      li.innerHTML = `
      <span>${contact.name} </span> |
      <span>${contact.email}</span> |
      <span>${contact.phone}</span>
      `
      ul.appendChild(li)
    });
    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  const contactForm = document.getElementById('new-contact-form')
  const toggleFormVisibilityButton = document.getElementById('add-contact')
  contactForm.style.display = 'none'

  toggleFormVisibilityButton.addEventListener('click', () => {
    if (contactForm.style.display === '') {
      contactForm.style.display = 'none'
    } else {
      contactForm.style.display = ''
    }
  })

  contactForm.addEventListener('submit', event => {
    event.preventDefault()

    // 1. Reads allt the input feilds and gets their values
    const { name, nickname, email, phone, countrie, company, notes, twitter, github } = contactForm.elements

    const contact = {
      name: name.value,
      nickname: nickname.value,
      email: email.value,
      phone: phone.value,
      countrie: countrie.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
      github: github.value,
    }

    console.log(contact) // ust for manually testing

    let contacts = JSON.parse(storage.getItem('contacts')) || []

    contacts.push(contact)

    // 2. Saves them to our storage
    
    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
    contactForm.reset()
  });
});

