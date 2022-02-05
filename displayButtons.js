const displayButtons = (container, pages, activeIdx) => {
    let btns = pages.map((_,pageIdx)=>{
        return `<button class="page-btn ${activeIdx === pageIdx?'active-btn':'null'} data-index="${pageIdx}">${pageIdx+1}</button>`
    })
    btns.push(`<button class="next-btn">next</button>`)
    btns.unshift(`<button class="prev-btn">prev</button>`)
    
    container.innerHTML = btns.join('')
}


export default displayButtons