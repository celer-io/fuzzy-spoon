var jQuery = null;
window.onload=function(){
  var elements = document.getElementsByClassName("is-zoomable")
  var nZoomables = elements.length
  var zoomables = []

  function toggleZoomable(ev) {
    var toggeled = zoomables.find(function (zoomable) {
      return zoomable.id === ev.target.id
    })
    toggeled.active ? toggeled.imgZoom.disable() : toggeled.imgZoom.enable()
    toggeled.active = !toggeled.active
  }

  for (var i = 0; i < nZoomables; i++) {
    elements[i].onclick = toggleZoomable
    zoomables.push({
      id: elements[i].id,
      // element: elements[i],
      // imgZoom: new ImageZoom('#'+elements[i].id),
      active: false
    })
  }

  zoomables.forEach(function(zoomable) {
    zoomable.imgZoom = new ImageZoom('#'+zoomable.id)
    setTimeout(function () {zoomable.imgZoom.disable()}, 500);
    // zoomable.imgZoom.disable()
  })

  // setTimeout(function() {
  //   zoomables.forEach(function(zoomable) {
  //     zoomable.imgZoom.disable()
  //   })
  // }, 500)
}
