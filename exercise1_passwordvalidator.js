function isValidate() 
{ 
    var textfield1=document.getElementById("textfield1);
    var textfield2=document.getElementById("textfield2);
    
    if (textfield1!=textfield2 && (textfield1.length<8))
    {
         alert("the passwords entered don't match ");
         alert("the passwords are not at least 8 characters long");
}
