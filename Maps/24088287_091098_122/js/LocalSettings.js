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
                mapName_ukr: "Зонування лісів за щільністю радіоактивного забруднення ґрунту цезієм-137",
                mapName_rus: "Зонирование лесов по плотности радиоактивного загрязнения почвы цезием-137",
                mapName_eng: "Zoning of forests by density of radioactive contamination of soil by cesium-137",
                maxZoom: 8,
                minZoom: 5
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_122_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Рівень забруднення, кБк/м2",
                            "type": 2,
                            "ranges": [
                                 "< 37",
                                "37 - 77",
                                "77 - 185",
                                "185 - 259",
                                "259 - 370",
                                "370 - 555",
                                "555 - 1110",
                                "> 1110"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Рівень забруднення, Кі/км2",
                            "type": 2,
                            "ranges": [
                                 "< 1",
                                "1 - 2",
                                "2 - 5",
                                "5 - 7",
                                "7 - 10",
                                "10 - 15",
                                "15 - 30",
                                "> 30"
                            ]
                        },
                        {
                            "propName": "FZone",
                            "descr": "Зона обмеження",
                            "type": 2,
                            "ranges": [
                                "1а",
                                "1б",
                                "2а",
                                "2б",
                                "2в",
                                "3а",
                                "3б"
                            ]
                        },
                        {
                            "propName": "Restr_U",
                            "descr": "Обмеження",
                            "type": 2,
                            "ranges": [
                                "Використання лісової продукції без обмежень",
                                "Контроль за тривалістю робочого часу при проведенні термінових лісозахисних",
                                "Розробка спеціального режиму ведення протипожежних, лісозахисних робіт",
                                "Обмеження використання паливної та тонкомірної деревини",
                                "Обмеження використання оброблених лісоматеріалів, деревини для зберігання харчових продуктів та виробів побутового призначення",
                                "Обмеження використання деревини для інших цілей",
                                "Обмеження використання грибів та деяких лікарських рослин (вересові, брусничні, гречкові)",
                                "Обмеження використання лікарських та ягідних рослин, сіна лісових сіножатей"
                            ]
                        }
                    ],
                    rus: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Уровень загрязнения, кБк/м2",
                            "type": 2,
                            "ranges": [
                                 "< 37",
                                "37 - 77",
                                "77 - 185",
                                "185 - 259",
                                "259 - 370",
                                "370 - 555",
                                "555 - 1110",
                                "> 1110"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Уровень загрязнения, Ки/км2",
                            "type": 2,
                            "ranges": [
                                 "< 1",
                                "1 - 2",
                                "2 - 5",
                                "5 - 7",
                                "7 - 10",
                                "10 - 15",
                                "15 - 30",
                                "> 30"
                            ]
                        },
                        {
                            "propName": "FZone",
                            "descr": "Зона ограничения",
                            "type": 2,
                            "ranges": [
                                "1а",
                                "1б",
                                "2а",
                                "2б",
                                "2в",
                                "3а",
                                "3б"
                            ]
                        },
                        {
                            "propName": "Restr_R",
                            "descr": "Ограничение",
                            "type": 2,
                            "ranges": [
                                "Использование лесной продукции без ограничений",
                                "Контроль за продолжительностью рабочего времени при проведении срочных лесозащитных работ",
                                "Разработка специального режима ведения противопожарных, лесозащитных работ",
                                "Ограничение использования топливной и тонкомерной древесины",
                                "Ограничение использования обработанных лесоматериалов, древесины для хранения пищевых продуктов и изделий бытового назначения",
                                "Ограничение использования древесины для других целей",
                                "Ограничение использования грибов и некоторых лекарственных растений (вересковые, брусничные, гречишные)",
                                "Ограничение использования лекарственных и ягодных растений, сена лесных сенокосов"
                            ]
                        }
                    ],
                    eng: [
                        {
                            "propName": "Lvl_KBq_m2",
                            "descr": "Contamination level, kBq/m2",
                            "type": 2,
                            "ranges": [
                                 "< 37",
                                "37 - 77",
                                "77 - 185",
                                "185 - 259",
                                "259 - 370",
                                "370 - 555",
                                "555 - 1110",
                                "> 1110"
                            ]
                        },
                        {
                            "propName": "Lvl_CI_km2",
                            "descr": "Contamination level, Ci/km2",
                            "type": 2,
                            "ranges": [
                                 "< 1",
                                "1 - 2",
                                "2 - 5",
                                "5 - 7",
                                "7 - 10",
                                "10 - 15",
                                "15 - 30",
                                "> 30"
                            ]
                        },
                        {
                            "propName": "FZoneE",
                            "descr": "Limitation zone",
                            "type": 2,
                            "ranges": [
                                "1a",
                                "1b",
                                "2a",
                                "2b",
                                "2v",
                                "3a",
                                "3b"
                            ]
                        },
                        {
                            "propName": "Restr_E",
                            "descr": "Limitation",
                            "type": 2,
                            "ranges": [
                                "Utilization of forest products without limitations",
                                "Control over the duration of working time during the urgent forest-protection works",
                                "Development of special regime of forestry works related to  fire-protection and forest-protection",
                                "Limitation of utilization of firewood and lighter trees",
                                "Limitation of utilization treated lumber, woods for fabrication of domestic goods and for preservation of food",
                                "Limitation of wood utilization for other purposes",
                                "Limitation of utilization of mushrooms and some medicinal plants",
                                "Limitation of utilization of medicinal plants, wild berry plants and forest hayfields"
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
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Lvl_CI_km2",
                                        "descr": "Рівень забруднення, Кі/км2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "FZone",
                                        "descr": "Зона обмеження",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Restr_U",
                                        "descr": "Обмеження",
                                        "IsHint": true,
                                        "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "Lvl_KBq_m2",
                                        "descr": "Уровень загрязнения, кБк/м2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Lvl_CI_km2",
                                        "descr": "Уровень загрязнения, Ки/км2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "FZone",
                                        "descr": "Зона ограничения",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Restr_R",
                                        "descr": "Ограничение",
                                        "IsHint": true,
                                        "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "Lvl_KBq_m2",
                                        "descr": "Contamination level, kBq/m2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Lvl_CI_km2",
                                        "descr": "Contamination level, Ci/km2",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "FZoneE",
                                        "descr": "Limitation zone",
                                        "IsHint": false,
                                        "IsInfo": true
                                    },
                                    {
                                        "propName": "Restr_E",
                                        "descr": "Limitation",
                                        "IsHint": true,
                                        "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Зонування лісів",
                geoJsonName_rus: "Зонирование лесов",
                geoJsonName_eng: "Zoning of forests "
            }));

        //GeoJson
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