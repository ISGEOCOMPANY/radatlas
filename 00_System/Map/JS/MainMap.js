var MAP;
$(window).load(function () {
    MAP = new MainMap(Language, IsLocal);
    var lMapSettings;
    lMapSettings = new LocalSettings(MAP._mapSettings, MAP.jsonDataOnEachLayel, MAP.jsonTileLayerDataOnEachLayel, MAP.labelLayerDataOnEachLayel);
    MAP.initSettings(lMapSettings.getSettings());
});


MainMap = Class.extend({
    _map: null,
    _controlLayer: null,
    _mapSettings: {
        isMobile: {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        },
        MapZone: 1,
        Language: null,
        Zoom: 6,
        Center: [48.5, 31],
        //Attribution_ukr: "&copy;2014 Інтелектуальні системи ГЕО, KyivGeoInformatika",
        //Attribution_rus: "&copy;2014 Интелектуальные системы ГЕО, KyivGeoInformatika",
        //Attribution_eng: "&copy;2014 Intelligence Systems Geo Ltd, KyivGeoInformatika",
        Attribution_ukr: "",
        Attribution_rus: "",
        Attribution_eng: "",
        //NRZ layers
        DefaultNRZLayer: null,
        OptionalNRZLayers: [],
        //KML layers
        DefaultKMLLayers: [],
        OptionalKMLLayers: [],
        //GeoJson layers
        DefaultGeoJsonLayers: [],
        OptionalGeoJsonLayers: [],

        LabelLayers: [],

        MapName: location.pathname.split("/").pop().split(".")[0],
        ZoomPrevMap: null,
        CenterPrevMap: {},
        MapZonePrevMap: null,

        WindowLegend: {
            "closed": true
        },
        WindowDescr: {
            "closed": true
        },

        _styleOpacity: {
            "fillOpacity": 0,
            "opacity": 0,
            "weight": 1
        },
        _styleHover: {
            "fillOpacity": 0.1
        },
        _styleInfoObj: {
            "fillColor": "red",
            "fillOpacity": 0.4,
            "color": "red",
            "opacity": 0.9,
            "weight": 1
        },
        _styleFindObj: {
            "fillColor": "gray",
            "fillOpacity": 0.4,
            "color": "gray",
            "opacity": 0.9,
            "weight": 1
        },

        //Слои
        lareyrsTitle: {
            "ukr": "Шари",
            "rus": "Слои",
            "eng": "Layers"
        },
        //Зум -
        zoomOutTitle: {
            "ukr": "Зменшити",
            "rus": "Уменьшить",
            "eng": "Zoom out"
        },
        //Зум +
        zoomInTitle: {
            "ukr": "Збільшити",
            "rus": "Увеличить",
            "eng": "Zoom in"
        },
        //Расстояние
        DistanceTitle: {
            "ukr": "Виміряти відстань",
            "rus": "Измерить расстояние",
            "eng": "Measure the distance"
        },
        //Вся карта
        FullMapTitle: {
            "ukr": "Карта цілком",
            "rus": "Карта полностью",
            "eng": "Full map"
        },
        //Карта на весь экран
        FullMapScreenTitle: {
            "ukr": "Карта на весь екран",
            "rus": "Карта на весь экран",
            "eng": "Full screen"
        },
        //Описание карты
        DescrTitle: {
            "ukr": "Опис карти",
            "rus": "Описание карты",
            "eng": "Map descriptoin"
        },
        //Легенда
        LegendTitle: {
            "ukr": "Легенда",
            "rus": "Легенда",
            "eng": "Legend"
        },
        //Поиск
        FindTitle: {
            clearButton: {
                "ukr": "Очистити",
                "rus": "Очистить",
                "eng": "Clear"
            },
            findButton: {
                "ukr": "Пошук",
                "rus": "Поиск",
                "eng": "Find"
            },
            findInput: {
                "ukr": "Значення",
                "rus": "Значение",
                "eng": "Value"
            },
            listLayer: {
                "ukr": "Оберіть шар",
                "rus": "Выберите слой",
                "eng": "Choose layer"
            },
            listProp: {
                "ukr": "Оберіть властивість",
                "rus": "Выберите свойство",
                "eng": "Choose attribute"
            },
            listCondition: {
                "ukr": "Оберіть умову",
                "rus": "Выберите условие",
                "eng": "Choose condition"
            },
            stringConditionText: {
                "ukr": "рядок",
                "rus": "строка",
                "eng": "string"
            },
            rangeConditionText: {
                "ukr": "діапазон",
                "rus": "диапазон",
                "eng": "range"
            }
        }
    },
    init: function (aLang, aIsLocalMapVer) {
        this._mapSettings.Language = aLang;
    },
    initSettings: function (aMapSettings) {
        this._mapSettings = aMapSettings;

        this._map = L.map('map',
        {
            zoomControl: false,
            measureControl: true,
            MapName: this._mapSettings.MapName,
            Language: this._mapSettings.Language,
            showLegend: this.showLegend,
            showDescr: this.showDescr,
            mapLegDescrZIndex: 1
            //fullscreenControl: true
        });

        this.GetPrevOptions();

        this.initControls(aMapSettings);

        this.appendImgForMobile();
        this.SetHotKeys(this._map);
        this.syncTree();
    },
    appendImgForMobile: function () {
        var lImgEl = document.createElement('img');
        lImgEl.id = "LayerImg";
        lImgEl.src = "../../00_System/Map/Images/button_layers.png";
        lImgEl.className = "leaflet-buttons-control-img";
        document.getElementsByClassName('leaflet-control-layers-toggle')[0].appendChild(lImgEl);

        lImgEl = document.createElement('img');
        lImgEl.id = "DistanceImg";
        lImgEl.src = "../../00_System/Map/Images/button_ruler.png";
        lImgEl.className = "leaflet-buttons-control-img";
        document.getElementsByClassName('leaflet-control-distance leaflet-control-distance-edit')[0].appendChild(lImgEl);

        lImgEl = document.createElement('img');
        lImgEl.id = "ZoomIn";
        lImgEl.src = "../../00_System/Map/Images/button_zoom_in.png";
        lImgEl.className = "leaflet-buttons-control-img";
        document.getElementsByClassName('leaflet-control-zoom-in')[0].appendChild(lImgEl);

        lImgEl = document.createElement('img');
        lImgEl.id = "ZoomOut";
        lImgEl.src = "../../00_System/Map/Images/button_zoom_out.png";
        lImgEl.className = "leaflet-buttons-control-img";
        document.getElementsByClassName('leaflet-control-zoom-out')[0].appendChild(lImgEl);
    },
    syncTree: function () {
        var lMapName = document.createElement('div');
        lMapName.innerHTML = this._mapSettings.DefaultNRZLayer.options["mapName_" + this._mapSettings.Language];
        lMapName.id = "MapName-div";
        var lMapdiv = document.getElementById("map");
        document.body.insertBefore(lMapName, lMapdiv);

        //var treeVal = "../Maps/" + this._mapSettings.MapName.replace("ref_", "") + "/" + this._mapSettings.MapName + ".htm";
        var treeVal = "Maps/" + this._mapSettings.MapName.replace("ref_", "") + "/" + this._mapSettings.MapName + ".htm";
        openItemMenu(treeVal);
    },
    initControls: function (aMapSettings) {

        this._controlLayer = new L.Control.Layers({}, {});
        //Default NRZ layer
        if (this._mapSettings.DefaultNRZLayer != null) {
            this._mapSettings.DefaultNRZLayer.options.attribution = this._mapSettings["Attribution_" + this._mapSettings.Language];
            this._mapSettings.DefaultNRZLayer.addTo(this._map);
            this._controlLayer.addBaseLayer(this._mapSettings.DefaultNRZLayer, this._mapSettings.DefaultNRZLayer.options["mapName_" + this._mapSettings.Language]);
        }

        //Optional NRZ layers
        for (i = 0; i < this._mapSettings.OptionalNRZLayers.length; i++) {
            this._mapSettings.OptionalNRZLayers[i].options.attribution = this._mapSettings.Attribution;
            this._controlLayer.addBaseLayer(this._mapSettings.OptionalNRZLayers[i], this._mapSettings.OptionalNRZLayers[i].options["mapName_" + this._mapSettings.Language]);
        }
        //Default kml layers
        for (i = 0; i < this._mapSettings.DefaultKMLLayers.length; i++) {
            this._mapSettings.DefaultKMLLayers[i].addTo(this._map);
            this._controlLayer.addOverlay(this._mapSettings.DefaultKMLLayers[i], this._mapSettings.DefaultKMLLayers[i].options["kmlName_" + this._mapSettings.Language], false);
        }
        //Optional kml layers
        for (i = 0; i < this._mapSettings.OptionalKMLLayers.length; i++) {
            this._controlLayer.addOverlay(this._mapSettings.OptionalKMLLayers[i], this._mapSettings.OptionalKMLLayers[i].options["kmlName_" + this._mapSettings.Language]);
        }
        //Default geoJson layers
        for (i = 0; i < this._mapSettings.DefaultGeoJsonLayers.length; i++) {
            this._mapSettings.DefaultGeoJsonLayers[i].addTo(this._map);
            this._controlLayer.addOverlay(this._mapSettings.DefaultGeoJsonLayers[i], this._mapSettings.DefaultGeoJsonLayers[i].options["geoJsonName_" + this._mapSettings.Language], false);
        }
        //Optional geoJson layers
        for (i = 0; i < this._mapSettings.OptionalGeoJsonLayers.length; i++) {
            this._controlLayer.addOverlay(this._mapSettings.OptionalGeoJsonLayers[i], this._mapSettings.OptionalGeoJsonLayers[i].options["geoJsonName_" + this._mapSettings.Language]);
        }
        for (var i = 0; i < this._mapSettings.LabelLayers.length; i++) {
            this._mapSettings.LabelLayers[i].addTo(this._map);
        }

        this._map.addControl(this._controlLayer);
        this._map._controlLayer = this._controlLayer;

        //Zoom
        this._map.addControl(new L.Control.Zoom(
            {
                zoomInText: "",
                zoomOutText: "",
                zoomInTitle: this._mapSettings.zoomInTitle[this._mapSettings.Language],
                zoomOutTitle: this._mapSettings.zoomOutTitle[this._mapSettings.Language]
            }));

        //Distance
        this._map.addControl(new L.Control.Distance(
            {
                title: this._mapSettings.DistanceTitle[this._mapSettings.Language]
            }));

        //Find
        this._map.addControl(new L.Control.Find(
            {
                clearBtnTitle: this._mapSettings.FindTitle.clearButton[this._mapSettings.Language],
                buttonTitle: this._mapSettings.FindTitle.findButton[this._mapSettings.Language],
                valueTitle: this._mapSettings.FindTitle.findInput[this._mapSettings.Language],
                layerTitle: this._mapSettings.FindTitle.listLayer[this._mapSettings.Language],
                propTitle: this._mapSettings.FindTitle.listProp[this._mapSettings.Language],
                conditionTitle: this._mapSettings.FindTitle.listCondition[this._mapSettings.Language],
                stringConditionText: this._mapSettings.FindTitle.stringConditionText[this._mapSettings.Language],
                rangeConditionText: this._mapSettings.FindTitle.rangeConditionText[this._mapSettings.Language],
            }));

        //Scale
        //this._map.addControl(new L.Control.Scale());
        //Center map
        this._map.addControl(new L.Control.Button(
            {
                iconUrl: '../../00_System/Map/Images/button_stretch.png',
                text: '',
                position: 'topright',
                title: this._mapSettings.FullMapTitle[this._mapSettings.Language],
                onClick: function () {
                    if (aMapSettings.isMobile.any()) {
                        this._map.setView(aMapSettings.Center, aMapSettings.DefaultNRZLayer.options.minZoom);
                    }
                    else {
                        this._map.setView(aMapSettings.Center, aMapSettings.Zoom);
                    }
                }
            }));

        if (!aMapSettings.isMobile.any()) {
            this._map.addControl(new L.Control.Button(
                {
                    iconUrl: '../../00_System/Map/Images/button_fullscreen_on.png',
                    iconUrlClose: '../../00_System/Map/Images/button_fullscreen_off.png',
                    text: '',
                    position: 'topright',
                    title: this._mapSettings.FullMapScreenTitle[this._mapSettings.Language],
                    toggle: true,
                    onClick: function () {
                        try
                        {
                            //Для адаптивного дизайна
                            //------------
                            var lMenu = window.parent.document.getElementById('header');
                            var lMap = window.parent.document.getElementById('main');
                            lMenu.classList.contains("HiddenMenu") ? lMenu.classList.remove("HiddenMenu") : lMenu.classList.add("HiddenMenu");
                            lMap.classList.contains("FullMap") ? lMap.classList.remove("FullMap") : lMap.classList.add("FullMap");
                            //------------
                        }
                        catch (Error) {
                            //Для фреймсета
                            //------------
                            var maxsize = '275,*';
                            var minsize = '0,*';
                            nextsize = parent.frames['toc'].frameElement.parentElement.parentElement.cols;
                            if (nextsize == maxsize)
                                nextsize = minsize;
                            else
                                nextsize = maxsize;
                            parent.frames['toc'].frameElement.parentElement.parentElement.cols = nextsize;
                            //------------
                        }
                    }
                }))
        };

        //Map description in page
        this._map._btnDescr = new L.Control.LegDescrButton({
            iconUrl: '../../00_System/Map/Images/button_info.png',
            iconUrlClose: '../../00_System/Map/Images/button_info_on.png',
            text: '',
            title: this._mapSettings.DescrTitle[this._mapSettings.Language],
            toggle: true,
            iFrameSrc: "_legends_dscr/" + this._map.options.MapName.replace("ref_", "") + "_" + this._map.options.Language + "_descr.htm",
            window: this._mapSettings.WindowDescr,
            isMobile: this._mapSettings.isMobile.any()
        });
        this._map.addControl(this._map._btnDescr);
        if (this._mapSettings.WindowDescr.closed == "false") {
            this._map._btnDescr._btnClick();
        }

        //Map legend in page
        this._map._btnLegend = new L.Control.LegDescrButton({
            iconUrl: '../../00_System/Map/Images/button_legend.png',
            iconUrlClose: '../../00_System/Map/Images/button_legend_on.png',
            text: '',
            title: this._mapSettings.LegendTitle[this._mapSettings.Language],
            toggle: true,
            iFrameSrc: "_legends_dscr/" + this._map.options.MapName.replace("ref_", "") + "_" + this._map.options.Language + "_legend.htm",
            window: this._mapSettings.WindowLegend,
            isMobile: this._mapSettings.isMobile.any()
        });
        this._map.addControl(this._map._btnLegend);
        if (this._mapSettings.WindowLegend.closed == "false") {
            this._map._btnLegend._btnClick();
        }

        ////Map description
        //this._map.addControl(new L.Control.Button({
        //    iconUrl: '../../00_System/Map/Images/button_info.png',
        //    text: '',
        //    title: this._mapSettings.DescrTitle[this._mapSettings.Language],
        //    onClick: function () {
        //        this._map.options.showDescr("_legends_dscr/" + this._map.options.MapName + "_" + this._map.options.Language + "_descr.htm", 450, 450);
        //    }
        //}));
        ////Map legend
        //this._map.addControl(new L.Control.Button({
        //    iconUrl: '../../00_System/Map/Images/button_legend.png',
        //    text: '',
        //    title: this._mapSettings.LegendTitle[this._mapSettings.Language],
        //    onClick: function () {
        //        this._map.options.showLegend("_legends_dscr/" + this._map.options.MapName + "_" + this._map.options.Language + "_legend.htm", 450, 450);
        //    }
        //}));
    },
    showDescr: function (aDescrPage, aHeight, aWidth) {
        var left = (screen.width / 2) - aWidth / 2;
        var top = (screen.height / 2) - aHeight / 2;
        try {
            if (MAP._mapSettings.WindowDescr.closed == true || MAP._mapSettings.WindowDescr.window == null) {
                MAP._mapSettings.WindowDescr = window.open(aDescrPage.replace("ref_", ""), '', 'height=' + aHeight + ',width=' + aWidth + ',scrollbars=1,top=' + top + ', left=' + left);
            }
            else {
                MAP._mapSettings.WindowDescr.focus();
            }
        }
        catch (Exception) {
            MAP._mapSettings.WindowDescr = window.open(aDescrPage.replace("ref_", ""), '', 'height=' + aHeight + ',width=' + aWidth + ',scrollbars=1,top=' + top + ', left=' + left);
        }
    },
    showLegend: function (aLegendPage, aHeight, aWidth) {
        var left = (screen.width / 2) - aWidth / 2;
        var top = (screen.height / 2) - aHeight / 2;
        try {
            if (MAP._mapSettings.WindowLegend.closed == true || MAP._mapSettings.WindowLegend.window == null) {
                MAP._mapSettings.WindowLegend = window.open(aLegendPage.replace("ref_", ""), '', 'height=' + aHeight + ',width=' + aWidth + ',scrollbars=1,top=' + top + ', left=' + left);
            }
            else {
                MAP._mapSettings.WindowLegend.focus();
            }
        }
        catch (Exception) {
            MAP._mapSettings.WindowDescr = window.open(aDescrPage.replace("ref_", ""), '', 'height=' + aHeight + ',width=' + aWidth + ',scrollbars=1,top=' + top + ', left=' + left);
        }
    },
    GetPrevOptions: function () {
        var parameters = window.location.toString().split('?')[1];
        if (parameters != null) {
            for (var i = 0; i < parameters.toString().split('&').length; i++) {
                if (parameters.toString().split('&')[i].indexOf("centerlng") != -1) {
                    this._mapSettings.CenterPrevMap.lng = parseFloat(parameters.toString().split('&')[i].split('=')[1].replace("#", ""));
                }
                else if (parameters.toString().split('&')[i].indexOf("centerlat") != -1) {
                    this._mapSettings.CenterPrevMap.lat = parseFloat(parameters.toString().split('&')[i].split('=')[1].replace("#", ""));
                }
                else if (parameters.toString().split('&')[i].indexOf("zoom") != -1) {
                    this._mapSettings.ZoomPrevMap = parameters.toString().split('&')[i].split('=')[1].replace("#", "");
                }
                else if (parameters.toString().split('&')[i].indexOf("legend") != -1) {
                    this._mapSettings.WindowLegend.closed = parameters.toString().split('&')[i].split('=')[1].replace("#", "");
                }
                else if (parameters.toString().split('&')[i].indexOf("descr") != -1) {
                    this._mapSettings.WindowDescr.closed = parameters.toString().split('&')[i].split('=')[1].replace("#", "");
                }
                else if (parameters.toString().split('&')[i].indexOf("mapzone") != -1) {
                    this._mapSettings.MapZonePrevMap = parseFloat(parameters.toString().split('&')[i].split('=')[1].replace("#", ""));
                }
            }
        }

        if (this._mapSettings.CenterPrevMap.lat != null && this._mapSettings.CenterPrevMap.lng != null
            && this._mapSettings.MapZonePrevMap != null
            && this._mapSettings.MapZonePrevMap == this._mapSettings.MapZone) {
            var lZoom = null;
            if (this._mapSettings.ZoomPrevMap > this._mapSettings.DefaultNRZLayer.options.maxZoom) {
                lZoom = this._mapSettings.DefaultNRZLayer.options.maxZoom;
            }
            else if (this._mapSettings.ZoomPrevMap < this._mapSettings.DefaultNRZLayer.options.minZoom) {
                lZoom = this._mapSettings.DefaultNRZLayer.options.minZoom;
            }
            else {
                lZoom = this._mapSettings.ZoomPrevMap;
            }

            //from queryString
            this._map.setView([this._mapSettings.CenterPrevMap.lat, this._mapSettings.CenterPrevMap.lng], lZoom);
        }
        else {
            //default
            if (this._mapSettings.isMobile.any()) {
                this._map.setView(this._mapSettings.Center, this._mapSettings.DefaultNRZLayer.options.minZoom);
            }
            else {
                this._map.setView(this._mapSettings.Center, this._mapSettings.Zoom);
            }
        }
        //--- Удалить, если показываем внутри страницы
        //if (this._mapSettings.WindowLegend.closed == "false") {
        //    this.showLegend("_legends_dscr/" + this._map.options.MapName + "_" + this._map.options.Language + "_legend.htm", 450, 450);
        //}
        //if (this._mapSettings.WindowDescr.closed == "false") {
        //    this.showDescr("_legends_dscr/" + this._map.options.MapName + "_" + this._map.options.Language + "_descr.htm", 450, 450);
        //}
        //---
    },
    SetHotKeys: function (aMap) {
        shortcut.add("Ctrl+Shift+1", function () {
            //aMap.options.showDescr("_legends_dscr/" + aMap.options.MapName + "_" + aMap.options.Language + "_descr.htm", 450, 450);
            //Внутри страницы
            aMap._btnDescr._btnClick();
        });
        shortcut.add("Ctrl+Shift+2", function () {
            //aMap.options.showLegend("_legends_dscr/" + aMap.options.MapName + "_" + aMap.options.Language + "_legend.htm", 450, 450);
            //Внутри страницы
            aMap._btnLegend._btnClick();
        });
    },
    jsonDataOnEachLayel: function (feature, layer, aSettings, aLayerSettings) {
        layer.LayerSettings = aSettings;
        if (layer.options.style == null) {
            layer.setStyle(aSettings._mapSettings._styleOpacity);
        }
        else {
            layer.setStyle(layer.options.style);
        }
        if (feature) {
            var popupString = "";
            var lLang = aSettings._mapSettings.Language;
            if (aLayerSettings != null && aLayerSettings.properties[lLang]) {
                try {
                    popupString = "<table class='infoTable'>";
                    for (var lProp in aLayerSettings.properties[lLang]) {
                        if (aLayerSettings.properties[lLang][lProp].IsInfo) {
                            layer.IsHasPopup = true;
                            popupString += "<tr><td>";
                            popupString += aLayerSettings.properties[lLang][lProp].descr;
                            popupString += "</td><td class='infoValue'>";
                            popupString += feature.properties[aLayerSettings.properties[lLang][lProp].propName];
                            popupString += "</td></tr>";
                        }
                    }
                    popupString += "</table>";
                }
                catch (err) {
                    popupString = err + "<br />" + "Проверьте описание атрибутов слоя!";
                }
            }

            if (layer.IsHasPopup) {
                layer.bindPopup(popupString).on("popupclose", function (e) {
                    if (layer.options.IsFinded) {
                        layer.setStyle(aSettings._mapSettings._styleFindObj);
                        return;
                    }
                    if (layer.options.style) {
                        layer.setStyle(layer.options.style);
                    }
                    else {
                        layer.setStyle(aSettings._mapSettings._styleOpacity);
                    }
                });
            }

            if (!this._mapSettings.isMobile.any()) {
                var lHintStr = "";
                if (aLayerSettings != null && aLayerSettings.properties[lLang]) {
                    try {
                        for (var lProp in aLayerSettings.properties[lLang]) {
                            if (aLayerSettings.properties[lLang][lProp].IsHint) {
                                //hint
                                if (aLayerSettings.properties[lLang][lProp].descr != "") {
                                    lHintStr += aLayerSettings.properties[lLang][lProp].descr + ": ";
                                }
                                lHintStr += feature.properties[aLayerSettings.properties[lLang][lProp].propName] + "<br />";
                            }
                        }
                    }
                    catch (err) {
                        lHintStr += err + "<br />" + "Проверьте описание атрибутов слоя!";
                    }
                }
                if (lHintStr != "") {
                    layer.bindLabel(lHintStr,
                    {
                        className: "label-objectHint",
                        direction: "right",
                        minZoom: layer.options.minZoom,
                        maxZoom: layer.options.maxZoom
                    });
                }
            }
        }

        if (!(layer instanceof L.Point)) {
            layer.on('click', function (e) {
                if (layer._map.distanceControl._active) {
                    layer._map.distanceControl._add_point(e);
                }
                    //else if (layer.options.IsFinded) {
                    //    return;
                    //}
                else if (layer.IsHasPopup) {
                    layer.setStyle(aSettings._mapSettings._styleInfoObj);
                }
            });
        }
    },
    labelLayerDataOnEachLayel: function (feature, layer, aSettings, aLayerSettings) {
        layer.options.radius = layer.options.weight = 0;

        var lZoomLbl = feature.properties.Zoom_lbl;
        if (lZoomLbl == "NotShow") {
            return;
        }
        var lDirection = "auto";
        switch (lZoomLbl) {
            case "5_6_Z_m_l_r_b": {
                lDirection = "right";
                break;
            }
            case "5_6_Z_m_l_r": {
                lDirection = "right";
                break;
            }
            case "5_6_Z_oth_l_d": {
                lDirection = "bottom";
                break;
            }
            case "5_6_Z_oth_l_u": {
                lDirection = "top";
                break;
            }
            case "5_6_Z_oth_l_r": {
                lDirection = "right";
                break;
            }
            case "5_6_Z_oth_l_l": {
                lDirection = "left";
                break;
            }
            case "8_z_Kyiv": {
                lDirection = "right";
                break;
            }
            case "8_z_Simf": {
                lDirection = "right";
                break;
            }
            case "8_z_obl_d": {
                lDirection = "bottom";
                break;
            }
            case "8_z_obl_u": {
                lDirection = "top";
                break;
            }
            case "8_z_obl_r": {
                lDirection = "right";
                break;
            }
            case "8_z_obl_l": {
                lDirection = "left";
                break;
            }
            case "8_z_cities_more100_r": {
                lDirection = "right";
                break;
            }
            case "12_13_14_z_city": {
                lDirection = "right";
                break;
            }
            case "13_14_z_vill": {
                lDirection = "right";
                break;
            }
            case "13_14_z_Dens1": {
                lDirection = "top";
                break;
            }
            case "13_14_z_Dens2": {
                lDirection = "bottom";
                break;
            }
            case "12_13_14_z_l_city": {
                lDirection = "left";
                break;
            }
            case "13_14_z_l_vill": {
                lDirection = "left";
                break;
            }
            case "Graph_8_z_l": {
                lDirection = "left";
                break;
            }
            case "13_14_z_r_blue": {
                lDirection = "right";
                break;
            }
            case "13_14_z_r_red": {
                lDirection = "right";
                break;
            }
            case "Graph_8_z_d": {
                lDirection = "bottom";
                break;
            }
            case "Med_7_8_z_blue_d": {
                lDirection = "bottom";
                break;
            }
            case "Med_7_8_z_red_u": {
                lDirection = "top";
                break;
            }
            case "NotShow": {
                lDirection = "right";
                break;
            }
            default: {
                lDirection = "center";
                break;
            }
        }
        layer.bindLabel(feature.properties[aLayerSettings.properties[aSettings._mapSettings.Language].propForLabel],
            {
                noHide: true,
                className: "label-" + lZoomLbl,
                direction: lDirection,
                minZoom: aLayerSettings.minZoom,
                maxZoom: aLayerSettings.maxZoom
            });
    }
});