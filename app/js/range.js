$(function(){
  $('#defaultslide').slider({ 
    max: 1000,
    min: 0,
    value: 500,
    slide: function(e,ui) {
      $('#currentval').html(ui.value);
    }
  });
  
  $('#rangeslider').slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 90, 290 ],
    slide: function( event, ui ) {
      $('#rangeval').html(ui.values[0]+" - "+ui.values[1]);
    }
  });
});