('.anima-container').on('mousemove', function(e){
  //debugger;
  let screenX = e.originalEvent.screenX;
  const t = -(window.innerWidth / 2 - screenX);
  TweenMax.to(document.querySelectorAll('.anima-container .home_title span'), 1, {
      x : function(e, o){
          var i = 100 / (window.innerWidth / 2 / t),
          a = (window.innerWidth - o.clientWidth) / 2 * (i / 100);
          return a
      },
      force3D: !0
  });
});