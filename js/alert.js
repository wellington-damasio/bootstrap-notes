const alertPlaceholder = document.querySelector('#liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.insertBefore(wrapper, alertPlaceholder.firstChild)
}

const alertTrigger = document.querySelector('#liveAlertBtn')

if(alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Nice, you trigered this alert message!', 'success')
    })
}