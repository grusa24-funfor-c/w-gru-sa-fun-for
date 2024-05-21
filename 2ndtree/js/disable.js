function inhabilitar(){alert ('Sitio protegido. Por cualquier consulta utilizar el formulario de contacto.'); return false;} document.oncontextmenu=inhabilitar;
function disableselect(e){return false} function reEnable(){return true} document.onselectstart=new Function ("return false");if (window.sidebar){document.onmousedown=disableselectdocument.onclick=reEnable}
