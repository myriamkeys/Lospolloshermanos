

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



  


  // JSON Menu

  


  let i = 0;
  var content = "";
 while (i < myJson.menuList.length) {
    var description = myJson.menuList[i].menuDescription;
   /* var n = number.toString();  */
    var name = myJson.menuList[i].menuName;
    var image = myJson.menuList[i].image;
    var prize = myJson.menuList[i].menuPrice;
    content = content+"<div class='menu-item'><div class='image'><img src='"+image+"' alt='"+name+"'></div><div class='item-text'><div class='item-title'><h3 class='item'>"+name+"</h3><div class='prize'>"+prize+"$</div></div><div class='description'><p>"+description+"</p></div></div></div>";


    document.getElementById("content").innerHTML = content;

    i++

 }

