function init()
{
	const options = {};

	options.center             = [ 41.485534, -71.308134 ];
	options.zoom               = 16;
	options.attributionControl = false;
	options.zoomControl        = false;

	const icon = L.icon(
		{
			iconUrl     : "https://raw.githubusercontent.com/razouck/art-gallery-website/main/assets/icon-location.svg",
			iconSize    : [ 66, 88 ],
			iconAnchor  : [ 33, 88 ],
			popupAnchor : [ 0, -81 ],
		},
	);

	const map         = L.map( 'map', options );
	const marker      = L.marker( options.center, { icon : icon } ).addTo( map );
	const basemap     = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
	const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">openstreetmap</a>';

	L.tileLayer( basemap,
		{
			attribution : attribution,
			ext         : "png",
			minZoom     : 16,
		},
	).addTo( map );

	marker.bindPopup( "Hello there!" );
}

init();
