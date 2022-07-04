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
                mapName_ukr: "Будівельна програма з ліквідації наслідків Чорнобильської катастрофи у 1996-2000 роках",
                mapName_rus: "Строительная программа по ликвидации последствий Чернобыльской катастрофы в 1996-2000 годах",
                mapName_eng: "Construction program aimed at liquidation of consequences of Chornobyl catastrophe in 1996-2000",
                maxZoom: 8,
                minZoom: 5
            });
			
        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_89_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "Childtot96",
                            "descr": "Кількість оздоровлених постраждалих дітей, осіб, всього, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childtot97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Childtot98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Childtot99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Childtot00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Childtot02",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "Childtot03",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "Childtot04",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "Childtot05",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "Childrur96",
                            "descr": "Кількість оздоровлених дітей, осіб, позаміські табори, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childrur97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Childrur98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Childrur99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Childrur00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Childrur02",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "Childrur03",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "Childrur04",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "Childrur05",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "Childsnt96",
                            "descr": "Кількість оздоровлених дітей, осіб, табори санаторного типу, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childsnt97",
                            "descr": "- 1997",
                            "type": 3
                        }
                    ],
                    rus: [
                        {
                            "propName": "RusName",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "Childtot96",
                            "descr": "Численность оздоровленных детей, человек, всего, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childtot97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Childtot98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Childtot99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Childtot00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Childtot02",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "Childtot03",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "Childtot04",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "Childtot05",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "Childrur96",
                            "descr": "Численность оздоровленных детей, человек, загородные лагеря, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childrur97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Childrur98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Childrur99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Childrur00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Childrur02",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "Childrur03",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "Childrur04",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "Childrur05",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "Childsnt96",
                            "descr": "Численность оздоровленных детей, человек, лагеря санаторного типа, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childsnt97",
                            "descr": "- 1997",
                            "type": 3
                        }
                    ],
                    eng: [
                        {
                            "propName": "EngName_Tr",
                            "descr": "Region",
                            "type": 1
                        },
                        {
                            "propName": "Childtot96",
                            "descr": "Number of children that participated in health improvement measures, persons, total, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childtot97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Childtot98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Childtot99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Childtot00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Childtot02",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "Childtot03",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "Childtot04",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "Childtot05",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "Childrur96",
                            "descr": "Number of children that participated in health improvement measures, persons, country camps, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childrur97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Childrur98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Childrur99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Childrur00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Childrur02",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "Childrur03",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "Childrur04",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "Childrur05",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "Childsnt96",
                            "descr": "Number of children that participated in health improvement measures, persons, camps sanatorium, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Childsnt97",
                            "descr": "- 1997",
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
                                            "descr": "Область",
                                            "IsHint": true,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot96",
                                            "descr": "Кількість оздоровлених постраждалих дітей, осіб, всього, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot02",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot03",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot04",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot05",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur96",
                                            "descr": "Кількість оздоровлених дітей, осіб, позаміські табори, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur02",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur03",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur04",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur05",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childsnt96",
                                            "descr": "Численность оздоровленных детей, человек, лагеря санаторного типа, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childsnt97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        }
                                    ],
                                    rus: [
                                        {
                                            "propName": "RusName",
                                            "descr": "Область",
                                            "IsHint": true,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot96",
                                            "descr": "Численность оздоровленных детей, человек, всего, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot02",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot03",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot04",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot05",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur96",
                                            "descr": "Численность оздоровленных детей, человек, загородные лагеря, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur02",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur03",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur04",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur05",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childsnt96",
                                            "descr": "Численность оздоровленных детей, человек, лагеря санаторного типа, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childsnt97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        }
                                    ],
                                    eng: [
                                        {
                                            "propName": "EngName_Tr",
                                            "descr": "Region",
                                            "IsHint": true,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot96",
                                            "descr": "Number of children that participated in health improvement measures, persons, total, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot02",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot03",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot04",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childtot05",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur96",
                                            "descr": "Number of children that participated in health improvement measures, persons, country camps, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur02",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur03",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur04",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childrur05",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childsnt96",
                                            "descr": "Number of children that participated in health improvement measures, persons, camps sanatorium, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Childsnt97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Кількість установ, що оздоровлювали постраждалих дітей",
                geoJsonName_rus: "Количество учреждений, которые оздоравливали пострадавших детей",
                geoJsonName_eng: "Number of institutions participating in health-improving of suffered children"
            }));

        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_89_04,
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
                geoJsonName_ukr: "",
                geoJsonName_rus: "",
                geoJsonName_eng: ""
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

        //Graph_65_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Graph_89_lbl, {
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
    },
    getSettings: function () {
        return this._mapSettings;
    }
});