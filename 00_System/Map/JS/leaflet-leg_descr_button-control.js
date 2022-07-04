L.Control.LegDescrButton = L.Control.extend({
    options: {
        position: 'topleft'
    },
    initialize: function (options) {
        this._button = {};
        this.setButton(options);
        this._window = options.window;
    },

    onAdd: function (map) {
        this._map = map;
        var container = L.DomUtil.create('div', 'leaflet-control-button');

        this._container = container;

        this._update();
        return this._container;
    },

    onRemove: function (map) {
    },

    setButton: function (options) {
        var button = {
            'text': options.text,                 //string
            'iconUrl': options.iconUrl,           //string
            'iconUrlClose': options.iconUrlClose,
            'onClick': options.onClick,           //callback function
            'hideText': !!options.hideText,         //forced bool
            'maxWidth': options.maxWidth || 70,     //number
            'doToggle': options.toggle,			//bool
            'toggleStatus': false,					//bool
            'title': options.title,
            'iFrameSrc': options.iFrameSrc,
            'isMobile': options.isMobile
        };

        this._button = button;
        this._update();
    },

    getText: function () {
        return this._button.text;
    },

    getIconUrl: function () {
        return this._button.iconUrl;
    },

    destroy: function () {
        this._button = {};
        this._update();
    },

    toggle: function (e) {
        if (typeof e === 'boolean') {
            this._button.toggleStatus = e;
        }
        else {
            this._button.toggleStatus = !this._button.toggleStatus;
        }
    },

    _update: function () {
        if (!this._map) {
            return;
        }

        this._container.innerHTML = '';
        this._makeButton(this._button);

    },

    _makeButton: function (button) {
        var newButton = L.DomUtil.create('div', 'leaflet-buttons-control-button', this._container);
        if (button.toggleStatus)
            L.DomUtil.addClass(newButton, 'leaflet-buttons-control-toggleon');

        var image = L.DomUtil.create('img', 'leaflet-buttons-control-img', newButton);
        image.setAttribute('src', button.iconUrl);
        image.setAttribute('title', button.title);

        var divIFrame = this.divIFrame = L.DomUtil.create('div', 'leaflet-control-button-hidden', document.body);
        var lIsMobile = this._button.isMobile ? '-mobile' : '';
        var closeBtn = this.closeBtn = L.DomUtil.create('a', 'leaflet-control-close-button' + lIsMobile, divIFrame);
        this.closeBtn.href = "#closeLorD", this.closeBtn.innerHTML = "&#215;"
        L.DomEvent
          .addListener(this.closeBtn, 'click', L.DomEvent.stop)
          .addListener(this.closeBtn, 'click', this._clicked, this)
          .addListener(this.closeBtn, 'click', this._hideIFrame, this);

        var IFrame = this.IFrame = L.DomUtil.create('iframe', 'leaflet-control-iframe' + lIsMobile, divIFrame);
        IFrame.setAttribute('src', button.iFrameSrc);
        this.IFrame.setAttribute('style', 'position:absolute; z-index:' + this._map.options.mapLegDescrZIndex);

        L.DomEvent
          .addListener(newButton, 'click', L.DomEvent.stop)
          .addListener(newButton, 'click', this._btnClick, this);
        L.DomEvent.disableClickPropagation(newButton);

        return newButton;

    },
    _btnClick: function () {
        this._clicked();
        if (L.DomUtil.hasClass(this.divIFrame, 'leaflet-control-button-hidden')) {
            this._showIFrame();
        }
        else {
            this._hideIFrame();
        }
    },
    _showIFrame: function () {
        L.DomUtil.removeClass(this.divIFrame, 'leaflet-control-button-hidden');
        this._map.options.mapLegDescrZIndex++;
        this.IFrame.setAttribute('style', 'position:absolute; z-index:' + this._map.options.mapLegDescrZIndex);
    },
    _hideIFrame: function () {
        L.DomUtil.addClass(this.divIFrame, 'leaflet-control-button-hidden');
    },

    _clicked: function () {  //'this' refers to button
        if (this._button.doToggle) {
            if (this._button.toggleStatus) {	//currently true, remove class
                this._window.closed = "true";
                this._container.childNodes[0].childNodes[0].src = this._button.iconUrl;
            }
            else {
                this._window.closed = "false";
                this._container.childNodes[0].childNodes[0].src = this._button.iconUrlClose;
            }
            this.toggle();
        }
        return;
    }

});