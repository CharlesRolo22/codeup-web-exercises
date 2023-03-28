// window.onload = function() {
//     alert( 'The page has finished loading!' );
// }
//
//
// $(function() {
//     alert( 'The DOM has finished loading!' );
// });

// let ingredients = $('#text').html();
// alert(ingredients);
//
//
// $('li').css("font-size", "20px")
//
// $('ul').css("border", "30px solid black")


// $('.codeup').css('border', '1px solid red')

// $('.codeup, p').css('font-size', '50px');
//
// let ingredients = $('#header').html();
// alert(ingredients);

// $('#header').click(function() {
//     alert('h1 with id "header" was clicked');
// });

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });

// console.log('h1').html();

let h1 =$('h1');

// h1.html("attributes and css lecture");
h1.click(function(){
    alert($(this).html());
})


// $('#header').click(function() {
//     let h1Contents = $('#header').html();
//     alert(h1Contents);
// })

// $('#container').click(function(){
//    $(this).html('Codeup Rocks!');
// });



// ------ css mode ------
//------- method chaining -------
// $('.codeup').css('background', 'red').css('color', 'white');
// $(".codeup").css({
//     'background': 'green',
//     'color': 'white'
// })


// let importantStyling ={
//     'background': 'green',
//     'color': 'white'
// };
// $(".codeup").css(importantStyling);


// $('p').addClass('content')

let para = $('p');

para.click(function (){
    $(this).toggle('content')
})