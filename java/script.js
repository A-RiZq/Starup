//the nav bar
$(".plus-icon1").click(function()
{
    $(".sublist1").toggle();
    $(".plus1").toggle();
    $(".minus1").toggle();
});
$(".plus-icon2").click(function()
{
    $(".sublist2").toggle();
    $(".plus2").toggle();
    $(".minus2").toggle();
});

$(".Blog-sublist").hover(function(){
    $(".sublist1").toggle();
  },
  function(){
    $(".sublist1").toggle();
  });
  $(".pages-sublist").hover(function(){
    $(".sublist2").toggle();
  },
  function(){
    $(".sublist2").toggle();
  });

  // header main
  $(".arrow2").click(function()
  {
    $("#hero").toggle();
    $("#hero1").toggle();
  });
  $(".arrow3").click(function()
  {
    $("#hero").toggle();
    $("#hero1").toggle();
  });