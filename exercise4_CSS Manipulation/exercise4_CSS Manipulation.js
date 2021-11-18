function changeColor()
{
  var bordercolor=document.getElementById("bordercolor");
  var borderwidth=document.getElementById("borderwidth");
  var backgroundcolor=document.getElementById("backgroundcolor");
  var paragraph=document.getElementById("paragraph");


  if (bordercolor.value=="red" || bordercolor.value=="Red")
  {
    paragraph.style.borderColor="red";
  }
  else if (bordercolor.value=="blue" || bordercolor.value=="Blue")
  {
    paragraph.style.borderColor="blue";
  }
  else if (bordercolor.value=="green" || bordercolor.value=="Green")
  {
    paragraph.style.borderColor="green";
  }

  if (borderwidth.value)
  {
    paragraph.style.borderWidth=borderwidth.value;
  }

  if (backgroundcolor.value)
  {
    paragraph.style.backgroundColor=backgroundcolor.value;
  }



}
