height = [155, 160, 165, 170, 175];
var loopingFor = () => {
  for (var i = 0; i < height.length; i++)
    console.log(height[i]);
}
loopingFor()

for (a of height) {
  console.log(a + " dengan of");
}