window.onload = () => {

    var m = document.getElementsByClassName('jyp-modal')
    var mb = document.getElementsByClassName('btn-gold')
    var mc = document.getElementsByClassName('close-bg')

    for (let i = 0; i <= m.length; i++) {
        mb[i].onclick = () => {
            m[i].style.display = "block"
        }
    
        mc[i].onclick = () => {
            m[i].style.display = "none"
        }
        
        m[i].onclick = (evt) => {
            if (evt.target == m[i]) {
                console.log(`${m[i].className}-${[i]} has been closed.`)
                m[i].style.display = "none"
            }
        }
    }
}
