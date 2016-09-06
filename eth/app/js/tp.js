var converToJSON = function(values) {
	var ret = values.split('~');
	ret.each(function(item, index) {
		$(this).ret[index] = item.split();
	});
	return ret;
}