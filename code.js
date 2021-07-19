    //Button Name
function myName() {
    var a = document.getElementById("name").innerHTML=
    ' <h1 id="colorname"><i class="fas fa-angle-right"></i>Phạm Ngọc Quý  <i class="far fa-check-circle"></i></h1>'
};
//Button Age
function myAge() {
    var b = document.getElementById("age").innerHTML=
    '<h1 id = "colorage"><i class="fas fa-angle-right"></i><i class="far fa-gem"></i>18</h1>'
    };
    //Button Address
function myAddress(){
    var c= document.getElementById("address").innerHTML=
    '<h1 id="coloraddress"><i class="fas fa-angle-right"></i><i class="fas fa-map-marker-alt"></i>Thái Nguyên</h1>'
};

//color text name
 setInterval(function ()
    {
        var aelement = document.getElementById("colorname");
        aelement.classList.toggle("blue");
    }, 1000)

    //color text Age
     setInterval(function ()
    {
        var belement = document.getElementById("colorage");
        belement.classList.toggle("green");
    }, 1500)
    

//color text address
 setInterval(function ()
    {
        var celement = document.getElementById("coloraddress");
        celement.classList.toggle("tomato");
    }, 1000)
    ;



