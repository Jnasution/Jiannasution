ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([106.589441, -6.357365, 106.795883, -6.217695]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_wilayahadm_kelurahantangsel_1 = new ol.format.GeoJSON();
var features_wilayahadm_kelurahantangsel_1 = format_wilayahadm_kelurahantangsel_1.readFeatures(json_wilayahadm_kelurahantangsel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_wilayahadm_kelurahantangsel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayahadm_kelurahantangsel_1.addFeatures(features_wilayahadm_kelurahantangsel_1);
var lyr_wilayahadm_kelurahantangsel_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wilayahadm_kelurahantangsel_1, 
                style: style_wilayahadm_kelurahantangsel_1,
                interactive: true,
                title: '<img src="styles/legend/wilayahadm_kelurahantangsel_1.png" /> wilayah adm_kelurahantangsel'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: false,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                interactive: false,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_wilayahadm_kelurahantangsel_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Sungai_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_wilayahadm_kelurahantangsel_1,lyr_Jalan_2,lyr_Sungai_3];
lyr_wilayahadm_kelurahantangsel_1.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Meninggal': 'Meninggal', 'ODP': 'ODP', 'Positif': 'Positif', 'PDP': 'PDP', });
lyr_Jalan_2.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_Sungai_3.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_wilayahadm_kelurahantangsel_1.set('fieldImages', {'Kelurahan': '', 'Meninggal': '', 'ODP': '', 'Positif': '', 'PDP': '', });
lyr_Jalan_2.set('fieldImages', {'fclass': '', 'name': '', });
lyr_Sungai_3.set('fieldImages', {'fclass': '', 'name': '', });
lyr_wilayahadm_kelurahantangsel_1.set('fieldLabels', {'Kelurahan': 'inline label', 'Meninggal': 'inline label', 'ODP': 'inline label', 'Positif': 'inline label', 'PDP': 'inline label', });
lyr_Jalan_2.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', });
lyr_Sungai_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});