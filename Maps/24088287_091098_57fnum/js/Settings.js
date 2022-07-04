Settings = Class.extend({
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
                mapName_ukr: "Чисельність і склад громадян, які мають статус </br>постраждалих внаслідок Чорнобильської катастрофи",
                mapName_rus: "Численность и состав граждан, имеющих статус </br>пострадавших вследствие Чернобыльской катастрофы",
                mapName_eng: "Number and composition of citizens having the </br>status of suffered as a result of Chornobyl catastrophe",
                maxZoom: 7,
                minZoom: 5
            });

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.GeoJSON.AJAX(this._VectorLayerFolderName + "24088287_091098_57_01.geojson",
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "NPopul05",
                            "descr": "Загальна чисельність наявного населення, тис.осіб",
                            "type": 3
                        },
                        {
                            "propName": "Total",
                            "descr": "Загальна кількість постраждалих, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Ratio",
                            "descr": "Кількість постраждалих на 1000 населення, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Liq1",
                            "descr": "Ліквідатори наслідків аварії на ЧАЕС, категорія 1, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Liq2",
                            "descr": "Ліквідатори наслідків аварії на ЧАЕС, категорія 2, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Liq3",
                            "descr": "Ліквідатори наслідків аварії на ЧАЕС, категорія 3, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Wreck1",
                            "descr": "Потерпілі від Чорнобильської катастрофи, категорія 1, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Wreck2",
                            "descr": "Потерпілі від Чорнобильської катастрофи, категорія 2, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Wreck3",
                            "descr": "Потерпілі від Чорнобильської катастрофи, категорія 3, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Wreck4",
                            "descr": "Потерпілі від Чорнобильської катастрофи, категорія 4, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Pilg",
                            "descr": "Особи, які не віднесені до категорій, але мають право на пільги, осіб",
                            "type": 3
                        },
                        {
                            "propName": "Child",
                            "descr": "Діти, віднесені до потерпілих від Чорнобильської катастрофи, осіб",
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
                            "propName": "NPopul05",
                            "descr": "Общая численность наличного населения, тыс. человек",
                            "type": 3
                        },
                        {
                            "propName": "Total",
                            "descr": "Общая численность пострадавших, человек",
                            "type": 3
                        },
                        {
                            "propName": "Ratio",
                            "descr": "Общее количество пострадавших на 1000 населения, человек",
                            "type": 3
                        },
                        {
                            "propName": "Liq1",
                            "descr": "Ликвидаторы последствий аварии на ЧАЭС, категория 1, человек",
                            "type": 3
                        },
                        {
                            "propName": "Liq2",
                            "descr": "Ликвидаторы последствий аварии на ЧАЭС, категория 2, человек",
                            "type": 3
                        },
                        {
                            "propName": "Liq3",
                            "descr": "Ликвидаторы последствий аварии на ЧАЭС, категория 3, человек",
                            "type": 3
                        },
                        {
                            "propName": "Wreck1",
                            "descr": "Пострадавшие от чернобыльской катастрофы, категория 1, человек",
                            "type": 3
                        },
                        {
                            "propName": "Wreck2",
                            "descr": "Пострадавшие от чернобыльской катастрофы, категория 2, человек",
                            "type": 3
                        },
                        {
                            "propName": "Wreck3",
                            "descr": "Пострадавшие от чернобыльской катастрофы, категория 3, человек",
                            "type": 3
                        },
                        {
                            "propName": "Wreck4",
                            "descr": "Пострадавшие от чернобыльской катастрофы, категория 4, человек",
                            "type": 3
                        },
                        {
                            "propName": "Pilg",
                            "descr": "Лица, не отнесенные к категориям, но имеющие право на льготы, человек",
                            "type": 3
                        },
                        {
                            "propName": "Child",
                            "descr": "Дети, отнесенные к пострадавшим от Чернобыльской катастрофы, человек",
                            "type": 3
                        }
                    ],
                    eng: [
                        {
                            "propName": "EngName",
                            "descr": "Region",
                            "type": 1
                        },
                        {
                            "propName": "NPopul05",
                            "descr": "Total number of actual population, thousand people",
                            "type": 3
                        },
                        {
                            "propName": "Total",
                            "descr": "Total number of suffered people",
                            "type": 3
                        },
                        {
                            "propName": "Ratio",
                            "descr": "Total number of suffered people per 1000 population, persons",
                            "type": 3
                        },
                        {
                            "propName": "Liq1",
                            "descr": "Liquidators of consequences of the accident at Chornobyl, category 1, persons",
                            "type": 3
                        },
                        {
                            "propName": "Liq2",
                            "descr": "Liquidators of consequences of the accident at Chornobyl, category 2, persons",
                            "type": 3
                        },
                        {
                            "propName": "Liq3",
                            "descr": "Liquidators of consequences of the accident at Chornobyl, category 3, persons",
                            "type": 3
                        },
                        {
                            "propName": "Wreck1",
                            "descr": "Suffered from Chornobyl catastrophe, category 1, persons",
                            "type": 3
                        },
                        {
                            "propName": "Wreck2",
                            "descr": "Suffered from Chornobyl catastrophe, category 2, persons",
                            "type": 3
                        },
                        {
                            "propName": "Wreck3",
                            "descr": "Suffered from Chornobyl catastrophe, category 3, persons",
                            "type": 3
                        },
                        {
                            "propName": "Wreck4",
                            "descr": "Suffered from Chornobyl catastrophe, category 4, persons",
                            "type": 3
                        },
                        {
                            "propName": "Pilg",
                            "descr": "Persons not enrolled in the categories but having the right on benefits, persons",
                            "type": 3
                        },
                        {
                            "propName": "Child",
                            "descr": "Children considered as suffered as a result of Chornobyl catastrophe, persons",
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
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "NPopul05",
                                        "descr": "Загальна чисельність наявного населення, тис.осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Total",
                                        "descr": "Загальна кількість постраждалих, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Ratio",
                                        "descr": "Кількість постраждалих на 1000 населення, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Date",
                                        "descr": "Дата актуальності даних",
                                        "IsHint": false,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "Liq1",
                                        "descr": "Ліквідатори наслідків аварії на ЧАЕС, категорія 1, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Liq2",
                                        "descr": "Ліквідатори наслідків аварії на ЧАЕС, категорія 2, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Liq3",
                                        "descr": "Ліквідатори наслідків аварії на ЧАЕС, категорія 3, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck1",
                                        "descr": "Потерпілі від Чорнобильської катастрофи, категорія 1, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck2",
                                        "descr": "Потерпілі від Чорнобильської катастрофи, категорія 2, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck3",
                                        "descr": "Потерпілі від Чорнобильської катастрофи, категорія 3, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck4",
                                        "descr": "Потерпілі від Чорнобильської катастрофи, категорія 4, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Pilg",
                                        "descr": "Особи, які не віднесені до категорій, але мають право на пільги, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Child",
                                        "descr": "Діти, віднесені до потерпілих від Чорнобильської катастрофи, осіб",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "RusName",
                                        "descr": "Область",
                                        "IsHint": true,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "NPopul05",
                                        "descr": "Общая численность наличного населения, тыс. человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Total",
                                        "descr": "Общая численность пострадавших, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Ratio",
                                        "descr": "Общее количество пострадавших на 1000 населения, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Date",
                                        "descr": "Дата актуальности данных",
                                        "IsHint": false,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "Liq1",
                                        "descr": "Ликвидаторы последствий аварии на ЧАЭС, категория 1, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Liq2",
                                        "descr": "Ликвидаторы последствий аварии на ЧАЭС, категория 2, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Liq3",
                                        "descr": "Ликвидаторы последствий аварии на ЧАЭС, категория 3, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck1",
                                        "descr": "Пострадавшие от чернобыльской катастрофы, категория 1, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck2",
                                        "descr": "Пострадавшие от чернобыльской катастрофы, категория 2, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck3",
                                        "descr": "Пострадавшие от чернобыльской катастрофы, категория 3, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck4",
                                        "descr": "Пострадавшие от чернобыльской катастрофы, категория 4, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Pilg",
                                        "descr": "Лица, не отнесенные к категориям, но имеющие право на льготы, человек",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Child",
                                        "descr": "Дети, отнесенные к пострадавшим от Чернобыльской катастрофы, человек",
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
                                        "propName": "NPopul05",
                                        "descr": "Total number of actual population, thousand people",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Total",
                                        "descr": "Total number of suffered people",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Ratio",
                                        "descr": "Total number of suffered people per 1000 population, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Date",
                                        "descr": "Relevance of data",
                                        "IsHint": false,
                                        "IsInfo": false
                                    },
                                    {
                                        "propName": "Liq1",
                                        "descr": "Liquidators of consequences of the accident at Chornobyl, category 1, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Liq2",
                                        "descr": "Liquidators of consequences of the accident at Chornobyl, category 2, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Liq3",
                                        "descr": "Liquidators of consequences of the accident at Chornobyl, category 3, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck1",
                                        "descr": "Suffered from Chornobyl catastrophe, category 1, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck2",
                                        "descr": "Suffered from Chornobyl catastrophe, category 2, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck3",
                                        "descr": "Suffered from Chornobyl catastrophe, category 3, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Wreck4",
                                        "descr": "Suffered from Chornobyl catastrophe, category 4, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Pilg",
                                        "descr": "Persons not enrolled in the categories but having the right on benefits, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Child",
                                        "descr": "Children considered as suffered as a result of Chornobyl catastrophe, persons",
                                        "IsHint": false,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Кількість постраждалих у загальній чисельності населення",
                geoJsonName_rus: "Количество в общей численности населения",
                geoJsonName_eng: "Number of suffered people in total population size"
            }));

        //GeoJson
        this._mapSettings.OptionalGeoJsonLayers.push(new L.GeoJSON.AJAX(this._VectorLayerFolderName + "24088287_091098_57_02.geojson",
            {
                minZoom: 6,
                maxZoom: 8,
                onEachFeature: function (feature, layer) {
                    aSettings._jsonDataOnEachLayel(feature, layer, aSettings,
                        {
                            properties: {
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
                                ],
                            }
                        });
                },
                geoJsonName_ukr: "Групи постраждалих",
                geoJsonName_rus: "Группы пострадавших",
                geoJsonName_eng: "Groups of suffered"
            }));

        //GeoJson
        this._mapSettings.OptionalGeoJsonLayers.push(new L.GeoJSON.AJAX("../01_CommonTabsU/_geojson/ExclZone.geojson",
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
        this._mapSettings.LabelLayers.push(new L.GeoJSON.AJAX("../01_CommonTabsU/_geojson/Settl_6_7_z.geojson",
            {
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