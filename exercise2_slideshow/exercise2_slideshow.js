function nextPic()
{
  var currentPic= document.getElementById("image");
  if (currentPic.src.match("smiley.png"))
  {
    currentPic.src="assassinscreed.jpg";
  }

  else if (currentPic.src.match("assassinscreed.jpg"))
  {
    currentPic.src="cricket.jpg";
  }

  else if (currentPic.src.match("cricket.jpg"))
  {
    currentPic.src="trophy.jpg";
  }

  else if (currentPic.src.match("trophy.jpg"))
  {
    currentPic.src="stadium.jpg";
  }

  else if (currentPic.src.match("stadium.jpg"))
  {
    currentPic.src="smiley.png";
  }
}

function backPic()
{
  var currentPic= document.getElementById("image");
  if (currentPic.src.match("smiley.png"))
  {
    currentPic.src="stadium.jpg";
  }

  else if (currentPic.src.match("assassinscreed.jpg"))
  {
    currentPic.src="smiley.png";
  }

  else if (currentPic.src.match("cricket.jpg"))
  {
    currentPic.src="assassinscreed.jpg";
  }

  else if (currentPic.src.match("trophy.jpg"))
  {
    currentPic.src="cricket.jpg";
  }

  else if (currentPic.src.match("stadium.jpg"))
  {
    currentPic.src="trophy.jpg";
  }
}
