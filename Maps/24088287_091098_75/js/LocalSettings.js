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
                mapName_ukr: "Станції радіометричної мережі спостережень Гідрометеорологічної служби України",
                mapName_rus: "Станции радиометрической сети наблюдений гидрометеорологической службы Украины",
                mapName_eng: "Stations of radiometric observation network of Hydrometeorological Service of Ukraine",
                maxZoom: 7,
                minZoom: 5
            });

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_75_01,
            {
                radius:5,
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Населений пункт",
                            "type": 1
                        },
                        {
                            "propName": "SettlType",
                             "descr": "Тип населеного пункту",
                            "type": 1
                        },
                        {
                            "propName": "Observ",
                            "descr": "Види спостережень",
                            "type": 1
                        }
                    ],
                    rus: [
                        {
                            "propName": "RusName",
                            "descr": "Населенный пункт",
                            "type": 1
                        },
                        {
                            "propName": "SettlTypeR",
                            "descr": "Тип населенного пункта",
                            "type": 1
                        },
                        {
                            "propName": "ObservR",
                            "descr": "Виды наблюдений",
                            "type": 1
                        }
                    ],
                    eng: [
                       {
                           "propName": "EngName_Tr",
                           "descr": "Settlement",
                            "type": 1
                        },
                        {
                            "propName": "SettlTypeE",
                            "descr": "Settlement type",
                            "type": 1
                        },
                        {
                            "propName": "ObservE",
                            "descr": "Types of observations",
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
                                        "propName": "UkrName",
                                        "descr": "Населений пункт",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "SettlType",
                                        "descr": "Тип населеного пункту",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Observ",
                                        "descr": "Види спостережень",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                     ],
                                    rus: [
                                    {
                                        "propName": "RusName",
                                        "descr": "Населенный пункт",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "SettlTypeR",
                                        "descr": "Тип населеного пункта",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "ObservR",
                                        "descr": "Виды наблюдений",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "EngName_Tr",
                                        "descr": "Settlement",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "SettlTypeE",
                                        "descr": "Settlement type",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "ObservE",
                                        "descr": "Types of observations",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                ]
                                }
                        });
                },
                geoJsonName_ukr: "Станції радіометричної мережі спостережень",
                geoJsonName_rus: "Станции радиометрической сети наблюдений",
                geoJsonName_eng: "Stations of radiometric observation network"
            }));


        //GeoJson
        this._mapSettings.OptionalGeoJsonLayers.push(new L.geoJson(Layer_ExclZone,
            {
                style: {
                    "fillColor": "#8A0868",
                    "fillOpacity": 1,
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
                geoJsonName_eng: "Exclusion zone",
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