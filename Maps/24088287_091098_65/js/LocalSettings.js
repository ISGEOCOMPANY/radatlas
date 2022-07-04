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
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_65_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "Totuse96",
                            "descr": "Освоєно державних капітальних вкладень, тис. грн., 1996",
                            "type": 3
                        },
                        {
                            "propName": "Totuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Totuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Totuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Totuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Promuse96",
                            "descr": "Освоєно по об’єктах виробничого призначення, тис. грн., 1996",
                            "type": 3
                        },
                        {
                            "propName": "Promuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Promuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Promuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Promuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Socuse96",
                            "descr": "Освоєно по об’єктах невиробничого призначення, тис. грн., 1996",
                            "type": 3
                        },
                        {
                            "propName": "Socuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Socuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Socuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Socuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "BuildUse00",
                            "descr": "Виконання підрядних робіт будівельними організаціями, тис. грн., 2000",
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
                            "propName": "Totuse96",
                            "descr": "Освоено государственных капитальных вложений, тыс. грн., 1996",
                            "type": 3
                        },
                        {
                            "propName": "Totuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Totuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Totuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Totuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Promuse96",
                            "descr": "Освоено по объектам производственного назначения, тыс. грн., 1996",
                            "type": 3
                        },
                        {
                            "propName": "Promuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Promuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Promuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Promuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Socuse96",
                            "descr": "Освоено по объектам непроизводственного назначения, тыс. грн., 1996",
                            "type": 3
                        },
                        {
                            "propName": "Socuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Socuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Socuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Socuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "BuildUse00",
                            "descr": "Выполнение подрядных работ строительными организациями, тыс. грн., 2000",
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
                            "propName": "Totuse96",
                            "descr": "Disbursement of the limit of state centralized investments, thousands hryvnyas, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Totuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Totuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Totuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Totuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Promuse96",
                            "descr": "Disbursement of investments, production purpose, thousands hryvnyas, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Promuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Promuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Promuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Promuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "Socuse96",
                            "descr": "Disbursement of investments, nonproduction purpose, thousands hryvnyas, 1996",
                            "type": 3
                        },
                        {
                            "propName": "Socuse97",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "Socuse98",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "Socuse99",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "Socuse00",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "BuildUse00",
                            "descr": "Implementation of contractual works, thousands hryvnyas, 2000",
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
                                            "propName": "Totuse96",
                                            "descr": "Освоєно державних капітальних вкладень, тис. грн., 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse96",
                                            "descr": "Освоєно по об’єктах виробничого призначення, тис. грн., 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse96",
                                            "descr": "Освоєно по об’єктах невиробничого призначення, тис. грн., 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "BuildUse00",
                                            "descr": "Виконання підрядних робіт будівельними організаціями, тис. грн., 2000",
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
                                            "propName": "Totuse96",
                                            "descr": "Освоено государственных капитальных вложений, тыс. грн., 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse96",
                                            "descr": "Освоено по объектам производственного назначения, тыс. грн., 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse96",
                                            "descr": "Освоено по объектам непроизводственного назначения, тыс. грн., 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "BuildUse00",
                                            "descr": "Выполнение подрядных работ строительными организациями, тыс. грн., 2000",
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
                                            "propName": "Totuse96",
                                            "descr": "Disbursement of the limit of state centralized investments, thousands hryvnyas, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Totuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse96",
                                            "descr": "Disbursement of investments, production purpose, thousands hryvnyas, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Promuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse96",
                                            "descr": "Disbursement of investments, nonproduction purpose, thousands hryvnyas, 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse97",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse98",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse99",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "Socuse00",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "BuildUse00",
                                            "descr": "Implementation of contractual works, thousands hryvnyas, 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Виконання підрядних робіт за генеральними та прямими договорами",
                geoJsonName_rus: "Выполнение подрядных работ по генеральным и прямым договорам",
                geoJsonName_eng: "Implementation of contractual works in the framework of general and direct contracts"
            }));

        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_65_04,
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
        this._mapSettings.LabelLayers.push(new L.geoJson(Graph_65_lbl, {
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