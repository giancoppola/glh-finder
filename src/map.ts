import{transformExtent, fromLonLat} from 'ol/proj.js'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import * as extent from 'ol/extent.js'

export default class OLMap {
    RenderMap() {
        const ukExtent = transformExtent([49.34, -6.57, 56.61, 2.83], 'EPSG:4326', 'EPSG:3857');
        const map = new Map({
            target: 'map',
            layers: [
            new TileLayer({
                source: new OSM(),
            }),
            ],
            view: new View({
                center: fromLonLat([25.4833, 42.7250]),
                zoom: 6,
                maxZoom: 15,
                minZoom: 7,
                // extent: extent.buffer(ukExtent, 100000),
                // showFullExtent: true,
            }),
        });
    }
}