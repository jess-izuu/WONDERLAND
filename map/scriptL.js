const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
    // location.href = '../login/index.html'
  } else {
    nav.classList.remove('active')
  }
}

const API_NPS =
  'https://developer.nps.gov/api/v1/parks?&api_key=m1yrNf9lG5MsfFunTmmj3hsQTgzURpsKS2DtK14q&start=0&limit=265'

const IMG_NPS = 'https://www.nps.gov/common/uploads/structured_data/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const listItems = []

// // Get parks from API call
getParks(API_NPS)
search.addEventListener('input', (e) => filterData(e.target.value))

// // fetch returns a promise
async function getParks(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)

  displayParks(data.data)
}

function displayParks(parks) {
  main.innerHTML = ''

  parks.forEach((park) => {
    const { name, images, addresses, contacts, description, url } = park
    var phone = ''

    const parkEl = document.createElement('div')
    parkEl.classList.add('park')
    listItems.push(parkEl)
    let stateName = ''
    stateName = abbrState(`${addresses[0].stateCode}`)
    // console.log(`${contacts.phoneNumbers[0].phoneNumber}`)

    try {
      phone = contacts.phoneNumbers[0].phoneNumber
    } catch (err) {
      phone = 'NA'
    }
    parkEl.innerHTML = `
            <img src="${images[0].url}" alt="${images[0].title}">
            <div class="parkinfo">
              <h3>${name}</h3>
              <span class="${addresses[0].state}">${addresses[0].city}, ${stateName}</span>
            </div>
            <div class="overview">
              <i class="fas fa-link" aria-hidden="true"> </i>
              <a href="${url}" target="_blank"> link</a>
              <br>
              <br>
              <i class="fas fa-mobile-alt" aria-hidden="true">     </i>
              ${phone}
              <br>
              <h2>Overview</h2>
              ${description}
            </div>
        `
    main.appendChild(parkEl)
  })
}

function filterData(searchTerm) {
  listItems.forEach((park) => {
    if (park.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      park.classList.remove('hide')
      console.log(park.innerText)
      console.log(listItems.length)
    } else {
      park.classList.add('hide')
    }
  })
}

function abbrState(input) {
  var states = [
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['DC', 'DC'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
  ]

  input = input.toUpperCase()
  for (i = 0; i < states.length; i++) {
    if (states[i][1] == input) {
      return states[i][0]
    }
  }
}
