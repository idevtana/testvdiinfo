
import '../scss/app.scss';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('header__menulist--mobileaction')[0].addEventListener('click', function(){
        console.log(document.getElementsByClassName('header__menulist--mobileaction')[0].classList);
        document.getElementsByClassName('header__menulist--mobileaction')[0].classList.toggle('active');
    });

    function displayRangeValue($classe, $type){
      
      let $inputRange = document.querySelectorAll($classe);
      if($inputRange){
        for(var i=0;i<$inputRange.length;i++){
            let $inputclick = $inputRange[i];
            $inputclick.addEventListener('change', function(){
                console.log(this.value);
                this.nextElementSibling.children[0].innerHTML = this.value;
                if($type == 'max'){
                  //bloqué le min
                }
                else{ 
                  //bloqué le max
                }
            });
        }
      }
    }

    displayRangeValue('.content__aside-inputrange__maxrange input[type="range"]', 'max');
    displayRangeValue('.content__aside-inputrange__minrange input[type="range"]', 'min');
    

   
});



