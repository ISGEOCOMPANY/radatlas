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
                mapName_ukr: "Щільність населення України",
                mapName_rus: "Плотность населения Украины",
                mapName_eng: "Density of population of Ukraine",
                maxZoom: 8,
                minZoom: 5
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_55_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Район",
                            "type": 1
                        },
                        {
                            "propName": "Oblast",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "PN_2001",
                            "descr": "Чисельність населення, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Area",
                            "descr": "Площа, км.кв",
                            "type": 3
                        },
                        {
                            "propName": "PopulDensity01",
                            "descr": "Щільність населення, осіб/ км.кв",
                            "type": 3
                        }
                    ],
                    rus: [
                        {
                            "propName": "RusName",
                            "descr": "Район",
                            "type": 1
                        },
                        {
                            "propName": "OblastR",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "PN_2001",
                            "descr": "Количество населения, человек",
                            "type": 3
                        },
                        {
                            "propName": "Area",
                            "descr": "Площадь, км.кв",
                            "type": 3
                        },
                        {
                            "propName": "PopulDensity01",
                            "descr": "Плотность населения, чел./км.кв",
                            "type": 3
                        }
                    ],
                    eng: [
                        {
                            "propName": "EngName",
                            "descr": "District",
                            "type": 1
                        },
                        {
                            "propName": "OblastE_Tr",
                            "descr": "Region",
                            "type": 1
                        },
                        {
                            "propName": "PN_2001",
                            "descr": "Population, persons",
                            "type": 3
                        },
                        {
                            "propName": "Area",
                            "descr": "Area, sq.km",
                            "type": 3
                        },
                        {
                            "propName": "PopulDensity01",
                            "descr": "Density of population, persons/ sq.km",
                            "type": 3
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
                                        "descr": "Район",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Oblast",
                                        "descr": "Область",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "PN_2001",
                                        "descr": "Чисельність населення, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Area",
                                        "descr": "Площа, км.кв",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "PopulDensity01",
                                        "descr": "Щільність населення, осіб/ км.кв",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "RusName",
                                        "descr": "Район",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "OblastR",
                                        "descr": "Область",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "PN_2001",
                                        "descr": "Количество населения, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Area",
                                        "descr": "Площадь, км.кв",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "PopulDensity01",
                                        "descr": "Плотность населения, чел./км.кв",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "EngName",
                                        "descr": "District",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "OblastE_Tr",
                                        "descr": "Region",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "PN_2001",
                                        "descr": "Population, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Area",
                                        "descr": "Area, sq.km",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "PopulDensity01",
                                        "descr": "Density of population, persons/ sq.km",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Щільність населення",
                geoJsonName_rus: "Плотность населения",
                geoJsonName_eng: "Density of population"
            }));

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_55_02,
            {
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
                            "propName": "Oblast",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "District",
                            "descr": "Район",
                            "type": 1
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
                            "descr": "Тип населеного пункта",
                            "type": 1
                        },
                        {
                            "propName": "OblastR",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "DistrictR",
                            "descr": "Район",
                            "type": 1
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
                            "propName": "OblastE",
                            "descr": "Region",
                            "type": 1
                        },
                        {
                            "propName": "DistrictE",
                            "descr": "District",
                            "type": 1
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
                                        "propName": "OblastE",
                                        "descr": "Region",
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
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Населені пункти, віднесені до зон радіоактивного забруднення",
                geoJsonName_rus: "Населенные пункты, относящиеся к зонам радиоактивного загрязнения",
                geoJsonName_eng: "Settlements related to zones of radioactive contamination"
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
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_8_z_Stat, {
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