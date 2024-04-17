function setCookie() 
{
    let i1 = document.getElementById("na").value;
    let i2 = document.getElementById("age").value;
    console.log(i1, i2);
    document.cookie = i1 + i2;
}
function displayAll() 
{
    console.log(document.cookie);
}


