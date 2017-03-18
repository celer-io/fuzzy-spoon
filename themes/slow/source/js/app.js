var jQuery = null;
window.onload=function(){
  var elements = document.getElementsByClassName("is-zoomable")
  var nZoomables = elements.length
  var zoomables = []

  function toggleZoomable(ev) {
    var truc = zoomables.find(function (zoomable) {
      return zoomable.id === ev.toElement.id
    })

    if (truc.active) truc.imgZoom.disable()
    else truc.imgZoom.enable()
    truc.active = !truc.active

    truc.imgZoom.active(truc.active)
  }

  for (var i = 0; i < nZoomables; i++) {
    elements[i].onclick = toggleZoomable
    zoomables.push({
      id: elements[i].id,
      element: elements[i],
      imgZoom: new ImageZoom('#'+elements[i].id),
      active: false
    })
  }

  setTimeout(function() {
    zoomables.forEach(function(zoomable) {
      zoomable.imgZoom.disable()
    })
  }, 500)
}
