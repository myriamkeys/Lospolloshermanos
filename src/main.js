import menu from './menu.json' assert {type: 'json'};
 /* import './main.scss';
import './assets/fonts/Marcheile-Bold-Condensed.woff';
import './assets/fonts/Marcheile-Bold-Condensed.woff2';*/
/* DO NOT EDIT ABOVE THIS LINE. You can start editing here. */

// JSON Menu

  


let i = 0;
var content = "";
while (i < menu.menuList.length) {
  var description = menu.menuList[i].menuDescription;
 /* var n = number.toString();  */
  var name = menu.menuList[i].menuName;
  var image = menu.menuList[i].image;
  var prize = menu.menuList[i].menuPrice;
  content = content+"<div class='menu-item'><div class='image'><img src='"+image+"' alt='"+name+"'></div><div class='item-text'><div class='item-title'><h3 class='item'>"+name+"</h3><div class='prize'>"+prize+"$</div></div><div class='description'><p>"+description+"</p></div></div></div>";


  document.getElementById("content").innerHTML = content;

  i++

}



// Scroll Menu Fixed


let scrollpos = window.scrollY
  const header = document.getElementById("header")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("fixed")
  const remove_class_on_scroll = () => header.classList.remove("fixed")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= 300) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos);
  });



/**
 * === CODE HINT ===
 * You can write your own js code here, also you can import other files.
 * If you want to split your code into multiple files, then import them here this way:
 * import ./path/to/your/file.js
 *
 */


