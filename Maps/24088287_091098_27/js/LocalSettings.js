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
                mapName_ukr: "Вміст цезію-137 у молоці (середньорічні значення для найбільш постраждалих районів, 1991-2005 роки)",
                mapName_rus: "Содержание цезия-137 в молоке (среднегодовые значения для наиболее пострадавших районов, 1991-2005 годы)",
                mapName_eng: "Content of cesium-137 in milk (average annual values for the most suffered regions, 1991-2005)",
                maxZoom: 8,
                minZoom: 5
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_27_01,
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
                            "propName": "Населенный пункт",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "SettlTypeR",
                            "descr": "Тип населенного пункта",
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
                            "propName": "OblastE_Tr",
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
                                              "IsHint": false,
                                              "IsInfo": false
                                          },
                                          {
                                              "propName": "SettlType",
                                              "descr": "Тип населеного пункту",
                                              "IsHint": false,
                                              "IsInfo": false
                                          },
                                          {
                                              "propName": "Oblast",
                                              "descr": "Область",
                                              "IsHint": false,
                                              "IsInfo": false
                                          },
                                          {
                                              "propName": "District",
                                              "descr": "Район",
                                              "IsHint": false,
                                              "IsInfo": false
                                          },
                                          {
                                              "propName": "Zone",
                                              "descr": "Зона радіоактивного забруднення",
                                              "IsHint": false,
                                              "IsInfo": false
                                          }
                                    ],
                                    rus: [
                                        {
                                            "propName": "Населенный пункт",
                                            "descr": "Область",
                                            "IsHint": false,
                                            "IsInfo": false
                                        },
                                        {
                                            "propName": "SettlTypeR",
                                            "descr": "Тип населенного пункта",
                                            "IsHint": false,
                                            "IsInfo": false
                                        },
                                        {
                                            "propName": "OblastR",
                                            "descr": "Область",
                                            "IsHint": false,
                                            "IsInfo": false
                                        },
                                        {
                                            "propName": "DistrictR",
                                            "descr": "Район",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Zone",
                                            "descr": "Зона радіоактивного забруднення",
                                            "IsHint": false,
                                            "IsInfo": false
                                        }
                                    ],
                                    eng: [
                                        {
                                            "propName": "EngName_Tr",
                                            "descr": "Settlement",
                                            "IsHint": false,
                                            "IsInfo": false
                                        },
                                        {
                                            "propName": "SettlTypeE",
                                            "descr": "Settlement type",
                                            "IsHint": false,
                                            "IsInfo": false
                                        },
                                        {
                                            "propName": "OblastE_Tr",
                                            "descr": "Region",
                                            "IsHint": false,
                                            "IsInfo": false
                                        },
                                    {
                                        "propName": "DistrictE",
                                        "descr": "District",
                                        "IsHint": false,
                                        "IsInfo": false
                                    },
                                        {
                                            "propName": "Zone",
                                            "descr": "Radioactive contamination zone",
                                            "IsHint": false,
                                            "IsInfo": false
                                        }
                                    ],
                                }
                        });
                },
                geoJsonName_ukr: "Зони радіоактивного забруднення",
                geoJsonName_rus: "Зони радіоактивного забруднення",
                geoJsonName_eng: "Radioactive contamination zones"
            }));


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_27_02,
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
                           "propName": "a1991",
                            "descr": "Вміст цезію-137 у молоці, Бк/л, 1991",
                            "type": 3
                       },
                       {
                           "propName": "a1992",
                           "descr": "-1992",
                            "type": 3
                       },
                       {
                           "propName": "a1993",
                           "descr": "-1993",
                           "type": 3
                       },
                       {
                           "propName": "a1994",
                           "descr": "-1994",
                           "type": 3
                       },
                       {
                           "propName": "a1995",
                           "descr": "-1995",
                           "type": 3
                       },
                       {
                           "propName": "a1996",
                           "descr": "-1996",
                           "type": 3
                       },
                       {
                           "propName": "a1997",
                           "descr": "-1997",
                           "type": 3
                       },
                       {
                           "propName": "a1998",
                           "descr": "-1998",
                           "type": 3
                       },
                       {
                           "propName": "a1999",
                           "descr": "-1999",
                           "type": 3
                       },
                       {
                           "propName": "a2000",
                           "descr": "-2000",
                           "type": 3
                       },
                       {
                           "propName": "a2001",
                           "descr": "-2001",
                           "type": 3
                       },
                       {
                           "propName": "a2002",
                           "descr": "-2002",
                           "type": 3
                       },
                       {
                           "propName": "a2003",
                           "descr": "-2003",
                           "type": 3
                       },
                       {
                           "propName": "a2004",
                           "descr": "-2004",
                           "type": 3
                       },
                       {
                           "propName": "a2005",
                           "descr": "-2005",
                           "type": 3
                       },
                       {
                           "propName": "s1991",
                           "descr": "Кількість відібраних проб, 1991",
                           "type": 3
                       },
                       {
                           "propName": "s1992",
                           "descr": "-1992",
                           "type": 3
                       },
                       {
                           "propName": "s1993",
                           "descr": "-1993",
                           "type": 3
                       },
                       {
                           "propName": "s1994",
                           "descr": "-1994",
                           "type": 3
                       },
                       {
                           "propName": "s1995",
                           "descr": "-1995",
                           "type": 3
                       },
                       {
                           "propName": "s1996",
                           "descr": "-1996",
                           "type": 3
                       },
                       {
                           "propName": "s1997",
                           "descr": "-1997",
                           "type": 3
                       },
                       {
                           "propName": "s1998",
                           "descr": "-1998",
                           "type": 3
                       },
                       {
                           "propName": "s1999",
                           "descr": "-1999",
                           "type": 3
                       },
                       {
                           "propName": "s2000",
                           "descr": "-2000",
                           "type": 3
                       },
                       {
                           "propName": "s2001",
                           "descr": "-2001",
                           "type": 3
                       },
                       {
                           "propName": "s2002",
                           "descr": "-2002",
                           "type": 3
                       },
                       {
                           "propName": "s2003",
                           "descr": "-2003",
                           "type": 3
                       },
                       {
                           "propName": "s2004",
                           "descr": "-2004",
                           "type": 3
                       },
                       {
                           "propName": "s2005",
                           "descr": "-2005",
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
                           "propName": "Oblast",
                           "descr": "Область",
                           "type": 1
                       },
                       {
                           "propName": "a1991",
                           "descr": "Содержание цезия-137 в молоке, Бк/л, 1991",
                           "type": 3
                       },
                       {
                           "propName": "a1992",
                           "descr": "-1992",
                           "type": 3
                       },
                       {
                           "propName": "a1993",
                           "descr": "-1993",
                           "type": 3
                       },
                       {
                           "propName": "a1994",
                           "descr": "-1994",
                           "type": 3
                       },
                       {
                           "propName": "a1995",
                           "descr": "-1995",
                           "type": 3
                       },
                       {
                           "propName": "a1996",
                           "descr": "-1996",
                           "type": 3
                       },
                       {
                           "propName": "a1997",
                           "descr": "-1997",
                           "type": 3
                       },
                       {
                           "propName": "a1998",
                           "descr": "-1998",
                           "type": 3
                       },
                       {
                           "propName": "a1999",
                           "descr": "-1999",
                           "type": 3
                       },
                       {
                           "propName": "a2000",
                           "descr": "-2000",
                           "type": 3
                       },
                       {
                           "propName": "a2001",
                           "descr": "-2001",
                           "type": 3
                       },
                       {
                           "propName": "a2002",
                           "descr": "-2002",
                           "type": 3
                       },
                       {
                           "propName": "a2003",
                           "descr": "-2003",
                           "type": 3
                       },
                       {
                           "propName": "a2004",
                           "descr": "-2004",
                           "type": 3
                       },
                       {
                           "propName": "a2005",
                           "descr": "-2005",
                           "type": 3
                       },
                       {
                           "propName": "s1991",
                           "descr": "Количество отобранных проб, 1991",
                           "type": 3
                       },
                       {
                           "propName": "s1992",
                           "descr": "-1992",
                           "type": 3
                       },
                       {
                           "propName": "s1993",
                           "descr": "-1993",
                           "type": 3
                       },
                       {
                           "propName": "s1994",
                           "descr": "-1994",
                           "type": 3
                       },
                       {
                           "propName": "s1995",
                           "descr": "-1995",
                           "type": 3
                       },
                       {
                           "propName": "s1996",
                           "descr": "-1996",
                           "type": 3
                       },
                       {
                           "propName": "s1997",
                           "descr": "-1997",
                           "type": 3
                       },
                       {
                           "propName": "s1998",
                           "descr": "-1998",
                           "type": 3
                       },
                       {
                           "propName": "s1999",
                           "descr": "-1999",
                           "type": 3
                       },
                       {
                           "propName": "s2000",
                           "descr": "-2000",
                           "type": 3
                       },
                       {
                           "propName": "s2001",
                           "descr": "-2001",
                           "type": 3
                       },
                       {
                           "propName": "s2002",
                           "descr": "-2002",
                           "type": 3
                       },
                       {
                           "propName": "s2003",
                           "descr": "-2003",
                           "type": 3
                       },
                       {
                           "propName": "s2004",
                           "descr": "-2004",
                           "type": 3
                       },
                       {
                           "propName": "s2005",
                           "descr": "-2005",
                           "type": 3
                       }
                    ],
                    eng: [
                        {
                            "propName": "EngName_Tr",
                            "descr": "District",
                            "type": 1
                        },
                       {
                           "propName": "OblastE_Tr",
                           "descr": "Region",
                           "type": 1
                       },
                       {
                           "propName": "a1991",
                           "descr": "Content of cesium-137 in milk, Bq/l, 1991",
                           "type": 3
                       },
                       {
                           "propName": "a1992",
                           "descr": "-1992",
                           "type": 3
                       },
                       {
                           "propName": "a1993",
                           "descr": "-1993",
                           "type": 3
                       },
                       {
                           "propName": "a1994",
                           "descr": "-1994",
                           "type": 3
                       },
                       {
                           "propName": "a1995",
                           "descr": "-1995",
                           "type": 3
                       },
                       {
                           "propName": "a1996",
                           "descr": "-1996",
                           "type": 3
                       },
                       {
                           "propName": "a1997",
                           "descr": "-1997",
                           "type": 3
                       },
                       {
                           "propName": "a1998",
                           "descr": "-1998",
                           "type": 3
                       },
                       {
                           "propName": "a1999",
                           "descr": "-1999",
                           "type": 3
                       },
                       {
                           "propName": "a2000",
                           "descr": "-2000",
                           "type": 3
                       },
                       {
                           "propName": "a2001",
                           "descr": "-2001",
                           "type": 3
                       },
                       {
                           "propName": "a2002",
                           "descr": "-2002",
                           "type": 3
                       },
                       {
                           "propName": "a2003",
                           "descr": "-2003",
                           "type": 3
                       },
                       {
                           "propName": "a2004",
                           "descr": "-2004",
                           "type": 3
                       },
                       {
                           "propName": "a2005",
                           "descr": "-2005",
                           "type": 3
                       },
                       {
                           "propName": "s1991",
                           "descr": "The number of samples taken, 1991",
                           "type": 3
                       },
                       {
                           "propName": "s1992",
                           "descr": "-1992",
                           "type": 3
                       },
                       {
                           "propName": "s1993",
                           "descr": "-1993",
                           "type": 3
                       },
                       {
                           "propName": "s1994",
                           "descr": "-1994",
                           "type": 3
                       },
                       {
                           "propName": "s1995",
                           "descr": "-1995",
                           "type": 3
                       },
                       {
                           "propName": "s1996",
                           "descr": "-1996",
                           "type": 3
                       },
                       {
                           "propName": "s1997",
                           "descr": "-1997",
                           "type": 3
                       },
                       {
                           "propName": "s1998",
                           "descr": "-1998",
                           "type": 3
                       },
                       {
                           "propName": "s1999",
                           "descr": "-1999",
                           "type": 3
                       },
                       {
                           "propName": "s2000",
                           "descr": "-2000",
                           "type": 3
                       },
                       {
                           "propName": "s2001",
                           "descr": "-2001",
                           "type": 3
                       },
                       {
                           "propName": "s2002",
                           "descr": "-2002",
                           "type": 3
                       },
                       {
                           "propName": "s2003",
                           "descr": "-2003",
                           "type": 3
                       },
                       {
                           "propName": "s2004",
                           "descr": "-2004",
                           "type": 3
                       },
                       {
                           "propName": "s2005",
                           "descr": "-2005",
                           "type": 3
                       }                  
                    ]
               },
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties: {
                                ukr: [
                                    {
                                        "propName": "UkrName",
                                        "descr": "Населений пункт",
                                        "IsHint": true,
                                        "IsInfo": false
                                    },
                       {
                           "propName": "Oblast",
                           "descr": "Область",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1991",
                           "descr": "Вміст цезію-137 у молоці, Бк/л, 1991",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1992",
                           "descr": "-1992",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1993",
                           "descr": "-1993",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1994",
                           "descr": "-1994",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1995",
                           "descr": "-1995",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1996",
                           "descr": "-1996",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1997",
                           "descr": "-1997",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1998",
                           "descr": "-1998",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a1999",
                           "descr": "-1999",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a2000",
                           "descr": "-2000",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a2001",
                           "descr": "-2001",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a2002",
                           "descr": "-2002",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a2003",
                           "descr": "-2003",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a2004",
                           "descr": "-2004",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "a2005",
                           "descr": "-2005",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1991",
                           "descr": "Кількість відібраних проб, 1991",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1992",
                           "descr": "-1992",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1993",
                           "descr": "-1993",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1994",
                           "descr": "-1994",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1995",
                           "descr": "-1995",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1996",
                           "descr": "-1996",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1997",
                           "descr": "-1997",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1998",
                           "descr": "-1998",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s1999",
                           "descr": "-1999",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s2000",
                           "descr": "-2000",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s2001",
                           "descr": "-2001",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s2002",
                           "descr": "-2002",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s2003",
                           "descr": "-2003",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s2004",
                           "descr": "-2004",
                           "IsHint": false,
                           "IsInfo": true
                       },
                       {
                           "propName": "s2005",
                           "descr": "-2005",
                           "IsHint": false,
                           "IsInfo": true
                       }
                                ],
                                rus: [
                                     {
                                         "propName": "RusName",
                                         "descr": "Населенный пункт",
                                         "IsHint": true,
                                         "IsInfo": false
                                     },
                   {
                       "propName": "OblastR",
                       "descr": "Область",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1991",
                       "descr": "Содержание цезия-137 в молоке, Бк/л, 1991",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1992",
                       "descr": "-1992",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1993",
                       "descr": "-1993",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1994",
                       "descr": "-1994",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1995",
                       "descr": "-1995",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1996",
                       "descr": "-1996",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1997",
                       "descr": "-1997",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1998",
                       "descr": "-1998",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1999",
                       "descr": "-1999",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2000",
                       "descr": "-2000",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2001",
                       "descr": "-2001",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2002",
                       "descr": "-2002",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2003",
                       "descr": "-2003",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2004",
                       "descr": "-2004",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2005",
                       "descr": "-2005",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1991",
                       "descr": "Количество отобранных проб, 1991",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1992",
                       "descr": "-1992",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1993",
                       "descr": "-1993",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1994",
                       "descr": "-1994",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1995",
                       "descr": "-1995",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1996",
                       "descr": "-1996",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1997",
                       "descr": "-1997",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1998",
                       "descr": "-1998",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1999",
                       "descr": "-1999",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2000",
                       "descr": "-2000",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2001",
                       "descr": "-2001",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2002",
                       "descr": "-2002",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2003",
                       "descr": "-2003",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2004",
                       "descr": "-2004",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2005",
                       "descr": "-2005",
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
                       "propName": "OblastE_Tr",
                       "descr": "Region",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1991",
                       "descr": "Content of cesium-137 in milk, Bq/l, 1991",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1992",
                       "descr": "-1992",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1993",
                       "descr": "-1993",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1994",
                       "descr": "-1994",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1995",
                       "descr": "-1995",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1996",
                       "descr": "-1996",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1997",
                       "descr": "-1997",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1998",
                       "descr": "-1998",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a1999",
                       "descr": "-1999",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2000",
                       "descr": "-2000",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2001",
                       "descr": "-2001",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2002",
                       "descr": "-2002",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2003",
                       "descr": "-2003",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2004",
                       "descr": "-2004",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "a2005",
                       "descr": "-2005",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1991",
                       "descr": "The number of samples taken, 1991",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1992",
                       "descr": "-1992",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1993",
                       "descr": "-1993",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1994",
                       "descr": "-1994",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1995",
                       "descr": "-1995",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1996",
                       "descr": "-1996",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1997",
                       "descr": "-1997",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1998",
                       "descr": "-1998",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s1999",
                       "descr": "-1999",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2000",
                       "descr": "-2000",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2001",
                       "descr": "-2001",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2002",
                       "descr": "-2002",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2003",
                       "descr": "-2003",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2004",
                       "descr": "-2004",
                       "IsHint": false,
                       "IsInfo": true
                   },
                   {
                       "propName": "s2005",
                       "descr": "-2005",
                       "IsHint": false,
                       "IsInfo": true
                                    }
                                ],
                            }
                        });
                },
                geoJsonName_ukr: "Вміст цезію-137 у молоці",
                geoJsonName_rus: "Содержание цезия-137 в молоке",
                geoJsonName_eng: "Content of cesium-137 in milk"
            }));

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_27_03,
            {
                minZoom: 6,
                maxZoom: 8,
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties: {
                                ukr: [
                                    {
                                        "propName": "Year",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                ],
                                rus: [
                                    {
                                        "propName": "Year",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                ],
                                eng: [
                                    {
                                        "propName": "Year",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                ],
                            }
                        });
                },
                geoJsonName_ukr: "",
                geoJsonName_rus: "",
                geoJsonName_eng: ""
            }));

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_27_04,
            {
                minZoom: 6,
                maxZoom: 8,
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties: {
                                ukr: [
                                    {
                                        "propName": "DR_U",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                ],
                                rus: [
                                    {
                                        "propName": "DR_R",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                ],
                                eng: [
                                    {
                                        "propName": "DR_E",
                                        "descr": "",
                                        "IsHint": true,
                                        "IsInfo": false
                                    }
                                ],
                            }
                        });
                },
                geoJsonName_ukr: "",
                geoJsonName_rus: "",
                geoJsonName_eng: ""
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