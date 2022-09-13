$(document).ready(function(){
    createCookiePopup({
        type: "bottom",
        background: "#000",
        textColor: "#fff",
        text: "",
        buttonBackground: "#ff0000",
        buttonTextColor: "#fff",
        buttonText: ""
    });
  
    var lang = $('html').attr('lang');
    var cookieText = $('.cookieText');
    var cookieBtn = $('#acceptCookie');
  
    if (lang == 'tr' ) {
      cookieText.text('Bu siteyi kullanarak, sitede çerezlerin kullanılmasını kabul etmiş olursunuz. Çerezleri sadece trafiği analiz etmek için kullanırız.');
      cookieBtn.text('Kabul Et');
    } else if (lang == 'en' ) {
      cookieText.text('By using this site, you agree to the use of cookies on the site. We only use cookies to analyze traffic.');
      cookieBtn.text('Accept');
    } else {
      cookieText.text('Cookie yazısı ekleyin.')
      cookieBtn.text('Buton değeri ekleyin.');
    }
});