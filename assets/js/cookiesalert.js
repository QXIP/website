/** 
 * Bootstrap cookie alert
 */

(() => {
    const cookieAlert = document.querySelector('.cookieAlert')
    const acceptCookies = document.querySelector('.acceptCookies')

    const setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    const getCookie = (cname) => {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        var caLength = ca.length
        for (let i = 0; i < caLength; i++) {
            var c = ca[i];
            var cChar = c.charAt(0)
            while (cChar == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    if (!cookieAlert) {
        return;
    }
    cookieAlert.offsetHeight;
    if (!getCookie('acceptCookies')) {
        cookieAlert.classList.add('show');
    }
    acceptCookies.addEventListener('click', () => {
        setCookie('acceptCookies', true, 365);
        cookieAlert.classList.remove('show');
        window.dispatchEvent(new Event('cookieAlertAccept'))
        console.log('cookiesAccepted')
    });

})();
 