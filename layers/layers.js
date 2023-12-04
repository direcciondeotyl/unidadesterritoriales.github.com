ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32720").setExtent([-163526.687519, 7694705.936129, 1271665.225807, 8505818.387144]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIOS_SANTA_CRUZ_1 = new ol.format.GeoJSON();
var features_MUNICIPIOS_SANTA_CRUZ_1 = format_MUNICIPIOS_SANTA_CRUZ_1.readFeatures(json_MUNICIPIOS_SANTA_CRUZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_MUNICIPIOS_SANTA_CRUZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_SANTA_CRUZ_1.addFeatures(features_MUNICIPIOS_SANTA_CRUZ_1);
var lyr_MUNICIPIOS_SANTA_CRUZ_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_SANTA_CRUZ_1, 
                style: style_MUNICIPIOS_SANTA_CRUZ_1,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_SANTA_CRUZ_1.png" /> MUNICIPIOS_SANTA_CRUZ'
            });
var format_PROVINCIAS_SANTACRUZ_2 = new ol.format.GeoJSON();
var features_PROVINCIAS_SANTACRUZ_2 = format_PROVINCIAS_SANTACRUZ_2.readFeatures(json_PROVINCIAS_SANTACRUZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_PROVINCIAS_SANTACRUZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_SANTACRUZ_2.addFeatures(features_PROVINCIAS_SANTACRUZ_2);
var lyr_PROVINCIAS_SANTACRUZ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_SANTACRUZ_2, 
                style: style_PROVINCIAS_SANTACRUZ_2,
                interactive: true,
                title: '<img src="styles/legend/PROVINCIAS_SANTACRUZ_2.png" /> PROVINCIAS_SANTA CRUZ'
            });
var format_DEPARTAMENTO_SANTA_CRUZ_3 = new ol.format.GeoJSON();
var features_DEPARTAMENTO_SANTA_CRUZ_3 = format_DEPARTAMENTO_SANTA_CRUZ_3.readFeatures(json_DEPARTAMENTO_SANTA_CRUZ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_DEPARTAMENTO_SANTA_CRUZ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTO_SANTA_CRUZ_3.addFeatures(features_DEPARTAMENTO_SANTA_CRUZ_3);
var lyr_DEPARTAMENTO_SANTA_CRUZ_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTO_SANTA_CRUZ_3, 
                style: style_DEPARTAMENTO_SANTA_CRUZ_3,
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTO_SANTA_CRUZ_3.png" /> DEPARTAMENTO_SANTA_CRUZ'
            });
var format_LIMITES_PRECISOS_SANTA_CRUZ_4 = new ol.format.GeoJSON();
var features_LIMITES_PRECISOS_SANTA_CRUZ_4 = format_LIMITES_PRECISOS_SANTA_CRUZ_4.readFeatures(json_LIMITES_PRECISOS_SANTA_CRUZ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LIMITES_PRECISOS_SANTA_CRUZ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_PRECISOS_SANTA_CRUZ_4.addFeatures(features_LIMITES_PRECISOS_SANTA_CRUZ_4);
var lyr_LIMITES_PRECISOS_SANTA_CRUZ_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_PRECISOS_SANTA_CRUZ_4, 
                style: style_LIMITES_PRECISOS_SANTA_CRUZ_4,
                interactive: true,
                title: '<img src="styles/legend/LIMITES_PRECISOS_SANTA_CRUZ_4.png" /> LIMITES_PRECISOS_SANTA_CRUZ'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MUNICIPIOS_SANTA_CRUZ_1.setVisible(true);lyr_PROVINCIAS_SANTACRUZ_2.setVisible(true);lyr_DEPARTAMENTO_SANTA_CRUZ_3.setVisible(true);lyr_LIMITES_PRECISOS_SANTA_CRUZ_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MUNICIPIOS_SANTA_CRUZ_1,lyr_PROVINCIAS_SANTACRUZ_2,lyr_DEPARTAMENTO_SANTA_CRUZ_3,lyr_LIMITES_PRECISOS_SANTA_CRUZ_4];
lyr_MUNICIPIOS_SANTA_CRUZ_1.set('fieldAliases', {'C_UT': 'C_UT', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', });
lyr_PROVINCIAS_SANTACRUZ_2.set('fieldAliases', {'C_UT': 'C_UT', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'ZONA': 'ZONA', });
lyr_DEPARTAMENTO_SANTA_CRUZ_3.set('fieldAliases', {'C_UT': 'C_UT', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_4.set('fieldAliases', {'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'TIPO_LIMIT': 'TIPO_LIMIT', 'Z_UTM': 'Z_UTM', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', });
lyr_MUNICIPIOS_SANTA_CRUZ_1.set('fieldImages', {'C_UT': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', });
lyr_PROVINCIAS_SANTACRUZ_2.set('fieldImages', {'C_UT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_DEPARTAMENTO_SANTA_CRUZ_3.set('fieldImages', {'C_UT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_4.set('fieldImages', {'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'TIPO_LIMIT': 'TextEdit', 'Z_UTM': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', });
lyr_MUNICIPIOS_SANTA_CRUZ_1.set('fieldLabels', {'C_UT': 'no label', 'PROVINCIA': 'no label', 'MUNICIPIO': 'no label', 'ZONA': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', });
lyr_PROVINCIAS_SANTACRUZ_2.set('fieldLabels', {'C_UT': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'ZONA': 'no label', });
lyr_DEPARTAMENTO_SANTA_CRUZ_3.set('fieldLabels', {'C_UT': 'no label', 'DEPARTAMEN': 'no label', 'CAPITAL': 'no label', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_4.set('fieldLabels', {'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'TIPO_LIMIT': 'no label', 'Z_UTM': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});