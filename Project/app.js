const arrows = document.querySelectorAll(".arrow");
const gamelists = document.querySelectorAll(".newlist");

arrows.forEach((arrow, i) => {
  const itemNumber = gamelists[i].querySelectorAll("img").length;
  let countnumber = 0;
  arrow.addEventListener("click", () => {
  const ratio = Math.floor(window.innerWidth/200);
    countnumber++;
    if (itemNumber - countnumber >= ratio - 1 ){
      gamelists[i].style.transform = `translateX(${gamelists[i].computedStyleMap().get("transform")[0].x.value-257}px)`;
    }
    else {
      gamelists[i].style.transform = "translateX(0)";
      countnumber =0;
    }
    
  });
});





const ball = document.querySelector(".cercle");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar,.sidenav,.nav-item,.color,.nav-link,.newrelease,.haomi,.profilet,.pro,.fa-greater-than ,.name,.price"
);
const yoElement = document.querySelector(".yo");
const bgElement = document.querySelectorAll(".haomi");


ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("activ");

  });
  bgElement.forEach((item)=>{
    item.classList.toggle("text-dark");
  })
  yoElement.classList.toggle("lol");
  ball.classList.toggle("activ");

});