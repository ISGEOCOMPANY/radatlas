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
                mapName_ukr: "Доза опромінення щитоподібної залози. П’ята вікова група (від 12 до 15 років на момент аварії)",
                mapName_rus: "Доза облучения щитовидной железы. Пятая возрастная группа (от 12 до 15 лет на момент аварии)",
                mapName_eng: "Thyroid gland irradiation dose. Fifth age group (from 12 to 15 years at the moment of accident)",
                maxZoom: 8,
                minZoom: 5
            });

        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_25_gr5_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "Interval",
                            "descr": "Доза опромінення щитоподібної залози, сГр",
                            "type": 2,
                            "ranges": [
                                 "0 - 5",
                                "5 - 10",
                                "10 - 25",
                                "25 - 50",
                                "50 - 100",
                                "100 - 250",
                                "250 - 750",
                                "> 750"
                            ]
                        },

                    ],
                    rus: [
                        {
                            "propName": "Interval",
                            "descr": "Доза облучения щитовидной железы, сГр",
                            "type": 2,
                            "ranges": [
                                "0 - 5",
                                "5 - 10",
                                "10 - 25",
                                "25 - 50",
                                "50 - 100",
                                "100 - 250",
                                "250 - 750",
                                "> 750"
                            ]
                        },
                    ],
                    eng: [
                        {
                            "propName": "Interval",
                            "descr": "Thyroid gland irradiation doses, cGy",
                            "type": 2,
                            "ranges": [
                                "0 - 5",
                                "5 - 10",
                                "10 - 25",
                                "25 - 50",
                                "50 - 100",
                                "100 - 250",
                                "250 - 750",
                                "> 750"
                            ]
                        },

                    ]
                },
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties:
                                {
                                    ukr: [
                                    {
                                        "propName": "Interval",
                                        "descr": "Доза опромінення щитоподібної залози, сГр",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    ],
                                    rus: [
                                    {
                                        "propName": "Interval",
                                        "descr": "Доза облучения щитовидной железы, сГр",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    ],
                                    eng: [
                                    {
                                        "propName": "Interval",
                                        "descr": "Thyroid gland irradiation doses, cGy",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Доза опромінення щитоподібної залози. П'ята вікова група",
                geoJsonName_rus: "Доза облучения щитовидной железы. Пятая возрастная группа",
                geoJsonName_eng: "Thyroid gland irradiation dose. Fifth age group"
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