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

        //Nrz
        this._mapSettings.DefaultNRZLayer = new L.TileLayer(this._NRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "Забруднення території України стронцієм-90 (станом на 1 липня 1985 року)",
                mapName_rus: "Загрязнение территории Украины стронцием-90 (по состоянию на 1 июля 1985 года)",
                mapName_eng: "Contamination of the territory of Ukraine by strontium-90 (as of July 1, 1985)",
                maxZoom: 7,
                minZoom: 5
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_72_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Рівень забруднення, кБк/м2",
                            "type": 2,
                            "ranges": [
                                 "< 1",
                                "1 - 1.5",
                                "1.5 - 2",
                                "2 - 2.5",
                                "2.5 - 3",
                                "> 3"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Рівень забруднення, Кі/км2",
                            "type": 2,
                            "ranges": [
                                 "< 0.027",
                                "0.027 - 0.04",
                                "0.04 - 0.054",
                                "0.054 - 0.067",
                                "0.067 - 0.081",
                                "> 0.081"
                            ]
                        }
                    ],
                    rus: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Уровень загрязнения, кБк/м2",
                            "type": 2,
                            "ranges": [
                                 "< 1",
                                "1 - 1.5",
                                "1.5 - 2",
                                "2 - 2.5",
                                "2.5 - 3",
                                "> 3"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Уровень загрязнения, Ки/км2",
                            "type": 2,
                            "ranges": [
                                 "< 0.027",
                                "0.027 - 0.04",
                                "0.04 - 0.054",
                                "0.054 - 0.067",
                                "0.067 - 0.081",
                                "> 0.081"
                            ]
                        }
                    ],
                    eng: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Contamination level, kBq/m2",
                            "type": 2,
                            "ranges": [
                                 "< 1",
                                "1 - 1.5",
                                "1.5 - 2",
                                "2 - 2.5",
                                "2.5 - 3",
                                "> 3"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Contamination level, Ci/km2",
                            "type": 2,
                            "ranges": [
                                 "< 0.027",
                                "0.027 - 0.04",
                                "0.04 - 0.054",
                                "0.054 - 0.067",
                                "0.067 - 0.081",
                                "> 0.081"
                            ]
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
                                        "propName": "Lvl_KBq_m2",
                                        "descr": "Рівень забруднення, кБк/м2",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Lvl_CI_km2",
                                        "descr": "Рівень забруднення, Кі/км2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "Lvl_KBq_m2",
                                        "descr": "Уровень загрязнения, кБк/м2",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Lvl_CI_km2",
                                        "descr": "Уровень загрязнения, Ки/км2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "Lvl_KBq_m2",
                                        "descr": "Contamination level, kBq/m2",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Lvl_CI_km2",
                                        "descr": "Contamination level, Ci/km2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Щільність забруднення стронцієм-90",
                geoJsonName_rus: "Плотность загрязнения стронцием-90",
                geoJsonName_eng: "Contamination density by strontium-90 "
            }));

        //GeoJson
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

        //Label layer
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