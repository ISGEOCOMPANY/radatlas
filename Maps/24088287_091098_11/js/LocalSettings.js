LocalSettings = Class.extend({
    _jsonDataOnEachLayel: null,
    _jsonTileLayerDataOnEachLayel: null,
    _NRZFolderName: "_tiles/_eng/",
    _VectorLayerFolderName: "_geojson/",
    _mapSettings: {},
    init: function (aMapSettings, aJsonDataOnEachLayel, aJsonTileLayerDataOnEachLayel, aLabelLayerDataOnEachLayel) {
        this._mapSettings = aMapSettings;
        this._jsonDataOnEachLayel = aJsonDataOnEachLayel;
        this._jsonTileLayerDataOnEachLayel = aJsonTileLayerDataOnEachLayel;
        this._labelLayerDataOnEachLayel = aLabelLayerDataOnEachLayel;
        this._NRZFolderName = "_tiles/";
        this.setSettings(this);
    },
    setSettings: function (aSettings) {
        this._mapSettings.Zoom = 6;
        this._mapSettings.Center = [48.5, 31];

        //нарезка по умолчанию
        this._mapSettings.DefaultNRZLayer = new L.TileLayer(this._NRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "Ґрунти",
                mapName_rus: "Почвы",
                mapName_eng: "Soils",
                maxZoom: 8,
                minZoom: 5
            });
			
        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_11_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "SoilGroupU",
                            "descr": "Група грунтів",
                            "type": 1
                        },
                        {
                            "propName": "SoilU",
                            "descr": "Тип грунту",
                            "type": 1
                        }
                    ],
                    rus: [
                        {
                            "propName": "SoilGroupR",
                            "descr": "Группа почв",
                            "type": 1
                        },
                        {
                            "propName": "SoilR",
                            "descr": "Тип почвы",
                            "type": 1
                        }
                    ],
                    eng: [
                        {
                            "propName": "SoilGroupE",
                            "descr": "Soil group",
                            "type": 1
                        },
                        {
                            "propName": "SoilE",
                            "descr": "Soil type",
                            "type": 1
                        }
                    ]
                },
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties:
                                {
                                    ukr: [
                                    {
                                        "propName": "SoilGroupU",
                                        "descr": "Група грунтів",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "SoilU",
                                        "descr": "Тип грунту",
                                        "IsHint": true,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "SoilGroupU",
                                        "descr": "Группа почв",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "SoilU",
                                        "descr": "Тип почвы",
                                        "IsHint": true,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "SoilGroupE",
                                        "descr": "Soil group",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "SoilE",
                                        "descr": "Soil type",
                                        "IsHint": true,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Ґрунти",
                geoJsonName_rus: "Почвы",
                geoJsonName_eng: "Soils"
            }));

        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_11_02,
            {
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties:
                                {
                                    ukr: [
                                    {
                                        "propName": "TypeU",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "TypeR",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "TypeE",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Механічний склад та засолення",
                geoJsonName_rus: "Гранулометрический состав и засоление",
                geoJsonName_eng: "Mechanical composition and salinization"
            }));

        //Дополнительный векторный слой
        this._mapSettings.OptionalGeoJsonLayers.push(new L.geoJson(Layer_ExclZone,
            {
                style: {
                    "fillColor": "#8A0868",
                    "fillOpacity": 0.5,
                    "opacity": 0
                },                
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties:
                                {
                                    ukr: [
                                    {
                                        "propName": "UkrName",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "RusName",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "EngName",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Зона відчуження",
                geoJsonName_rus: "Зона отчуждения",
                geoJsonName_eng: "Exclusion zone"
            }));

        //Labels 6,7
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_6_7_z, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 6,
                        maxZoom: 7,
                        properties:
                            {
                                ukr:
                                {
                                    "propForLabel": "UkrName"
                                },
                                rus: {
                                    "propForLabel": "RusName"
                                },
                                eng:
                                {
                                    "propForLabel": "EngNameTr"
                                }
                            }
                    });
            }
        }));

        //Labels 8
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_8_z_Cont, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 8,
                        maxZoom: 8,
                        properties:
                            {
                                ukr:
                                {
                                    "propForLabel": "UkrName"
                                },
                                rus: {
                                    "propForLabel": "RusName"
                                },
                                eng:
                                {
                                    "propForLabel": "EngName_Tr"
                                }
                            }
                    });
            }
        }));

        //Labels 5
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_5_z, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 5,
                        maxZoom: 5,
                        properties:
                            {
                                ukr:
                                {
                                    "propForLabel": "UkrName"
                                },
                                rus: {
                                    "propForLabel": "RusName"
                                },
                                eng:
                                {
                                    "propForLabel": "EngNameTr"
                                }
                            }
                    });
            }
        }));
    },
    getSettings: function () {
        return this._mapSettings;
    }
});