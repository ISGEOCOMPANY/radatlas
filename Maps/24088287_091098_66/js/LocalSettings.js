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
                mapName_ukr: "Проект зонування радіоактивно забрудненої території України за даними дозиметричної паспортизації",
                mapName_rus: "Проект зонирования радиоактивно загрязненной территории Украины по данным дозиметрической паспортизации",
                mapName_eng: "Draft zoning of radioactively contaminated territory of Ukraine according to dosimetric passportization data",
                maxZoom: 8,
                minZoom: 5
            });

        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_66_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Населений пункт",
                            "type": 1,
                        },
                        {
                            "propName": "SettlType",
                            "descr": "Тип населеного пункту",
                            "type": 1,
                            },
                        {
                            "propName": "Oblast",
                            "descr": "Область",
                            "type": 1,
                            },
                        {
                            "propName": "District",
                            "descr": "Район",
                            "type": 1,
                        },
                        {
                            "propName": "Zone",
                            "descr": "Зона радіоактивного забруднення",
                            "type": 2,
                            "ranges": [
                                 "1",
                                "2",
                                "3",
                                "4"
                            ]
                        },
                        {
                           "propName": "NewFittedZone",
                            "descr": "Зона радіоактивного забруднення, загальнодозиметрична паспортизація",
                            "type": 2,
                            "ranges": [
                                 "1",
                                "2",
                                "3",
                                "4"
                            ]
                         },
                    ],
                    rus: [
                        {
                            "propName": "RusName",
                            "descr": "Населенный пункт",
                            "type": 1,
                        },
                        {
                            "propName": "SettlTypeR",
                            "descr": "Тип населеного пункта",
                            "type": 1,
                        },
                        {
                            "propName": "OblastR",
                            "descr": "Область",
                            "type": 1,
                        },
                        {
                            "propName": "DistrictR",
                            "descr": "Район",
                            "type": 1,
                        },
                        {
                            "propName": "Zone",
                            "descr": "Зона радиоактивного загрязнения",
                            "type": 2,
                            "ranges": [
                                 "1",
                                "2",
                                "3",
                                "4"
                            ]
                        },
                                                {
                           "propName": "NewFittedZone",
                           "descr": "Зона радиоактивного загрязнения, дозиметрическая паспортизация",
                            "type": 2,
                            "ranges": [
                                 "1",
                                "2",
                                "3",
                                "4"
                            ]
                         },
                    ],
                    eng: [
                        {
                            "propName": "EngName",
                            "descr": "Settlement",
                            "type": 1,
                        },
                        {
                            "propName": "SettlTypeE",
                            "descr": "Settlement type",
                            "type": 1,
                        },
                        {
                            "propName": "OblastE_Tr",
                            "descr": "Oblast",
                            "type": 1,
                        },
                        {
                            "propName": "DistrictE",
                            "descr": "District",
                            "type": 1,
                        },
                        {
                            "propName": "Zone",
                            "descr": "Radioactive contamination zone",
                            "type": 2,
                            "ranges": [
                                 "1",
                                "2",
                                "3",
                                "4"
                            ]
                        },
                        {
                            "propName": "NewFittedZone",
                            "descr": "Zone of radioactive contamination, dosimetric passportization data",
                            "type": 2,
                            "ranges": [
                                 "1",
                                "2",
                                "3",
                                "4"
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
                            "propName": "Oblast",
                            "descr": "Область",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "District",
                            "descr": "Район",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "Zone",
                            "descr": "Зона радіоактивного забруднення",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "NewFittedZone",
                            "descr": "Зона радіоактивного забруднення, загальнодозиметрична паспортизація",
                            "IsHint": false,
                            "IsInfo": true
                        },
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
                            "propName": "OblastR",
                            "descr": "Область",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "DistrictR",
                            "descr": "Район",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "Zone",
                            "descr": "Зона радиоактивного загрязнения",
                            "IsHint": false,
                            "IsInfo": true
                        },
                                                {
                           "propName": "NewFittedZone",
                           "descr": "Зона радиоактивного загрязнения, дозиметрическая паспортизация",
                           "IsHint": false,
                           "IsInfo": true
                         },
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
                            "propName": "OblastE_Tr",
                            "descr": "Oblast",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "DistrictE",
                            "descr": "District",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "Zone",
                            "descr": "Radioactive contamination zone",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "NewFittedZone",
                            "descr": "Zone of radioactive contamination, dosimetric passportization data",
                            "IsHint": false,
                            "IsInfo": true
                        }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Зони радіоактивного забруднення згідно даних загальнодозиметричної паспортизації",
                geoJsonName_rus: "Зоны радиоактивного загрязнения по данным дозиметрической паспортизации",
                geoJsonName_eng: "Zone of radioactive contamination according to dosimetric passportization data"
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