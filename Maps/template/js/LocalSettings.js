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
        this._mapSettings.MapZone = 2;

        //нарезка по умолчанию
        this._mapSettings.DefaultNRZLayer = new L.TileLayer(this._NRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "",
                mapName_rus: "",
                mapName_eng: "",
                maxZoom: 8,
                minZoom: 5
            });
		//Дополнительная нарезка
		this._mapSettings.OptionalNRZLayers.push(new L.TileLayer(OptionalNRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "",
                mapName_rus: "",
                mapName_eng: "",
                maxZoom: 8,
                minZoom: 5
            }));
			
        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_57_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "propName1",
                            "descr": "",
                            "type": 2,
                            "ranges": [
                                 "< 0.04",
                                "0.04 - 0.1",
                                "0.1 - 0.2",
                                "0.2 - 0.4",
                                "0.4 - 1",
                                "1 - 2",
                                "2 - 4",
                                "4 - 10",
                                "> 10"
                            ]
                        },
                        {
                            "propName": "propName2",
                            "descr": "",
                            "type": 2
                        }
                    ],
                    rus: [
                        {
                            "propName": "propName1",
                            "descr": "",
                            "type": 2
                        },
                        {
                            "propName": "propName2",
                            "descr": "",
                            "type": 2
                        }
                    ],
                    eng: [
                        {
                            "propName": "propName1",
                            "descr": "",
                            "type": 2
                        },
                        {
                            "propName": "propName2",
                            "descr": "",
                            "type": 2
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
                                        "propName": "propName1",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "propName2",
                                        "descr": "",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "propName1",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "propName2",
                                        "descr": "",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "propName1",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "propName2",
                                        "descr": "",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "",
                geoJsonName_rus: "",
                geoJsonName_eng: ""
            }));

        //Дополнительный векторный слой
        this._mapSettings.OptionalGeoJsonLayers.push(new L.geoJson(Layer_ExclZone,
            {
                style: {
                    "fillColor": "#8A0868",
                    "fillOpacity": 1,
                    "opacity": 0
                },
                FindProperties: {
                    ukr: [
                        {
                            "propName": "propName1",
                            "descr": "",
                            "type": 2
                        },
                        {
                            "propName": "propName2",
                            "descr": "",
                            "type": 2
                        }
                    ],
                    rus: [
                        {
                            "propName": "propName1",
                            "descr": "",
                            "type": 2
                        },
                        {
                            "propName": "propName2",
                            "descr": "",
                            "type": 2
                        }
                    ],
                    eng: [
                        {
                            "propName": "propName1",
                            "descr": "",
                            "type": 2
                        },
                        {
                            "propName": "propName2",
                            "descr": "",
                            "type": 2
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
                                        "propName": "propName2",
                                        "descr": "",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "propName2",
                                        "descr": "",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "propName2",
                                        "descr": "",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "",
                geoJsonName_rus: "",
                geoJsonName_eng: ""
            }));

        //Слой подписей
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
    },
    getSettings: function () {
        return this._mapSettings;
    }
});