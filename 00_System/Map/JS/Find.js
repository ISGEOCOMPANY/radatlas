L.Control.Find = L.Control.extend({
    options: {
        position: 'topleft',
        popups: true,
        clearBtnTitle: '',
        buttonTitle: '',
        valueTitle: '',
        layerTitle: '',
        propTitle: '',
        conditionTitle: '',
        stringConditionText: '',
        rangeConditionText: ''
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
        this._active = false;
        this._markersIDs = [];
        this._conditions =
            {
                range: {
                    text: this.options.rangeConditionText,
                    value: "range",
                    types: "2"
                },
                str: {
                    text: this.options.stringConditionText,
                    value: "str",
                    types: "1,2"
                },
                more: {
                    text: ">",
                    value: "more",
                    types: "3"
                },
                less: {
                    text: "<",
                    value: "less",
                    types: "3"
                },
                equal: {
                    text: "=",
                    value: "equal",
                    types: "3"
                },
                lessequal: {
                    text: "<=",
                    value: "lessequal",
                    types: "3"
                },
                moreequal: {
                    text: ">=",
                    value: "moreequal",
                    types: "3"
                }
            };
        this._hints =
            {
                ukr: {
                    layer: "Шар: ",
                    attr: "Властивість: ",
                    cond: "Умова: "
                },
                rus: {
                    layer: "Слои: ",
                    attr: "Свойство: ",
                    cond: "Уловие: "
                },
                eng: {
                    layer: "Layer: ",
                    attr: "Attribute: ",
                    cond: "Condition: "
                }
            };
    },

    getLine: function () { return this._line; },

    onAdd: function (map) {
        map.findControl = this;
        var className = 'leaflet-control-find',
            container = this._container = L.DomUtil.create('div', className);

        function cb() {
            if (this._active) {
                this._find_disable();
                L.DomUtil.removeClass(this._link, 'leaflet-control-find-edit-on');
            }
            else {
                this._find_enable();
                L.DomUtil.addClass(this._link, 'leaflet-control-find-edit-on');
            }
        }

        var link = this._link = this._createButton(this.options.buttonTitle, 'leaflet-control-find leaflet-control-find-edit', container, cb, this);
        var findDiv = this._findDiv = L.DomUtil.create('div', 'leaflet-control-find-listContainer', container);

        var layerList = this._layerList = this._createList('Layers', 'leaflet-control-find-list', findDiv, this._layerListChanged, this);
        this._createBR(findDiv);

        var layerPropList = this._layerPropList = this._createList('Properties', 'leaflet-control-find-list', findDiv, this._layerPropListChanged, this);
        this._createBR(findDiv);

        var conditionList = this._conditionList = this._createList('conditionList', 'leaflet-control-find-list', findDiv, this._conditionListChanged, this);
        this._createBR(findDiv);

        var rangesList = this._rangesList = this._createList('rangesList', 'leaflet-control-find-listRange prop-inactive', findDiv, this._rangesListChanged, this);

        var text = this._text = this._createInput(this.options.valueTitle, 'leaflet-control-find-text', findDiv, this._find, this);

        var btnFind = this._btnFind = this._createButton(this.options.buttonTitle, 'leaflet-control-find leaflet-control-find-btn', findDiv, this._find, this);
        var btnClear = this._btnClear = this._createButton(this.options.clearBtnTitle, 'leaflet-control-find leaflet-control-clear-btn', findDiv, this._clearRes, this);

        this._find_disable();
        return container;
    },
    _rangesListChanged: function () {
        this._rangesList.title = this._rangesList.value;
    },
    _conditionListChanged: function () {
        this._conditionList.title = this._conditions[this._conditionList.value] != null ? this._hints[this._map.options.Language].cond + this._conditions[this._conditionList.value].text : this.options.conditionTitle;
        var lRangesHTML = "";
        var lIsRanges = false;
        if (this._conditionList.value == this._conditions["range"].value && this._selectedLayer
            && this._selectedLayer.options.FindProperties[this._map.options.Language]) {
            for (var lProp in this._selectedLayer.options.FindProperties[this._map.options.Language]) {
                if (this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].propName == this._selectedProp
                    && this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].ranges) {
                    lIsRanges = true;
                    var lRanges = this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].ranges;
                    for (var lRange in lRanges) {
                        lRangesHTML += "<option value='" + lRanges[lRange] + "'>" + lRanges[lRange] + "</option>";
                    }
                    break;
                }
            }
            this._rangesList.innerHTML = lRangesHTML;
            this._rangesList.title = this._rangesList.value;
        }

        if (lIsRanges) {
            L.DomUtil.removeClass(this._rangesList, 'prop-inactive');
            L.DomUtil.addClass(this._text, 'prop-inactive');
        }
        else {
            L.DomUtil.addClass(this._rangesList, 'prop-inactive');
            L.DomUtil.removeClass(this._text, 'prop-inactive');
        }
    },
    _layerPropListChanged: function () {

        L.DomUtil.addClass(this._rangesList, 'prop-inactive');
        L.DomUtil.removeClass(this._text, 'prop-inactive');

        var lActiveLayers = this._map._controlLayer.getActiveOverlayLayers();

        lFindProp = lActiveLayers[this._layerList.value].layer.options.FindProperties[this._map.options.Language];

        this._layerPropList.title = this._layerPropList.value != "-1" ? this._hints[this._map.options.Language].attr + this._layerPropList.value : this.options.propTitlelayer;

        this._selectedProp = this._layerPropList.value;

        var lIsHasRange = false;

        var lType;

        for (var lProp in this._selectedLayer.options.FindProperties[this._map.options.Language]) {
            if (this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].propName == this._selectedProp) {
                this._layerPropList.title = this._hints[this._map.options.Language].attr + this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].descr;
                lType = this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].type;
                if (this._selectedLayer.options.FindProperties[this._map.options.Language][lProp].ranges) {
                    lIsHasRange = true;
                }
            }
        }

        var lCondHTML = lType != 1 ? "<option value='-1'>" + this.options.conditionTitle + "</option>" : "";
        for (var lCondId in this._conditions) {
            if (this._conditions[lCondId].types.indexOf(lType) < 0 || (lType == 2 && !lIsHasRange)) {
                continue;
            }
            lCondHTML += "<option value='" + this._conditions[lCondId].value + "'>" + this._conditions[lCondId].text + "</option>";
        }
        this._conditionList.innerHTML = lCondHTML;
    },
    _layerListChanged: function () {

        L.DomUtil.addClass(this._rangesList, 'prop-inactive');
        L.DomUtil.removeClass(this._text, 'prop-inactive');
        this._conditionList.innerHTML = "<option value='-1'>" + this.options.conditionTitle + "</option>";

        var lFindProp;
        var lPropHtml = "<option value='-1'>" + this.options.propTitle + "</option>";
        try {
            var lActiveLayers = this._map._controlLayer.getActiveOverlayLayers();
            this._selectedLayer = lActiveLayers[this._layerList.value].layer;
            lFindProp = lActiveLayers[this._layerList.value].layer.options.FindProperties[this._map.options.Language];
            for (var lFindPropId in lFindProp) {
                lPropHtml += "<option value='" + lFindProp[lFindPropId].propName + "'>" + lFindProp[lFindPropId].descr + "</option>";
            }
            this._layerPropList.innerHTML = lPropHtml;
            this._layerList.title = lActiveLayers[this._layerList.value] != null ? this._hints[this._map.options.Language].layer + lActiveLayers[this._layerList.value].name : this.options.layerTitle;
        }
        catch (Error) {
            this._layerPropList.innerHTML = lPropHtml;
            this._layerList.title = this.options.layerTitle;
        }
    },

    _createBR: function (container) {
        L.DomUtil.create('br', '', container);
    },

    _createList: function (title, className, container, fn, context) {
        var lSelect = L.DomUtil.create('select', className, container);
        lSelect.title = title;
        L.DomEvent
            .addListener(lSelect, 'click', L.DomEvent.stopPropagation)
            .addListener(lSelect, 'click', L.DomEvent.preventDefault)
            .addListener(lSelect, 'change', fn, context);
        L.DomEvent.disableClickPropagation(lSelect);

        return lSelect;
    },

    _createInput: function (title, className, container, fn, context) {
        var link = L.DomUtil.create('input', className, container);
        //link.href = '#';
        link.title = title;

        L.DomEvent
            .addListener(link, 'click', L.DomEvent.stopPropagation)
            .addListener(link, 'click', L.DomEvent.preventDefault)
            .addListener(link, 'keyup', fn, context);

        L.DomEvent.disableClickPropagation(link);

        return link;
    },

    _createButton: function (title, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = title;

        L.DomEvent.addListener(link, 'click', fn, context);
        L.DomEvent.disableClickPropagation(link);

        return link;
    },

    onRemove: function (map) {
        this._find_disable();
    },

    _find_enable: function () {
        var overlayLayers = this._map._controlLayer.getActiveOverlayLayers();
        var lLayersChooseHTML = "<option value='-1'>" + this.options.layerTitle + "</option>";
        var lLayerName = "";
        var lLayersHtml = "";
        var lCountLayers = 0;
        for (var overlayId in overlayLayers) {
            if (!overlayLayers[overlayId].layer.options.FindProperties || !overlayLayers[overlayId].layer.options.FindProperties[this._map.options.Language]) {
                continue;
            }
            lLayersHtml += "<option value='" + overlayLayers[overlayId].layer._leaflet_id + "'>" + overlayLayers[overlayId].name + "</option>";
            lCountLayers++;
            lLayerName = overlayLayers[overlayId].name;
        }

        this._layerList.innerHTML = lCountLayers > 1 ? lLayersChooseHTML + lLayersHtml : lLayersHtml;
        this._layerList.title = lCountLayers > 1 ? this.options.layerTitle : this._hints[this._map.options.Language].layer + lLayerName;

        var lCondHTML = "<option value='-1'>" + this.options.conditionTitle + "</option>";
        this._conditionList.innerHTML = lCondHTML;
        this._conditionList.title = this.options.conditionTitle;

        this._layerPropList.innerHTML = "<option value='-1'>" + this.options.propTitle + "</option>";
        this._layerPropList.options.title = this.options.propTitle;

        this._text.value = "";

        L.DomUtil.addClass(this._link, 'leaflet-control-find-active');
        L.DomUtil.addClass(this._rangesList, 'prop-inactive');
        L.DomUtil.removeClass(this._text, 'prop-inactive');
        this._container.appendChild(this._findDiv);
        this._layerList.focus();
        this._active = true;
        if (lCountLayers == 1) {
            this._layerListChanged();
        }
    },

    _find_disable: function () {
        this._container.removeChild(this._findDiv);
        L.DomUtil.removeClass(this._link, 'leaflet-control-find-active');
        this._active = false;
        this._resetStyle();
    },

    _find: function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13) || e.currentTarget.tagName == "A") {

            if (this._text.value == "" && e.currentTarget.tagName != "A") {
                this._resetStyle();
                return;
            }

            var obj = this._map._layers;
            var lCond = this._conditionList.value;
            var lProperty = this._layerPropList.value;
            var lLayer = this._selectedLayer != null ? this._selectedLayer.options["geoJsonName_" + this._selectedLayer._map.options.Language] : null;
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (obj[i].feature && obj[i].feature.properties
                    && obj[i].options.FindProperties
                    && obj[i].options.FindProperties[this._map.options.Language]
                    && this._selectedLayer
                    && obj[i].options["geoJsonName_" + this._selectedLayer._map.options.Language] == lLayer
                    && lCond != -1
                    && (lProperty != "" && lProperty != "-1")) {

                    if (obj[i].options.style == null) {
                        obj[i].setStyle(MAP._mapSettings._styleOpacity);
                    }
                    else {
                        obj[i].setStyle(obj[i].options.style);
                    }

                    if (obj[i].options) {
                        obj[i].options.IsFinded = false;
                    }
                    else {
                        obj[i].options = { "IsFinded": false };
                    }
                    obj[i].options.FindedText = "";
                    for (var lProp in obj[i].options.FindProperties[this._map.options.Language]) {
                        if (obj[i].options.FindProperties[this._map.options.Language][lProp].propName != lProperty) {
                            continue;
                        }
                        var lVal;
                        var lFindVal;
                        try {
                            switch (lCond) {
                                case "more": {
                                    lVal = parseFloat(obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName]);
                                    lFindVal = parseFloat(this._text.value);
                                    if (!isNaN(lVal) && lVal > lFindVal) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                                case "less": {
                                    lVal = parseFloat(obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName]);
                                    lFindVal = parseFloat(this._text.value);
                                    if (!isNaN(lVal) && lVal < lFindVal) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                                case "equal": {
                                    lVal = parseFloat(obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName]);
                                    lFindVal = parseFloat(this._text.value);
                                    if (!isNaN(lVal) && lVal == lFindVal) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                                case "lessequal": {
                                    lVal = parseFloat(obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName]);
                                    lFindVal = parseFloat(this._text.value);
                                    if (!isNaN(lVal) && lVal <= lFindVal) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                                case "moreequal": {
                                    lVal = parseFloat(obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName]);
                                    lFindVal = parseFloat(this._text.value);
                                    if (!isNaN(lVal) && lVal >= lFindVal) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                                case "str": {
                                    lVal = obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName];
                                    if (lVal && lVal.toUpperCase().indexOf(this._text.value.toUpperCase()) >= 0) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                                case "range": {
                                    lVal = obj[i].feature.properties[obj[i].options.FindProperties[this._map.options.Language][lProp].propName];
                                    if (lVal && lVal.toUpperCase() == this._rangesList.value.toUpperCase()) {
                                        if (obj[i].options) {
                                            obj[i].options.IsFinded = true;
                                            //obj[i].options.FindedText += "|||" + obj[i].options.FindProperties[this._map.options.Language][lProp].propName + "|||" + lVal + "<br />";
                                        }
                                        else {
                                            obj[i].options = { "IsFinded": true };
                                        }
                                        obj[i].setStyle(MAP._mapSettings._styleFindObj);
                                    }
                                    break;
                                }
                            }
                        }
                        catch (Error) {
                            continue;
                        }
                    }
                }
            }
        }
    },
    _resetStyle: function () {
        var obj = this._map._layers;
        for (var i in this._map._layers) {
            if (obj[i].feature && obj[i].feature.properties) {
                if (obj[i].options.style == null) {
                    obj[i].setStyle(MAP._mapSettings._styleOpacity);
                }
                else {
                    obj[i].setStyle(obj[i].options.style);
                }
                if (obj[i].options) {
                    obj[i].options.IsFinded = false;
                }
                else {
                    obj[i].options = { "IsFinded": true };
                }
            }
        }
    },
    _clearRes: function () {
        this._resetStyle();
        this._text.value = "";
        //this._conditionList.value = "-1";
        this._conditionList.selectedIndex = 0;
        this._conditionListChanged();
    }
});
