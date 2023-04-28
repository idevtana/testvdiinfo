
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

  //Filtrage
  function filterInstant(){
    console.log('filter instant');
    let $items = document.getElementsByClassName('content__grid-layout__item');

    let $inputRangeKmMin = document.querySelectorAll('.content__aside-inputrange.kilometer .slider-rangemin');
    let $inputRangeKmMax = document.querySelectorAll('.content__aside-inputrange.kilometer .slider-rangemax');
    
    let $inputRangeYearMin = document.querySelectorAll('.content__aside-inputrange.year .slider-rangemin');
    let $inputRangeYearMax = document.querySelectorAll('.content__aside-inputrange.year .slider-rangemax');

    
    let $inputRangePriceMin = document.querySelectorAll('.content__aside-inputrange.price .slider-rangemin');
    let $inputRangePriceMax = document.querySelectorAll('.content__aside-inputrange.price .slider-rangemax');
    
    
   
    let $rangeMaxKmValue = parseInt($inputRangeKmMax[0].value);
    let $rangeMinKmValue = parseInt($inputRangeKmMin[0].value);

    let $rangeMaxYearValue = parseInt($inputRangeYearMax[0].value);
    let $rangeMinYearValue = parseInt($inputRangeYearMin[0].value);

    let $rangeMaxPriceValue = $inputRangePriceMax[0].value;
    let $rangeMinPriceValue = $inputRangePriceMin[0].value;

    
    for(var i = 0; i<$items.length; i++){
      let $kmFilter = false;
      let $yearFilter = false;
      let $priceFilter = false;

      let $kmitem = parseInt($items[i].getAttribute('data-km'));
      let $year = parseInt($items[i].getAttribute('data-year'));
      let $price = $items[i].getAttribute('data-price');
      
      $price = parseInt($price.replace(' ', '').replace('.', '').replace('€', ''));
      
      
      console.log($year,$rangeMinYearValue,$rangeMaxYearValue);
      if($kmitem > $rangeMinKmValue && $kmitem < $rangeMaxKmValue){
        $kmFilter = true;
      }

      if($year > $rangeMinYearValue && $year < $rangeMaxYearValue){
        $yearFilter = true;
      }

      if($price > $rangeMinPriceValue && $year < $rangeMaxPriceValue){
        $priceFilter = true;
      }
      console.log($kmFilter,$yearFilter,$priceFilter);
      if($kmFilter && $yearFilter && $priceFilter){
        if(!$items[i].classList.contains('active')){
          $items[i].classList.add('active');
        }
      }
      else{
        if($items[i].classList.contains('active')){
          $items[i].classList.remove('active');
        }
      }
    }
  }

  document.getElementsByClassName('content__aside-form-btnsubmit')[0].addEventListener('click', filterInstant);
  
   
});



