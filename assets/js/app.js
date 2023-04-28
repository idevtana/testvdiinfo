
import '../scss/app.scss';

document.addEventListener('DOMContentLoaded', function () {
  //Menu Mobile  
  document.getElementsByClassName('header__menulist--mobileaction')[0].addEventListener('click', function(){
        console.log(document.getElementsByClassName('header__menulist--mobileaction')[0].classList);
        document.getElementsByClassName('header__menulist--mobileaction')[0].classList.toggle('active');
    });

  //Range slider
  function fillColorRange($rangeMinInput, $rangeMaxInput, $track){
    let $percent1 = $rangeMinInput.value / $rangeMinInput.max * 100;
    let $percent2 = $rangeMaxInput.value / $rangeMaxInput.max * 100;
    // if($track) $track.style.background = `linear-gradient(to right, #dadae5 ${$percent1}%, #320F00 ${$percent1}%, #320F00 ${$percent2}%, #dadae5 ${$percent2}%)`;
    if($track) $track.style.background = `linear-gradient(to right, #320F00 ${$percent1}%, #320F00 ${$percent2}%)`;
    
  }
  function displayRangeValue($classe, $type){
    let $inputRange = document.querySelectorAll($classe);
    if($inputRange){
      var $rangeFind = [];
      var $minGap = [];
      for(var i=0;i<$inputRange.length;i++){
          let $inputclick = $inputRange[i];
          
          $rangeFind[i] = $type == 'max' ? $inputclick.parentElement.previousElementSibling.children[0] : $inputclick.parentElement.nextElementSibling.children[0]; 
          $minGap[i] = $type == 'max' ? $rangeFind[i].getAttribute('min') : $inputclick.getAttribute('min');
          
          fillColorRange(
            $type == 'max' ? $inputclick.parentElement.previousElementSibling.children[0]:$inputclick, 
            $type == 'max' ? $inputclick:$inputclick.parentElement.nextElementSibling.children[0],
            $type == 'max' ? $inputclick.parentElement.previousElementSibling.previousElementSibling.children[0]:$inputclick.parentElement.previousElementSibling, 
          );

          $inputclick.oninput = (e) => {
            
              e.target.nextElementSibling.children[0].innerHTML = e.target.value;
              fillColorRange(
                $type == 'max' ? e.target.parentElement.previousElementSibling.children[0] : e.target, 
                $type == 'max' ? e.target : e.target.parentElement.nextElementSibling.children[0],
                $type == 'max' ? e.target.parentElement.previousElementSibling.previousElementSibling.children[0] : e.target.parentElement.previousElementSibling, 
              );
              let $gap = 0;
              if(typeof $type != 'undefined'){
                if($type == "min"){   
                  if(parseInt(e.target.parentElement.nextElementSibling.children[0].value) - parseInt(e.target.value) <= $gap ){
                    e.target.value = parseInt(e.target.parentElement.nextElementSibling.children[0].value) - $gap;
                  }
                }
                else if(parseInt(e.target.value) - parseInt(e.target.parentElement.previousElementSibling.children[0].value) <= $gap ){
                    e.target.value = parseInt(e.target.parentElement.previousElementSibling.children[0].value) + $gap;
                    
                }
                
              }

              
          }
      }
    }
  }

  displayRangeValue('.content__aside-inputrange__maxrange input[type="range"]', 'max');
  displayRangeValue('.content__aside-inputrange__minrange input[type="range"]', 'min');
    

   
});



