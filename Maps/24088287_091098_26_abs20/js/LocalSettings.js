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
                mapName_ukr: "Сумарні ефективні дози зовнішнього та внутрішнього (від радіоізотопів цезію, стронцію та трансуранових елементів) опромінення, розраховані на період 1986-2006 роки (20 років після аварії)",
                mapName_rus: "Суммарные эффективные дозы внешнего и внутреннего (от радиоизотопов цезия, стронция и трансурановых элементов) облучения, рассчитанные на период 1986-2006 годов (20 лет после аварии)",
                mapName_eng: "Total effective doses for external and internal (caused by radioisotopes cesium, strontium and transuranium elements) irradiation, calculated for 1986-2006 (20 years after the accident)",
                maxZoom: 8,
                minZoom: 5
            });

        //Векторный слой по умолчанию
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_26_abs20_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "Interval",
                            "descr": "Дози опромінення, мЗв",
                            "type": 2,
                            "ranges": [
                                 "< 5",
                                "5 - 15",
                                "15 - 35",
                                "35 - 70",
                                "70 - 100",
                                "100 - 150",
                                "> 150"
                            ]
                        },

                    ],
                    rus: [
                        {
                            "propName": "Interval",
                            "descr": "Дозы облучения, мЗв",
                            "type": 2,
                            "ranges": [
                                 "< 5",
                                "5 - 15",
                                "15 - 35",
                                "35 - 70",
                                "70 - 100",
                                "100 - 150",
                                "> 150"
                            ]
                        },
                    ],
                    eng: [
                        {
                            "propName": "Interval",
                            "descr": "Irradiation doses, mSv",
                            "type": 2,
                            "ranges": [
                                 "< 5",
                                "5 - 15",
                                "15 - 35",
                                "35 - 70",
                                "70 - 100",
                                "100 - 150",
                                "> 150"
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
                                        "descr": "Дози опромінення, мЗв",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    ],
                                    rus: [
                                    {
                                        "propName": "Interval",
                                        "descr": "Дозы облучения, мЗв",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    ],
                                    eng: [
                                    {
                                        "propName": "Interval",
                                        "descr": "Irradiation doses, mSv",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Розрахункові накопичені дози опромінення",
                geoJsonName_rus: "Расчетные накопленные дозы облучения",
                geoJsonName_eng: "Calculated accumulated irradiation doses"
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