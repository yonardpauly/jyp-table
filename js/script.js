window.onload = function (event) {

    var jyp_modal = document.getElementsByClassName('jyp-modal')
    var modal_btn = document.getElementsByClassName('btn-gold')
    var modal_close = document.getElementsByClassName('close-bg')

    for (let i = 0; i <= jyp_modal.length; i++) {
        modal_btn[i].onclick = () => {
            jyp_modal[i].style.display = "block"
        }
    
        modal_close[i].onclick = () => {
            jyp_modal[i].style.display = "none"
        }
    
        if (event.target == jyp_modal[i]) {
            jyp_modal[i].style.display = "none"
        }
    }

    jyp_modal[i].onclick = () => {
        jyp_modal[i].style.display = "none"
    }
}