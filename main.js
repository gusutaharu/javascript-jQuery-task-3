$(function(){
    
    serchWord = function(){
        let searchText = $(this).val();
        let matchText ;
     
      $('.keyword').each(function() {
          mactchText = $(this).text();
          
          if (mactchText.indexOf(searchText) != -1){
              $(this).parent().removeClass('hidden');
          }
          else{
              $(this).parent().addClass('hidden');
          }
      });
      
        
    };
    
  // リアルタイムで実行
$('#search-text').on('input',serchWord);
  
});