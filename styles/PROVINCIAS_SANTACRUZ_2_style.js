var size = 0;
var placement = 'point';

var style_PROVINCIAS_SANTACRUZ_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Cambria\', sans-serif";
    var labelFill = "#fb34e4";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("PROVINCIA") !== null) {
        labelText = String(feature.get("PROVINCIA"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,52,228,1.0)', lineDash: [10,5,1,5], lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
