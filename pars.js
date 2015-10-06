var text = '{"coord":{"lon":80.16,"lat":13.03}}';
obj = $.parseJSON(text);
$("#myWeather").html(obj.coord.lon + " " + obj.coord.lat);