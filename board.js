var path = new Path();
path.strokeColor = 'black';
var start = new Point(100, 100);
path.moveTo(start);
path.lineTo(start + [ 100, -50 ]);
var path = new Path.Circle(view.bounds.center, 30);
path.fillColor = 'red';

view.onResize = function(event) {
    path.position = view.center;
}