jQuery(document).ready(function($){
    $("#grand").show();
    $('.jackpot_category').click(function(){
      $('.title').hide();
      if(this.value == 'grand'){
          $("#grand").show();
      }else if(this.value == 'major'){
          $("#major").show();
      }else if(this.value == 'minor'){
          $("#minor").show();
      }else{
          $("#mini").show();
      }
    });
  });