
import '../scss/app.scss';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('header__menulist--mobileaction')[0].addEventListener('click', function(){
        console.log(document.getElementsByClassName('header__menulist--mobileaction')[0].classList);
        document.getElementsByClassName('header__menulist--mobileaction')[0].classList.toggle('active');
    });

    let $inputMaxRange = document.querySelectorAll('.content__aside-inputrange__maxrange input[type="range"]');
    for(var i=0;i<=$inputMaxRange.length;i++){
        var $inputclick = $inputMaxRange[i];
        $inputclick.addEventListener('click', function(){
            console.log($inputclick);
            this.nextElementSibling.children[0].innerHTML = this.value;
        });
    }
});



