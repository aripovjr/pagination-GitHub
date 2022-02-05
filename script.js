import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('h1')
const btnContainer = document.querySelector('.btn-container')

let idx = 0
let pages = []

const setupUI = () => {
    displayFollowers(pages[idx])
    displayButtons(btnContainer, pages, idx)
}

const init = async() => {
const followers = await fetchFollowers()
title.textContent = 'Pagination'
pages = paginate(followers)
setupUI()
}

window.addEventListener('load', init)