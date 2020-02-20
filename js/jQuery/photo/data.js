var data = [];
 
var dataStr = "1.DeathNote<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
2.FateUBW<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
3.FateZero<br>\
<br>\
Japanese Cartoon<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}         