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
        this._mapSettings.Zoom = 13;
        this._mapSettings.Center = [51.37, 30.03];
        this._mapSettings.MapZone = 5;

        //Nrz
        this._mapSettings.DefaultNRZLayer = new L.TileLayer(this._NRZFolderName + "Z{z}/{y}/{x}.png",
            {
                mapName_ukr: "Місця захоронення радіоактивних відходів у зоні відчуження",
                mapName_rus: "Места захоронения радиоактивных отходов в зоне отчуждения",
                mapName_eng: "Radwaste repositories in the exclusion zone",
                maxZoom: 14,
                minZoom: 12
            });


        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_37_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Назва",
                            "type": 1,
                        },
                        {
                            "propName": "ShortType",
                            "descr": "Тип (короткий)",
                            "type": 1,
                        },
                        {
                            "propName": "FullType",
                            "descr": "Тип (повний)",
                            "type": 1,
                        },
                    ],
                    rus: [
                         {
                             "propName": "RusName",
                             "descr": "Название",
                             "type": 1,
                         },
                        {
                            "propName": "ShortTypeR",
                            "descr": "Тип (короткий)",
                            "type": 1,
                        },
                        {
                            "propName": "FullTypeR",
                            "descr": "Тип (полный)",
                            "type": 1,
                        },
                    ],
                    eng: [
                        {
                            "propName": "EngName",
                            "descr": "Name",
                            "type": 1,
                        },
                        {
                            "propName": "FullTypeE",
                            "descr": "Type",
                            "type": 1,
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
                                        "descr": "Назва",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                        {
                            "propName": "ShortType",
                            "descr": "Тип (короткий)",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "FullType",
                            "descr": "Тип (повний)",
                            "IsHint": false,
                            "IsInfo": true
                                    }
                                    ],
                                    rus: [
                                    {
                                        "propName": "RusName",
                                        "descr": "Название",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                        {
                            "propName": "ShortTypeR",
                            "descr": "Тип (короткий)",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "FullTypeR",
                            "IsHint": false,
                            "IsInfo": true
                                    }
                                    ],
                                    eng: [
                                    {
                                        "propName": "EngName",
                                        "descr": "Name",
                                        "IsHint": true,
                                        "IsInfo": true
                                    },
                        {
                            "propName": "FullTypeE",
                            "descr": "Type",
                            "IsHint": false,
                            "IsInfo": true
                                    }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Місця захоронення радіоактивних відходів",
                geoJsonName_rus: "Места захоронения радиоактивных отходов",
                geoJsonName_eng: "Radwaste repositories"
            }));


        //Label PZRV_13_14_z_Lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(PZRV_13_14_z_Lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 13,
                        maxZoom: 14,
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
                                    "propForLabel": "EngName"
                                }
                            }
                    });
            }
        }));
        //Label Settl_13_14_z_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_13_14_z_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 13,
                        maxZoom: 14,
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

        //Labels Settl_12_z_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Settl_12_z_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 12,
                        maxZoom: 12,
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

    },
    getSettings: function () {
        return this._mapSettings;
    }
});