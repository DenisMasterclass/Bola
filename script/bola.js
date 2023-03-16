var $ball = $('#balls > div'),
    diameter = $ball.height(),
    perimeter = Math.PI * diameter,
		n = $ball.length,
    i = 0,
		itv;

itv = setInterval(function(){
	if(i>n)clearInterval(itv);
	rotateBall( 500-(diameter*i) );
	i++;
},2000);

function rotateBall(distance) {
	console.log( distance );
  var degree = distance * 360 / perimeter;
	$ball.eq(i).css({
		transition: "2s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
		transform: 'translateX('+ distance +'px)'
	}).find('div').css({
		transition: "2s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
		transform: 'rotate(' + degree + 'deg)'	
	});
}