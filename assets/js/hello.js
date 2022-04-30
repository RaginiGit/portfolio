// $(function() {
//   $( "#button" ).click(function() {
//     $( "#button" ).addClass( "onclic", 250, validate);
//   });

//   function validate() {
//     setTimeout(function() {
//       $( "#button" ).removeClass( "onclic" );
//       $( "#button" ).addClass( "validate", 450, callback );
//     }, 2250 );
//   }
//     function callback() {
//       setTimeout(function() {
//         $( "#button" ).removeClass( "validate" );
//       }, 1250 );
//     }
//   });

window.onload = function(){
  btn.addEventListener('click', function(){
    setTimeout(()=>{
      btn.classList.add('onclick');
      validate();
    }, 250);
  })
  function validate(){
    setTimeout(function() {
      btn.classList.remove("onclic");
      settimeout(()=>{
        btn.classList.add("validate");
        callback()
      })
    }, 2250);
  }

  function callback(){
    setTimeout(function() {
      btn.classList.remove( "validate" );
    }, 1250 );
  }
}
