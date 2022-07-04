L.Control.Distance = L.Control.extend({
    options: {
        position: 'topleft',
        popups: true,
        title: ''
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
        this._line = new L.Polyline([], { editable: true, color: '#FF0000', weight: 3 });
        this._line.on('edit', this._update, this);
        this._line.on('click', function (e) { });
        this._active = false;
        this._markersIDs = [];
    },

    getLine: function () { return this._line; },

    onAdd: function (map) {
        map.distanceControl = this;
        var className = 'leaflet-control-distance',
            container = this._container = L.DomUtil.create('div', className);

        function cb() {
            if (this._active) {
                this._calc_disable();
                this._reset();
                this._link.childNodes[0].src = '../../00_System/Map/Images/button_ruler.png';
            }
            else {
                this._calc_enable();
                this._link.childNodes[0].src = '../../00_System/Map/Images/button_ruler_on.png';
            }
        }

        var link = this._link = this._createButton(this.options.title, 'leaflet-control-distance leaflet-control-distance-edit', container, cb, this);
        //var del = this._link_delete = this._createButton('Delete', 'leaflet-control-distance leaflet-control-distance-delete', container, this._reset, this);
        var text = this._text = L.DomUtil.create('div', 'leaflet-control-distance-text', container);

        this._map.addLayer(this._line);
        this._calc_disable();
        return container;
    },

    _createButton: function (title, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = title;

        L.DomEvent
			.addListener(link, 'click', L.DomEvent.stopPropagation)
			.addListener(link, 'click', L.DomEvent.preventDefault)
			.addListener(link, 'click', fn, context);

        return link;
    },

    onRemove: function (map) {
        this._calc_disable();
    },

    _calc_enable: function () {
        this._map.on('click', this._add_point, this);
        //$("g").each(this._add_point);
        this._map.getContainer().classList.add('distanceActive');
        //this._map.getContainer().style.cursor = 'crosshair !important';
        L.DomUtil.addClass(this._link, 'leaflet-control-distance-active');
        //this._container.appendChild(this._link_delete);
        this._container.appendChild(this._text);
        this._active = true;
        if (!this._map.hasLayer(this._line))
            this._map.addLayer(this._line);
        this._update();
    },

    _calc_disable: function () {
        this._map.off('click', this._add_point, this);
        //this._map.getContainer().style.cursor = 'default';
        this._map.getContainer().classList.remove('distanceActive');
        //this._container.removeChild(this._link_delete);
        this._container.removeChild(this._text);
        L.DomUtil.removeClass(this._link, 'leaflet-control-distance-active');
        this._active = false;
    },

    _add_point: function (e) {
        var len = this._line.getLatLngs().length;
        this._line.addLatLng(e.latlng);

        var lIcon = L.icon({
            iconUrl: '../../00_System/Map/Images/point.png',
            iconSize: [13, 13],
            iconAnchor: [6, 6],
            popupAnchor: [6, 6]
        });

        var marker = new L.Marker(e.latlng, { icon: lIcon, title: this._line.getLatLngs().length }).addTo(this._map);

        this._markersIDs.push(marker._leaflet_id);

        this._line.fire('edit', {});
    },

    _reset: function (e) {
        //Remove markers of distance
        for (i = 0; i < this._markersIDs.length; i++) {
            this._map._layers[this._markersIDs[i]]._removeIcon();
        }
        this._markersIDs = [];

        this._line.setLatLngs([]);
        this._line.fire('edit', {});
        this._line.redraw();
    },

    _update: function (e) {
        console.info("Update");
        this._text.textContent = this._d2txt(this._distance_calc());
    },

    _d2txt: function (d) {
        if (d < 2000)
            return d.toFixed(0) + " m";
        else
            return (d / 1000).toFixed(1) + " km";
    },

    _distance_calc: function (e) {
        var ll = this._line.getLatLngs();
        var d = 0, p = null;
        for (var i = 0; i < ll.length; i++) {
            if (i)
                d += p.distanceTo(ll[i]);
            if (this.options.popups) {
            }
            p = ll[i];
        }
        return d;
    }
});
