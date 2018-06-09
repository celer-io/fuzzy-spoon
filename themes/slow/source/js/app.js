var jQuery = null;
window.onload=function(){
  var elements = document.getElementsByClassName("is-zoomable")
  var nZoomables = elements.length
  var zoomables = []
  console.log('elements :', elements)
  for (var i = 0; i < nZoomables; i++) {
    zoomables.push({
      id: elements[i].id,
      active: false
    })
  }

  zoomables.forEach(function(zoomable) {
    zoomable.imgZoom = new ImageZoom('#'+zoomable.id, {
      defaultDisabled: true,
      toggleOnClick: true
    });
  })
}
