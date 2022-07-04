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
        this._mapSettings.Zoom = 10;
        this._mapSettings.Center = [51.3, 29.78];
        this._mapSettings.MapZone = 2;

        //Nrz
        this._mapSettings.DefaultNRZLayer = new L.TileLayer(this._NRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "Забруднення зони відчуження цезієм-137 (станом на 10 травня 2014 року)",
                mapName_rus: "Загрязнение зоны отчуждения цезием-137 (по состоянию на 10 мая 2014 года)",
                mapName_eng: "Contamination of the exclusion zone by cesium-137 (as of May 10, 2014)",
                maxZoom: 12,
                minZoom: 9
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_120_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Рівень забруднення, кБк/м2",
                            "type": 2,
                            "ranges": [
                                "2 - 4",
                                "4 - 10",
                                "10 - 20",
                                "20 - 40",
                                "40 - 100",
                                "100 - 185",
                                "185 - 555",
                                "555 - 1480",
                                "1480 - 3700",
                                "3700 - 7400",
                                "7400 - 18500",
                                "> 18500"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Рівень забруднення, Кі/км2",
                            "type": 2,
                            "ranges": [
                                "0.054 - 0.1",
                                "0.1 - 0.27",
                                "0.27 - 0.54",
                                "0.54 - 1.08",
                                "1.08 - 2.7",
                                "2.7 - 5",
                                "5 - 15",
                                "15 - 40",
                                "40 - 100",
                                "100 - 200",
                                "200 - 500",
                                "> 500"
                            ]
                        }
                    ],
                    rus: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Уровень загрязнения, кБк/м2",
                            "type": 2,
                            "ranges": [
                                "2 - 4",
                                "4 - 10",
                                "10 - 20",
                                "20 - 40",
                                "40 - 100",
                                "100 - 185",
                                "185 - 555",
                                "555 - 1480",
                                "1480 - 3700",
                                "3700 - 7400",
                                "7400 - 18500",
                                "> 18500"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Уровень загрязнения, Ки/км2",
                            "type": 2,
                            "ranges": [
                                "0.054 - 0.1",
                                "0.1 - 0.27",
                                "0.27 - 0.54",
                                "0.54 - 1.08",
                                "1.08 - 2.7",
                                "2.7 - 5",
                                "5 - 15",
                                "15 - 40",
                                "40 - 100",
                                "100 - 200",
                                "200 - 500",
                                "> 500"
                            ]
                        }
                    ],
                    eng: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Contamination level, kBq/m2",
                            "type": 2,
                            "ranges": [
                                "2 - 4",
                                "4 - 10",
                                "10 - 20",
                                "20 - 40",
                                "40 - 100",
                                "100 - 185",
                                "185 - 555",
                                "555 - 1480",
                                "1480 - 3700",
                                "3700 - 7400",
                                "7400 - 18500",
                                "> 18500"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Contamination level, Ci/km2",
                            "type": 2,
                            "ranges": [
                                "0.054 - 0.1",
                                "0.1 - 0.27",
                                "0.27 - 0.54",
                                "0.54 - 1.08",
                                "1.08 - 2.7",
                                "2.7 - 5",
                                "5 - 15",
                                "15 - 40",
                                "40 - 100",
                                "100 - 200",
                                "200 - 500",
                                "> 500"
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
                geoJsonName_ukr: "Щільність забруднення цезієм-137",
                geoJsonName_rus: "Плотность загрязнения цезием-137",
                geoJsonName_eng: "Contamination density by cesium-137"
            }));

        //Label layer 9_10
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_9_10_z_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 9,
                        maxZoom: 10,
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

        //Labels 81_12
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_11_12_z_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 11,
                        maxZoom: 12,
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

    },
    getSettings: function () {
        return this._mapSettings;
    }
});