ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32614").setExtent([460819.020958, 2098408.143612, 491366.136377, 2115838.429624]);
var wms_layers = [];


        var lyr_Satelie_0 = new ol.layer.Tile({
            'title': 'Satelie',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_municipio_1 = new ol.format.GeoJSON();
var features_municipio_1 = format_municipio_1.readFeatures(json_municipio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_municipio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipio_1.addFeatures(features_municipio_1);
var lyr_municipio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipio_1, 
                style: style_municipio_1,
                interactive: true,
                title: '<img src="styles/legend/municipio_1.png" /> municipio'
            });
var format_localidad_nueva_2 = new ol.format.GeoJSON();
var features_localidad_nueva_2 = format_localidad_nueva_2.readFeatures(json_localidad_nueva_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_localidad_nueva_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidad_nueva_2.addFeatures(features_localidad_nueva_2);
var lyr_localidad_nueva_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localidad_nueva_2, 
                style: style_localidad_nueva_2,
                interactive: true,
                title: '<img src="styles/legend/localidad_nueva_2.png" /> localidad_nueva'
            });
var format_manzanas_nuevas_3 = new ol.format.GeoJSON();
var features_manzanas_nuevas_3 = format_manzanas_nuevas_3.readFeatures(json_manzanas_nuevas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_manzanas_nuevas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_nuevas_3.addFeatures(features_manzanas_nuevas_3);
var lyr_manzanas_nuevas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_nuevas_3, 
                style: style_manzanas_nuevas_3,
                interactive: true,
                title: '<img src="styles/legend/manzanas_nuevas_3.png" /> manzanas_nuevas'
            });
var format_Areas_de_recreacion_4 = new ol.format.GeoJSON();
var features_Areas_de_recreacion_4 = format_Areas_de_recreacion_4.readFeatures(json_Areas_de_recreacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Areas_de_recreacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_de_recreacion_4.addFeatures(features_Areas_de_recreacion_4);
var lyr_Areas_de_recreacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_de_recreacion_4, 
                style: style_Areas_de_recreacion_4,
                interactive: true,
                title: '<img src="styles/legend/Areas_de_recreacion_4.png" /> Areas_de_recreacion'
            });
var format_limites_predios_5 = new ol.format.GeoJSON();
var features_limites_predios_5 = format_limites_predios_5.readFeatures(json_limites_predios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_limites_predios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_predios_5.addFeatures(features_limites_predios_5);
var lyr_limites_predios_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limites_predios_5, 
                style: style_limites_predios_5,
                interactive: true,
                title: '<img src="styles/legend/limites_predios_5.png" /> limites_predios'
            });
var format_Vialidades_6 = new ol.format.GeoJSON();
var features_Vialidades_6 = format_Vialidades_6.readFeatures(json_Vialidades_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Vialidades_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidades_6.addFeatures(features_Vialidades_6);
var lyr_Vialidades_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidades_6, 
                style: style_Vialidades_6,
                interactive: true,
                title: '<img src="styles/legend/Vialidades_6.png" /> Vialidades'
            });
var format_Red_de_Carreteras_7 = new ol.format.GeoJSON();
var features_Red_de_Carreteras_7 = format_Red_de_Carreteras_7.readFeatures(json_Red_de_Carreteras_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Red_de_Carreteras_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_de_Carreteras_7.addFeatures(features_Red_de_Carreteras_7);
var lyr_Red_de_Carreteras_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_de_Carreteras_7, 
                style: style_Red_de_Carreteras_7,
                interactive: true,
    title: 'Red_de_Carreteras<br />\
    <img src="styles/legend/Red_de_Carreteras_7_0.png" /> CAMINO<br />\
    <img src="styles/legend/Red_de_Carreteras_7_1.png" /> CUOTA<br />\
    <img src="styles/legend/Red_de_Carreteras_7_2.png" /> LIBRE<br />'
        });

lyr_Satelie_0.setVisible(true);lyr_municipio_1.setVisible(true);lyr_localidad_nueva_2.setVisible(true);lyr_manzanas_nuevas_3.setVisible(true);lyr_Areas_de_recreacion_4.setVisible(true);lyr_limites_predios_5.setVisible(true);lyr_Vialidades_6.setVisible(true);lyr_Red_de_Carreteras_7.setVisible(true);
var layersList = [lyr_Satelie_0,lyr_municipio_1,lyr_localidad_nueva_2,lyr_manzanas_nuevas_3,lyr_Areas_de_recreacion_4,lyr_limites_predios_5,lyr_Vialidades_6,lyr_Red_de_Carreteras_7];
lyr_municipio_1.set('fieldAliases', {'NOMGEO': 'NOMGEO', });
lyr_localidad_nueva_2.set('fieldAliases', {'qc_id': 'qc_id', 'nom_loc': 'nom_loc', });
lyr_manzanas_nuevas_3.set('fieldAliases', {});
lyr_Areas_de_recreacion_4.set('fieldAliases', {'objeto': 'objeto', });
lyr_limites_predios_5.set('fieldAliases', {});
lyr_Vialidades_6.set('fieldAliases', {'VIALIDAD': 'VIALIDAD', 'TIPO_VIALI': 'TIPO_VIALI', 'SENTIDO': 'SENTIDO', });
lyr_Red_de_Carreteras_7.set('fieldAliases', {'TIPOVIA': 'TIPOVIA', 'TIPO': 'TIPO', 'NUMERO': 'NUMERO', 'DERE_TRAN': 'DERE_TRAN', 'Nombre': 'Nombre', });
lyr_municipio_1.set('fieldImages', {'NOMGEO': 'TextEdit', });
lyr_localidad_nueva_2.set('fieldImages', {'qc_id': 'Hidden', 'nom_loc': 'TextEdit', });
lyr_manzanas_nuevas_3.set('fieldImages', {});
lyr_Areas_de_recreacion_4.set('fieldImages', {'objeto': 'TextEdit', });
lyr_limites_predios_5.set('fieldImages', {});
lyr_Vialidades_6.set('fieldImages', {'VIALIDAD': 'TextEdit', 'TIPO_VIALI': 'Hidden', 'SENTIDO': 'Hidden', });
lyr_Red_de_Carreteras_7.set('fieldImages', {'TIPOVIA': 'Hidden', 'TIPO': 'Hidden', 'NUMERO': 'Hidden', 'DERE_TRAN': 'Hidden', 'Nombre': 'TextEdit', });
lyr_municipio_1.set('fieldLabels', {'NOMGEO': 'no label', });
lyr_localidad_nueva_2.set('fieldLabels', {'nom_loc': 'no label', });
lyr_manzanas_nuevas_3.set('fieldLabels', {});
lyr_Areas_de_recreacion_4.set('fieldLabels', {'objeto': 'no label', });
lyr_limites_predios_5.set('fieldLabels', {});
lyr_Vialidades_6.set('fieldLabels', {'VIALIDAD': 'no label', });
lyr_Red_de_Carreteras_7.set('fieldLabels', {'Nombre': 'no label', });
lyr_Red_de_Carreteras_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});