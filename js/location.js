function init()
{
	const options = {};

	options.center             = [ 41.4857603, -71.3096452 ];
	options.zoom               = 16;
	options.attributionControl = false;
	options.zoomControl        = false;

	const icon = L.icon(
		{
			iconUrl     : "../assets/icon-location.svg",
			iconSize    : [ 66, 88 ],
			iconAnchor  : [ 33, 88 ],
			popupAnchor : [ 0, -81 ],
		},
	);

	const map     = L.map( 'map', options );
	const marker  = L.marker( options.center, { icon : icon } ).addTo( map );
	const basemap = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

	L.tileLayer( basemap,
		{
			attribution : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			ext         : "png",
		},
	).addTo( map );

	marker.bindPopup( "Hello there!" );
}

init();
