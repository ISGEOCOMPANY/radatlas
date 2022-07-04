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
                mapName_ukr: "Поширеність захворювань серед дорослих і підлітків 1, 2, 3 груп первинного обліку",
                mapName_rus: "Распространенность заболеваний среди взрослых и подростков 1, 2, 3 групп первичного учета",
                mapName_eng: "Morbidity prevalence among adults and adolescents of 1, 2, 3 groups of primary accounting",
                maxZoom: 8,
                minZoom: 5
            });

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_62_01,
            {
                FindProperties: {
                    ukr: [
                        {
                            "propName": "UkrName",
                            "descr": "Область",
                            "type": 1
                        },
                        {
                            "propName": "c_06_01",
                            "descr": "Поширеність захворювань серед дорослих і підлітків 1, 2, 3 груп, на 10 000, 1987",
                            "type": 3
                        },
                        {
                            "propName": "c_06_02",
                            "descr": "- 1988",
                            "type": 3
                        },
                        {
                            "propName": "c_06_03",
                            "descr": "- 1989",
                            "type": 3
                        },
                        {
                            "propName": "c_06_04",
                            "descr": "- 1990",
                            "type": 3
                        },
                        {
                            "propName": "c_06_05",
                            "descr": "- 1991",
                            "type": 3
                        },
                        {
                            "propName": "c_06_06",
                            "descr": "- 1992",
                            "type": 3
                        },
                        {
                            "propName": "c_06_07",
                            "descr": "- 1993",
                            "type": 3
                        },
                        {
                            "propName": "c_06_08",
                            "descr": "- 1994",
                            "type": 3
                        },
                        {
                            "propName": "c_06_09",
                            "descr": "- 1995",
                            "type": 3
                        },
                        {
                            "propName": "c_06_10",
                            "descr": "- 1996",
                            "type": 3
                        },
                        {
                            "propName": "c_06_11",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "c_06_12",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "c_06_13",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "c_06_14",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "c_06_15",
                            "descr": "- 2001",
                            "type": 3
                        },
                        {
                            "propName": "c_06_16",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "c_06_17",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "c_06_18",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "c_06_19",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "c_07_01",
                            "descr": "Поширеність захворювань серед дорослих і підлітків, на 10 000, 1987",
                            "type": 3
                        },
                        {
                            "propName": "c_07_02",
                            "descr": "- 1988",
                            "type": 3
                        },
                        {
                            "propName": "c_07_03",
                            "descr": "- 1989",
                            "type": 3
                        },
                        {
                            "propName": "c_07_04",
                            "descr": "- 1990",
                            "type": 3
                        },
                        {
                            "propName": "c_07_05",
                            "descr": "- 1991",
                            "type": 3
                        },
                        {
                            "propName": "c_07_06",
                            "descr": "- 1992",
                            "type": 3
                        },
                        {
                            "propName": "c_07_07",
                            "descr": "- 1993",
                            "type": 3
                        },
                        {
                            "propName": "c_07_08",
                            "descr": "- 1994",
                            "type": 3
                        },
                        {
                            "propName": "c_07_09",
                            "descr": "- 1995",
                            "type": 3
                        },
                        {
                            "propName": "c_07_10",
                            "descr": "- 1996",
                            "type": 3
                        },
                        {
                            "propName": "c_07_11",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "c_07_12",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "c_07_13",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "c_07_14",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "c_07_15",
                            "descr": "- 2001",
                            "type": 3
                        },
                        {
                            "propName": "c_07_16",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "c_07_17",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "c_07_18",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "c_07_19",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "OGL_05",
                            "descr": "Частка профілактично оглянутих дорослих і підлітків 1, 2, 3 груп, %, 2005",
                            "type": 3
                        },
                        {
                            "propName": "INF_05",
                            "descr": "Поширеність захворювань, на 1 000 потерпілих, інфекційні та паразитарні хвороби",
                            "type": 3
                        },
                        {
                            "propName": "NOV_05",
                            "descr": "- новоутворення",
                            "type": 3
                        }, {
                            "propName": "EN_05",
                            "descr": "- хвороби ендокринної системи, розладу харчування, порушення обміну речовин",
                            "type": 3
                        },
                        {
                            "propName": "BL_05",
                            "descr": "- хвороби крові та кровотворних органів",
                            "type": 3
                        },
                        {
                            "propName": "PS_05",
                            "descr": "- психічні розлади",
                            "type": 3
                        },
                        {
                            "propName": "NER_05",
                            "descr": "- хвороби нервової системи",
                            "type": 3
                        },
                        {
                            "propName": "CH_05",
                            "descr": "- хвороби органів чуття",
                            "type": 3
                        },
                        {
                            "propName": "BLO_05",
                            "descr": "- хвороби системи кровообігу",
                            "type": 3
                        },
                        {
                            "propName": "DY_05",
                            "descr": "- хвороби системи дихання",
                            "type": 3
                        },
                        {
                            "propName": "TR_05",
                            "descr": "- хвороби системи травлення",
                            "type": 3
                        },
                        {
                            "propName": "SE_05",
                            "descr": "- хвороби сечостатевої системи",
                            "type": 3
                        },
                        {
                            "propName": "SK_05",
                            "descr": "- хвороби шкіри та підшкірної клітковини",
                            "type": 3
                        },
                        {
                            "propName": "KI_05",
                            "descr": "- хвороби кістково-м'язової системи і сполучної тканини",
                            "type": 3
                        },
                        {
                            "propName": "AN_05",
                            "descr": "- уроджені аномалії",
                            "type": 3
                        },
                        {
                            "propName": "SYM_05",
                            "descr": "- симптоми, ознаки, неточно визначені стани",
                            "type": 3
                        },
                        {
                            "propName": "OTR_05",
                            "descr": "- травми та отруєння",
                            "type": 3
                        },
                        {
                            "propName": "SUM_05",
                            "descr": "- всього",
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
                            "propName": "c_06_01",
                            "descr": "Распространенность заболеваний среди взрослых и подростков 1, 2, 3 групп, на 10 000, 1987",
                            "type": 3
                        },
                        {
                            "propName": "c_06_02",
                            "descr": "- 1988",
                            "type": 3
                        },
                        {
                            "propName": "c_06_03",
                            "descr": "- 1989",
                            "type": 3
                        },
                        {
                            "propName": "c_06_04",
                            "descr": "- 1990",
                            "type": 3
                        },
                        {
                            "propName": "c_06_05",
                            "descr": "- 1991",
                            "type": 3
                        },
                        {
                            "propName": "c_06_06",
                            "descr": "- 1992",
                            "type": 3
                        },
                        {
                            "propName": "c_06_07",
                            "descr": "- 1993",
                            "type": 3
                        },
                        {
                            "propName": "c_06_08",
                            "descr": "- 1994",
                            "type": 3
                        },
                        {
                            "propName": "c_06_09",
                            "descr": "- 1995",
                            "type": 3
                        },
                        {
                            "propName": "c_06_10",
                            "descr": "- 1996",
                            "type": 3
                        },
                        {
                            "propName": "c_06_11",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "c_06_12",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "c_06_13",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "c_06_14",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "c_06_15",
                            "descr": "- 2001",
                            "type": 3
                        },
                        {
                            "propName": "c_06_16",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "c_06_17",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "c_06_18",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "c_06_19",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "c_07_01",
                            "descr": "Распространенность заболеваний среди взрослых и подростков, на 10 000, 1987",
                            "type": 3
                        },
                        {
                            "propName": "c_07_02",
                            "descr": "- 1988",
                            "type": 3
                        },
                        {
                            "propName": "c_07_03",
                            "descr": "- 1989",
                            "type": 3
                        },
                        {
                            "propName": "c_07_04",
                            "descr": "- 1990",
                            "type": 3
                        },
                        {
                            "propName": "c_07_05",
                            "descr": "- 1991",
                            "type": 3
                        },
                        {
                            "propName": "c_07_06",
                            "descr": "- 1992",
                            "type": 3
                        },
                        {
                            "propName": "c_07_07",
                            "descr": "- 1993",
                            "type": 3
                        },
                        {
                            "propName": "c_07_08",
                            "descr": "- 1994",
                            "type": 3
                        },
                        {
                            "propName": "c_07_09",
                            "descr": "- 1995",
                            "type": 3
                        },
                        {
                            "propName": "c_07_10",
                            "descr": "- 1996",
                            "type": 3
                        },
                        {
                            "propName": "c_07_11",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "c_07_12",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "c_07_13",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "c_07_14",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "c_07_15",
                            "descr": "- 2001",
                            "type": 3
                        },
                        {
                            "propName": "c_07_16",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "c_07_17",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "c_07_18",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "c_07_19",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "OGL_05",
                            "descr": "Доля профилактически осмотренных взрослых и подростков 1, 2, 3 групп, %, 2005",
                            "type": 3
                        },
                        {
                            "propName": "INF_05",
                            "descr": "Распространенность заболеваний, на 10 000 пострадавших, инфекционные и паразитарные болезни",
                            "type": 3
                        },
                        {
                            "propName": "NOV_05",
                            "descr": "- новообразования",
                            "type": 3
                        },
                        {
                            "propName": "EN_05",
                            "descr": "- болезни эндокринной системы, расстройства питания, нарушения обмена веществ",
                            "type": 3
                        },
                        {
                            "propName": "BL_05",
                            "descr": "- болезни крови и кроветворных органов",
                            "type": 3
                        },
                        {
                            "propName": "PS_05",
                            "descr": "- психические расстройства",
                            "type": 3
                        },
                        {
                            "propName": "NER_05",
                            "descr": "- болезни нервной системы",
                            "type": 3
                        },
                        {
                            "propName": "CH_05",
                            "descr": "- болезни органов чувств",
                            "type": 3
                        },
                        {
                            "propName": "BLO_05",
                            "descr": "- болезни системы кровообращения",
                            "type": 3
                        },
                        {
                            "propName": "DY_05",
                            "descr": "- болезни органов дыхания",
                            "type": 3
                        },
                        {
                            "propName": "TR_05",
                            "descr": "- болезни органов пищеварения",
                            "type": 3
                        },
                        {
                            "propName": "SE_05",
                            "descr": "- болезни мочеполовой системы",
                            "type": 3
                        },
                        {
                            "propName": "SK_05",
                            "descr": "- болезни кожи и подкожной клетчатки",
                            "type": 3
                        },
                        {
                            "propName": "KI_05",
                            "descr": "- болезни костно-мышечной системы и соединительной ткани",
                            "type": 3
                        },
                        {
                            "propName": "AN_05",
                            "descr": "- врожденные аномалии",
                            "type": 3
                        },
                        {
                            "propName": "SYM_05",
                            "descr": "- симптомы, признаки, неточно определенные состояния",
                            "type": 3
                        },
                        {
                            "propName": "OTR_05",
                            "descr": "- травмы и отравления",
                            "type": 3
                        },
                        {
                            "propName": "SUM_05",
                            "descr": "- всего",
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
                            "propName": "c_06_01",
                            "descr": "Morbidity prevalence among adults and adolescents of 1, 2, 3 groups, per 10 000, 1987",
                            "type": 3
                        },
                        {
                            "propName": "c_06_02",
                            "descr": "- 1988",
                            "type": 3
                        },
                        {
                            "propName": "c_06_03",
                            "descr": "- 1989",
                            "type": 3
                        },
                        {
                            "propName": "c_06_04",
                            "descr": "- 1990",
                            "type": 3
                        },
                        {
                            "propName": "c_06_05",
                            "descr": "- 1991",
                            "type": 3
                        },
                        {
                            "propName": "c_06_06",
                            "descr": "- 1992",
                            "type": 3
                        },
                        {
                            "propName": "c_06_07",
                            "descr": "- 1993",
                            "type": 3
                        },
                        {
                            "propName": "c_06_08",
                            "descr": "- 1994",
                            "type": 3
                        },
                        {
                            "propName": "c_06_09",
                            "descr": "- 1995",
                            "type": 3
                        },
                        {
                            "propName": "c_06_10",
                            "descr": "- 1996",
                            "type": 3
                        },
                        {
                            "propName": "c_06_11",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "c_06_12",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "c_06_13",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "c_06_14",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "c_06_15",
                            "descr": "- 2001",
                            "type": 3
                        },
                        {
                            "propName": "c_06_16",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "c_06_17",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "c_06_18",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "c_06_19",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "c_07_01",
                            "descr": "Morbidity prevalence among adults and adolescents, per 10 000, 1987",
                            "type": 3
                        },
                        {
                            "propName": "c_07_02",
                            "descr": "- 1988",
                            "type": 3
                        },
                        {
                            "propName": "c_07_03",
                            "descr": "- 1989",
                            "type": 3
                        },
                        {
                            "propName": "c_07_04",
                            "descr": "- 1990",
                            "type": 3
                        },
                        {
                            "propName": "c_07_05",
                            "descr": "- 1991",
                            "type": 3
                        },
                        {
                            "propName": "c_07_06",
                            "descr": "- 1992",
                            "type": 3
                        },
                        {
                            "propName": "c_07_07",
                            "descr": "- 1993",
                            "type": 3
                        },
                        {
                            "propName": "c_07_08",
                            "descr": "- 1994",
                            "type": 3
                        },
                        {
                            "propName": "c_07_09",
                            "descr": "- 1995",
                            "type": 3
                        },
                        {
                            "propName": "c_07_10",
                            "descr": "- 1996",
                            "type": 3
                        },
                        {
                            "propName": "c_07_11",
                            "descr": "- 1997",
                            "type": 3
                        },
                        {
                            "propName": "c_07_12",
                            "descr": "- 1998",
                            "type": 3
                        },
                        {
                            "propName": "c_07_13",
                            "descr": "- 1999",
                            "type": 3
                        },
                        {
                            "propName": "c_07_14",
                            "descr": "- 2000",
                            "type": 3
                        },
                        {
                            "propName": "c_07_15",
                            "descr": "- 2001",
                            "type": 3
                        },
                        {
                            "propName": "c_07_16",
                            "descr": "- 2002",
                            "type": 3
                        },
                        {
                            "propName": "c_07_17",
                            "descr": "- 2003",
                            "type": 3
                        },
                        {
                            "propName": "c_07_18",
                            "descr": "- 2004",
                            "type": 3
                        },
                        {
                            "propName": "c_07_19",
                            "descr": "- 2005",
                            "type": 3
                        },
                        {
                            "propName": "OGL_05",
                            "descr": "Part of preventively examined adults and adolescents of 1, 2, 3 groups, %, 2005",
                            "type": 3
                        },
                        {
                            "propName": "INF_05",
                            "descr": "Morbidity, per 10 000 suffered people, infectious and parasitic diseases",
                            "type": 3
                        },
                        {
                            "propName": "NOV_05",
                            "descr": "- neoplasms",
                            "type": 3
                        },
                        {
                            "propName": "EN_05",
                            "descr": "- endocrine system diseases, malnutrition, metabolic disorder",
                            "type": 3
                        },
                        {
                            "propName": "BL_05",
                            "descr": "- diseases of blood and hemopoietic organs",
                            "type": 3
                        },
                        {
                            "propName": "PS_05",
                            "descr": "- mental insanity",
                            "type": 3
                        },
                        {
                            "propName": "NER_05",
                            "descr": "- nervous system diseases",
                            "type": 3
                        },
                        {
                            "propName": "CH_05",
                            "descr": "- hearing diseases",
                            "type": 3
                        },
                        {
                            "propName": "BLO_05",
                            "descr": "- circulatory system diseases",
                            "type": 3
                        },
                        {
                            "propName": "DY_05",
                            "descr": "- respiratory diseases",
                            "type": 3
                        },
                        {
                            "propName": "TR_05",
                            "descr": "- digestive diseases",
                            "type": 3
                        },
                        {
                            "propName": "SE_05",
                            "descr": "- urogenital diseases",
                            "type": 3
                        },
                        {
                            "propName": "SK_05",
                            "descr": "- diseases of skin and subcutaneous fat",
                            "type": 3
                        },
                        {
                            "propName": "KI_05",
                            "descr": "- diseases of the musculoskeletal system and connective tissue",
                            "type": 3
                        },
                        {
                            "propName": "AN_05",
                            "descr": "- congenital anomalies",
                            "type": 3
                        },
                        {
                            "propName": "SYM_05",
                            "descr": "- symptoms, signs, inaccurately determined statuses",
                            "type": 3
                        },
                        {
                            "propName": "OTR_05",
                            "descr": "- traumas and intoxication",
                            "type": 3
                        },
                        {
                            "propName": "SUM_05",
                            "descr": "- total",
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
                                          "propName": "c_06_01",
                                          "descr": "Поширеність захворювань серед дорослих і підлітків 1, 2, 3 груп, на 10 000, 1987",
                                          "IsHint": false,
                                          "IsInfo": true
                                      },
                                        {
                                            "propName": "c_06_02",
                                            "descr": "- 1988",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_03",
                                            "descr": "- 1989",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_04",
                                            "descr": "- 1990",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_05",
                                            "descr": "- 1991",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_06",
                                            "descr": "- 1992",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_07",
                                            "descr": "- 1993",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_08",
                                            "descr": "- 1994",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_09",
                                            "descr": "- 1995",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_10",
                                            "descr": "- 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_11",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_12",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_13",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_14",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_15",
                                            "descr": "- 2001",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_16",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_17",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_18",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_06_19",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_01",
                                            "descr": "Поширеність захворювань серед дорослих і підлітків, на 10 000, 1987",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_02",
                                            "descr": "- 1988",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_03",
                                            "descr": "- 1989",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_04",
                                            "descr": "- 1990",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_05",
                                            "descr": "- 1991",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_06",
                                            "descr": "- 1992",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_07",
                                            "descr": "- 1993",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_08",
                                            "descr": "- 1994",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_09",
                                            "descr": "- 1995",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_10",
                                            "descr": "- 1996",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_11",
                                            "descr": "- 1997",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_12",
                                            "descr": "- 1998",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_13",
                                            "descr": "- 1999",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_14",
                                            "descr": "- 2000",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_15",
                                            "descr": "- 2001",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_16",
                                            "descr": "- 2002",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_17",
                                            "descr": "- 2003",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_18",
                                            "descr": "- 2004",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "c_07_19",
                                            "descr": "- 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "OGL_05",
                                            "descr": "Частка профілактично оглянутих дорослих і підлітків 1, 2, 3 груп, %, 2005",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "INF_05",
                                            "descr": "Поширеність захворювань, на 10 000 потерпілих, інфекційні та паразитарні хвороби",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "NOV_05",
                                            "descr": "- новоутворення",
                                            "IsHint": false,
                                            "IsInfo": true
                                        }, {
                                            "propName": "EN_05",
                                            "descr": "- хвороби ендокринної системи, розладу харчування, порушення обміну речовин",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "BL_05",
                                            "descr": "- хвороби крові та кровотворних органів",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "PS_05",
                                            "descr": "- психічні розлади",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "NER_05",
                                            "descr": "- хвороби нервової системи",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "CH_05",
                                            "descr": "- хвороби органів чуття",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "BLO_05",
                                            "descr": "- хвороби системи кровообігу",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "DY_05",
                                            "descr": "- хвороби системи дихання",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "TR_05",
                                            "descr": "- хвороби системи травлення",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "SE_05",
                                            "descr": "- хвороби сечостатевої системи",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "SK_05",
                                            "descr": "- хвороби шкіри та підшкірної клітковини",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "KI_05",
                                            "descr": "- хвороби кістково-м'язової системи і сполучної тканини",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "AN_05",
                                            "descr": "- уроджені аномалії",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "SYM_05",
                                            "descr": "- симптоми, ознаки, неточно визначені стани",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "OTR_05",
                                            "descr": "- травми та отруєння",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "SUM_DY_05",
                                            "descr": "- всього, без хвороб органів дихання",
                                            "IsHint": false,
                                            "IsInfo": true
                                        },
                                        {
                                            "propName": "SUM_05",
                                            "descr": "- всього",
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
                            "propName": "c_06_01",
                            "descr": "Распространенность заболеваний среди взрослых и подростков 1, 2, 3 групп, на 10 000, 1987",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_02",
                            "descr": "- 1988",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_03",
                            "descr": "- 1989",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_04",
                            "descr": "- 1990",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_05",
                            "descr": "- 1991",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_06",
                            "descr": "- 1992",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_07",
                            "descr": "- 1993",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_08",
                            "descr": "- 1994",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_09",
                            "descr": "- 1995",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_10",
                            "descr": "- 1996",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_11",
                            "descr": "- 1997",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_12",
                            "descr": "- 1998",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_13",
                            "descr": "- 1999",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_14",
                            "descr": "- 2000",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_15",
                            "descr": "- 2001",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_16",
                            "descr": "- 2002",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_17",
                            "descr": "- 2003",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_18",
                            "descr": "- 2004",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_19",
                            "descr": "- 2005",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_01",
                            "descr": "Распространенность заболеваний среди взрослых и подростков, на 10 000, 1987",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_02",
                            "descr": "- 1988",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_03",
                            "descr": "- 1989",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_04",
                            "descr": "- 1990",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_05",
                            "descr": "- 1991",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_06",
                            "descr": "- 1992",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_07",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_08",
                            "descr": "- 1994",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_09",
                            "descr": "- 1995",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_10",
                            "descr": "- 1996",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_11",
                            "descr": "- 1997",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_12",
                            "descr": "- 1998",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_13",
                            "descr": "- 1999",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_14",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_15",
                            "descr": "- 2001",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_16",
                            "descr": "- 2002",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_17",
                            "descr": "- 2003",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_18",
                            "descr": "- 2004",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_19",
                            "descr": "- 2005",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "OGL_05",
                            "descr": "Доля профилактически осмотренных взрослых и подростков 1, 2, 3 групп, %, 2005",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "INF_05",
                            "descr": "Распространенность заболеваний, на 10 000 пострадавших, инфекционные и паразитарные болезни",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "NOV_05",
                            "descr": "- новообразования",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "EN_05",
                            "descr": "- болезни эндокринной системы, расстройства питания, нарушения обмена веществ",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "BL_05",
                            "descr": "- болезни крови и кроветворных органов",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "PS_05",
                            "descr": "- психические расстройства",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "NER_05",
                            "descr": "- болезни нервной системы",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "CH_05",
                            "descr": "- болезни органов чувств",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "BLO_05",
                            "descr": "- болезни системы кровообращения",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "DY_05",
                            "descr": "- болезни органов дыхания",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "TR_05",
                            "descr": "- болезни органов пищеварения",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SE_05",
                            "descr": "- болезни мочеполовой системы",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SK_05",
                            "descr": "- болезни кожи и подкожной клетчатки",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "KI_05",
                            "descr": "- болезни костно-мышечной системы и соединительной ткани",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "AN_05",
                            "descr": "- врожденные аномалии",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SYM_05",
                            "descr": "- симптомы, признаки, неточно определенные состояния",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "OTR_05",
                            "descr": "- травмы и отравления",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SUM_DY_05",
                            "descr": "- всего, без болезней органов дыхания",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SUM_05",
                            "descr": "- всего",
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
                            "propName": "c_06_01",
                            "descr": "Morbidity prevalence among adults and adolescents of 1, 2, 3 groups, per 10 000, 1987",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_02",
                            "descr": "- 1988",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_03",
                            "descr": "- 1989",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_04",
                            "descr": "- 1990",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_05",
                            "descr": "- 1991",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_06",
                            "descr": "- 1992",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_07",
                            "descr": "- 1993",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_08",
                            "descr": "- 1994",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_09",
                            "descr": "- 1995",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_10",
                            "descr": "- 1996",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_11",
                            "descr": "- 1997",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_12",
                            "descr": "- 1998",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_13",
                            "descr": "- 1999",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_14",
                            "descr": "- 2000",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_15",
                            "descr": "- 2001",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_16",
                            "descr": "- 2002",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_17",
                            "descr": "- 2003",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_18",
                            "descr": "- 2004",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_06_19",
                            "descr": "- 2005",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_01",
                            "descr": "Morbidity prevalence among adults and adolescents, per 10 000, 1987",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_02",
                            "descr": "- 1988",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_03",
                            "descr": "- 1989",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_04",
                            "descr": "- 1990",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_05",
                            "descr": "- 1991",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_06",
                            "descr": "- 1992",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_07",
                            "descr": "- 1993",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_08",
                            "descr": "- 1994",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_09",
                            "descr": "- 1995",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_10",
                            "descr": "- 1996",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_11",
                            "descr": "- 1997",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_12",
                            "descr": "- 1998",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_13",
                            "descr": "- 1999",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_14",
                            "descr": "- 2000",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_15",
                            "descr": "- 2001",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_16",
                            "descr": "- 2002",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_17",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_18",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "c_07_19",
                            "descr": "- 2005",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "OGL_05",
                            "descr": "Part of preventively examined adults and adolescents of 1, 2, 3 groups, %, 2005",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "INF_05",
                            "descr": "Morbidity, per 10 000 suffered people, infectious and parasitic diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "NOV_05",
                            "descr": "- neoplasms",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "EN_05",
                            "descr": "- endocrine system diseases, malnutrition, metabolic disorder",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "BL_05",
                            "descr": "- diseases of blood and hemopoietic organs",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "PS_05",
                            "descr": "- mental insanity",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "NER_05",
                            "descr": "- nervous system diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "CH_05",
                            "descr": "- hearing diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "BLO_05",
                            "descr": "- circulatory system diseases",
                            "type": 3
                        },
                        {
                            "propName": "DY_05",
                            "descr": "- respiratory diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "TR_05",
                            "descr": "- digestive diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SE_05",
                            "descr": "- urogenital diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SK_05",
                            "descr": "- diseases of skin and subcutaneous fat",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "KI_05",
                            "descr": "- diseases of the musculoskeletal system and connective tissue",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "AN_05",
                            "descr": "- congenital anomalies",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SYM_05",
                            "descr": "- symptoms, signs, inaccurately determined statuses",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "OTR_05",
                            "descr": "- traumas and intoxication",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SUM_DY_05",
                            "descr": "- total, except respiratory diseases",
                            "IsHint": false,
                            "IsInfo": true
                        },
                        {
                            "propName": "SUM_05",
                            "descr": "- total",
                            "IsHint": false,
                            "IsInfo": true
                        }
                                    ]
                                }
                        });
                },
                geoJsonName_ukr: "Поширеність захворювань серед дорослих і підлітків 1, 2, 3 груп первинного обліку",
                geoJsonName_rus: "Распространенность заболеваний среди взрослых и подростков 1, 2, 3 групп первичного учета",
                geoJsonName_eng: "Morbidity prevalence among adults and adolescents of 1, 2, 3 groups of primary accounting"
            }));

        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_62_02,
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
                geoJsonName_ukr: "",
                geoJsonName_rus: "",
                geoJsonName_eng: ""
            }));



        //GeoJson
        this._mapSettings.DefaultGeoJsonLayers.push(new L.geoJson(Layer_24088287_091098_62_04,
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
        //Graph_62_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Graph_62_lbl, {
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

        //Them1_62_lbl
        this._mapSettings.LabelLayers.push(new L.geoJson(Them1_62_lbl, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    opacity: 0,
                    fillOpacity: 0
                }).showLabel();
            },
            onEachFeature: function (feature, layer) {
                aSettings._labelLayerDataOnEachLayel(feature, layer, aSettings,
                    {
                        minZoom: 7,
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