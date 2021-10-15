const getMons = () => {
  let pokeArray = [];
  for (let i = 0; i < 18; i++) {
    let pokeIndex = Math.floor(Math.random() * 898);
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`,

      method: "get",
    }).then((response) => {
      pokeArray.push(response.sprites.front_shiny);
      pokeArray.map((poke) => {
        $(`#mon${i}`).attr("src", poke);
      });
    });
  }
};
getMons();

$("#ham-button").on("click", function () {
  $(".nav-items").toggle();
  $("div#projects-list").toggleClass(".after-nav",true);
  // if($(".nav-items").css("display") ==="block"){
  //   console.log($(".nav-items").css("display"))
  //   $(".after-nav").css("padding-top","1000")
  //   console.log("hi mom")
  // }

});
let widthMatch = window.matchMedia("(min-width: 768px)");
widthMatch.addEventListener('change', function(mm) {
  
  if (mm.matches) {
      $(".nav-items").css("display","block");

  }
  else {
      // it no longer matches the media query
      // remove the event listener
  }
});
let WM = window.matchMedia("(max-width: 760px");
WM.addEventListener('change', function(mm){
  if(mm.matches) {
    $(".nav-items").css("display","none");
  }
})
