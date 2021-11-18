function isValidate()
{
  //alert('the passwords start');
  var textfield1=document.getElementById("textfield1");
  var textfield2=document.getElementById("textfield2");

  if (textfield1.value!=textfield2.value && (textfield1.value.length<8 || textfield2.value.length<8))
  {
    alert("the passwords entered don't match ");
    alert("the passwords are not at least 8 characters long");
  }
  else if (textfield1.value!=textfield2.value)
  {
    alert("the passwords entered don't match ");
  }

  else if (textfield1.value.length<8 || textfield2.value.length<8)
  {
    alert("the passwords are not at least 8 characters long");
  }

}
