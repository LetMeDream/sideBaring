
/* Old simpie two-buttons way */

/* function openNav() {
  document.getElementById("mySideBar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  console.log('abriendo');
}

function closeNav() {
  document.getElementById("mySideBar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  console.log('cerrando');
}
 */

/* New Chad One/button way */
let closed = true;
function toggleNav(){

    if(closed){
        document.getElementById("mySideBar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        closed = false;
    }else {
        document.getElementById("mySideBar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        closed = true;
    }

}