
function main (){
  //all code should be in here
  //document.getElementById('google').innerHTML = "Google";  //DOM to change the name on links in pages
  $('#google').html('Goooogle'); //rewritten line above using jquery
  // let links = document.getElementsByClassName('my-link');
  let links = $('.my-link'); //select element by class using jquery (code in line 6)
  links[0].innerHTML = "Twitter";
  links[0].href = "http://www.twitter.com";
  links[1].innerHTML = "LinkedIn";
  links[1].href = "http://www.linkedin.com";
  links[1].style.color = "red";  //how you change color using dom

  //button click event
  $('#heading-button').click(function () {
    $('h1').css('color', 'red');  //how you change color using jquery
    $('.my-link').hide();

  });
  $('#toggle-button').click(function () {
    $('.my-link').toggle();
  });

  //hide and show main text
  $('#main-text').hide();
  $('#main-text').fadeIn(5000);

  $('.projects').hide();

  //show projects by clicking
    $('.project.button').click(function () {
      $(this).next().slideToggle(500);
});

}

$(document).ready(main);  //run jquery after page is fully loaded
