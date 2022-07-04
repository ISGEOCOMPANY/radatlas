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
        this._mapSettings.Zoom = 13;
        this._mapSettings.Center = [51.52, 30.75];
        this._mapSettings.MapZone = 3;

        //Nrz
        this._mapSettings.DefaultNRZLayer = new L.TileLayer(this._NRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "Забруднення територій цезієм-137 (за матеріалами аерогаммазйомки), місто Славутич",
                mapName_rus: "Загрязнение территорий цезием-137 (по материалам аэрогаммасъемки). Город Славутич",
                mapName_eng: "Contamination of the territories by cesium-137 (according to materials of aerial gamma survey), Slavutych city",
                maxZoom: 14,
                minZoom: 12
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_71_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Рівень забруднення, кБк/м2",
                            "type": 2,
                            "ranges": [
                                "37 - 74",
                                "74 - 111",
                                "111 - 148",
                                "148 - 185",
                                "185 - 222",
                                "222 - 259",
                                "259 - 296",
                                "296 - 333",
                                "333 - 370",
                                "370 - 407",
                                "> 407"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Рівень забруднення, Кі/км2",
                            "type": 2,
                            "ranges": [
                                "< 2",
                                "2 - 3",
                                "3 - 4",
                                "4 - 5",
                                "5 - 6",
                                "6 - 7",
                                "7 - 8",
                                "8 - 9",
                                "9 - 10",
                                "10 - 11",
                                "> 11"
                            ]
                        }
                    ],
                    rus: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Уровень загрязнения, кБк/м2",
                            "type": 2,
                            "ranges": [
                                "37 - 74",
                                "74 - 111",
                                "111 - 148",
                                "148 - 185",
                                "185 - 222",
                                "222 - 259",
                                "259 - 296",
                                "296 - 333",
                                "333 - 370",
                                "370 - 407",
                                "> 407"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Уровень загрязнения, Ки/км2",
                            "type": 2,
                            "ranges": [
                                "< 2",
                                "2 - 3",
                                "3 - 4",
                                "4 - 5",
                                "5 - 6",
                                "6 - 7",
                                "7 - 8",
                                "8 - 9",
                                "9 - 10",
                                "10 - 11",
                                "> 11"
                            ]
                        }
                    ],
                    eng: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Contamination level, kBq/m2",
                            "type": 2,
                            "ranges": [
                                "37 - 74",
                                "74 - 111",
                                "111 - 148",
                                "148 - 185",
                                "185 - 222",
                                "222 - 259",
                                "259 - 296",
                                "296 - 333",
                                "333 - 370",
                                "370 - 407",
                                "> 407"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Contamination level, Ci/km2",
                            "type": 2,
                            "ranges": [
                                "< 2",
                                "2 - 3",
                                "3 - 4",
                                "4 - 5",
                                "5 - 6",
                                "6 - 7",
                                "7 - 8",
                                "8 - 9",
                                "9 - 10",
                                "10 - 11",
                                "> 11"
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
                geoJsonName_ukr: "Забруднення територій цезієм-137",
                geoJsonName_rus: "Загрязнение территорий цезием-137",
                geoJsonName_eng: "Contamination of the territories by cesium-137"
            }));

        //Label Dens1_13_14_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Dens1_13_14_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 13,
                        maxZoom: 14,
                        properties:
                            {
                                ukr:
                                {
                                    "propForLabel": "Name"
                                },
                                rus: {
                                    "propForLabel": "Name"
                                },
                                eng:
                                {
                                    "propForLabel": "Name"
                                }
                            }
                    });
            }
        }));

        //Label Dens2_13_14_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Dens2_13_14_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 13,
                        maxZoom: 14,
                        properties:
                            {
                                ukr:
                                {
                                    "propForLabel": "Name"
                                },
                                rus: {
                                    "propForLabel": "Name"
                                },
                                eng:
                                {
                                    "propForLabel": "Name"
                                }
                            }
                    });
            }
        }));
        //Label Settl_13_14_z_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_13_14_z_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 13,
                        maxZoom: 14,
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

        //Labels Settl_12_z_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_12_z_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 12,
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