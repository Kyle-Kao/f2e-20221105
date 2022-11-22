window.addEventListener('load', AOS.init)

const changeWord = () => {
    if (window.innerWidth <= 768) {
        document.querySelector('.guide_slogan').innerText = '年度最強合作三大關卡來襲'
    }
}
const nowDate = new Date()
const setLocal = () => {
    let container = document.querySelectorAll('.timeRange_scroll ul li')
    let container2 = document.querySelectorAll('.container2 li')
    container.forEach(item => {
        item.classList.remove('active')
    })
    container2.forEach(item => {
        item.classList.remove('active')
    })
    if (nowDate > new Date('2022/12/05')) {
        let active = document.querySelectorAll('.timeRange_scroll ul .activity5')
        let active2 = document.querySelectorAll('.timeRange_scroll ul .activity6')
        active.forEach(item => {
            item.classList.add('active')
        })
        active2.forEach(item => {
            item.classList.add('active')
        })
    } else if (nowDate > new Date('2022/11/03')) {
        let active = document.querySelectorAll('.timeRange_scroll ul .activity4')
        active.forEach(item => {
            item.classList.add('active')
        })
    } else if (nowDate > new Date('2022/10/31')) {
        let active = document.querySelectorAll('.timeRange_scroll ul .activity2')
        let active2 = document.querySelectorAll('.timeRange_scroll ul .activity3')
        active.forEach(item => {
            item.classList.add('active')
        })
        active2.forEach(item => {
            item.classList.add('active')
        })
    } else if (nowDate > new Date('2022/10/21')) {
        let active = document.querySelectorAll('.timeRange_scroll ul .activity1')
        active.forEach(item => {
            item.classList.add('active')
        })
    }
}
const scrollAnimate = () => {
    // console.log(window.scrollY)
    let top = document.querySelector('.scrollPaper .top')
    let left = document.querySelector('.scrollPaper .left')
    let right = document.querySelector('.scrollPaper .right')
    let main = document.querySelector('.outsideContainer')

    top.style.top = -window.scrollY * 1.5 + 'px'
    left.style.top = 200 + window.scrollY + 'px'
    right.style.top = 200 + window.scrollY + 'px'

    if (window.scrollY > 500) {
        document.querySelector('.scrollPaper').style.display = 'none'
    } else {
        document.querySelector('.scrollPaper').style.display = 'block'
    }
}

window.addEventListener('scroll', scrollAnimate)

changeWord()
setLocal()