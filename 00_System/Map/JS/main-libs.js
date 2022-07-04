var Version, IsLocal, Language;
try {
    Version = (parent != null && parent.Version != null) ? parent.Version : "?ver=1";
    IsLocal = (parent != null && parent.IsLocal != null) ? parent.IsLocal : true;
    Language = (parent != null && parent.Language != null) ? parent.Language : "eng";
}
catch (Error) {
    Version = "?ver=0";
    IsLocal = true;
    Language = "eng";
    console.log(Error.stack);
}

IncludeMapCSS("leaflet.css");
IncludeMapCSS("button.css");
IncludeMapCSS("distance.css");
IncludeMapCSS("Find.css");
//IncludeMapCSS("leaflet.fullscreen.css");
IncludeMapCSS("Maps.css");
IncludeMapCSS("leaflet.label.css");
IncludeMapCSS("LabelStyles.css");

includeScript("");

function IncludeMapCSS(aCSSFile) {
    var lMapCssFolder = "../../00_System/Map/CSS/";
    document.write('<link rel="stylesheet" type="text/css" href="' + lMapCssFolder + aCSSFile + Version + '"/>');
}

function IncludeMapJS(jsFile) {
    var lMapJSFolder = "../../00_System/Map/JS/";
    document.write('<script type="text/javascript" src="'
            + lMapJSFolder + jsFile + Version + '"></scr' + 'ipt>');
}

function IncludeJS(jsFile) {
    document.write('<script type="text/javascript" src="'
            + jsFile + Version + '"></scr' + 'ipt>');
}

function includeScript(url) {
    //if (!url)
    //    url = location.href.substring(0, location.href.lastIndexOf('/'));
    //if (url.charAt(url.length - 1) !== '/')
    //    url += '/';

    IncludeMapJS("jClassImp.js");
    IncludeMapJS("jquery-1.10.2.js");
    IncludeMapJS("leaflet.js");
    IncludeMapJS("leaflet.label.js");
    //IncludeMapJS("KML.js");
    //IncludeMapJS("Google.js");
    IncludeMapJS("Distance.js");
    IncludeMapJS("Find.js");
    IncludeMapJS("shortcut.js");
    //IncludeMapJS("Leaflet.fullscreen.min.js");
    IncludeMapJS("leaflet-button-control.js");
    IncludeMapJS("leaflet-leg_descr_button-control.js");
    //IncludeMapJS("TileLayer.GeoJSON.js");
    //IncludeMapJS("leaflet.ajax.min.js");
    IncludeMapJS("MainMap.js");

    //if (IsLocal) {
    IncludeJS("js/LocalSettings.js");
    //}
    //else {
    //    IncludeJS("js/Settings.js");
    //}

    IncludeJS("../../00_System/menu/xmlTree.js");
}
