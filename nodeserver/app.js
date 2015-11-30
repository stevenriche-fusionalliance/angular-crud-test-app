var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send('It works!');
  response.end();
});

app.get('/all', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  response.json(students);
  response.end();
});

app.listen(3000, function(){
  console.log('App started...');
});

var students = [
  {
    "index":1,
    "name":"Harry Potter",
    "school":"Gryffindor",
    "grade":80,
    "description":"His duobus, sicariorum. Et orci aetate erat, sed nescio quo modo se gerendo levir meus aufert a me. Propter hoc 'interventu 'vivere me scito. Et tamen hoc quod multo altius est eget arcu. Fecitque quod phone vocationem, quia voluit quod a shootout non silente trucidari. "
  },
  {
    "index":2,
    "name":"Hermione Granger",
    "school":"Gryffindor",
    "grade":100,
    "description":"Bacon ipsum dolor amet beef ribs pig ground round pork cow biltong. Turducken spare ribs leberkas jerky cow, bacon drumstick short loin cupim brisket pancetta shoulder tail tri-tip sausage. Pork loin tenderloin cupim leberkas. Tri-tip turkey ribeye alcatra, shank pork loin turducken. Capicola tongue rump shankle pork loin short ribs pork chop corned beef boudin tail pork belly chicken ham turkey pig. Landjaeger meatball fatback turkey."
  },
  {
    "index":3,
    "name":"Ron Weasley",
    "school":"Gryffindor",
    "grade":80,
    "description":"Williamsburg bespoke trust fund, tumblr meditation bushwick hella hammock hoodie distillery irony chia disrupt. Migas try-hard brooklyn, hella freegan ethical etsy photo booth cardigan. Seitan slow-carb cardigan keffiyeh migas mustache. Bitters twee dreamcatcher plaid gastropub sriracha. Sustainable meggings hella YOLO skateboard drinking vinegar, kitsch cold-pressed fashion axe blog pinterest. Biodiesel health goth deep v, chillwave distillery kombucha neutra hella butcher synth gastropub street art messenger bag mixtape. Drinking vinegar heirloom bicycle rights, stumptown wolf schlitz flannel austin tote bag portland mumblecore mixtape squid."
  },
  {
    "index":4,
    "name":"Hannah Abbott",
    "school":"Hufflepuff",
    "grade":90,
    "description":"90's scenester asymmetrical, lo-fi kitsch cornhole occupy deep v forage knausgaard portland. Tousled echo park banjo intelligentsia meh YOLO. Tattooed before they sold out letterpress thundercats bicycle rights, yuccie listicle pabst sustainable kombucha kale chips hella. Dreamcatcher bushwick sriracha asymmetrical. Mlkshk skateboard try-hard pabst, gluten-free kickstarter affogato freegan hella yr tousled umami normcore. Knausgaard gentrify chartreuse ethical chambray single-origin coffee farm-to-table blue bottle mumblecore. Kickstarter green juice occupy cardigan."
  },
  {
    "index":5,
    "name":"Cho Chang",
    "school":"Ravenclaw",
    "grade":95,
    "description":"Brooklyn literally seitan, cardigan fixie chartreuse disrupt blog knausgaard. Cornhole etsy meh, shabby chic church-key knausgaard fanny pack helvetica migas trust fund echo park. Mixtape yr portland, semiotics echo park letterpress chia heirloom health goth small batch pop-up synth hoodie. Next level locavore chia, portland gastropub blog craft beer disrupt normcore selfies waistcoat. Neutra twee street art bitters cray, selvage pickled knausgaard tousled raw denim gastropub PBR&B swag. Shoreditch organic hella PBR&B, stumptown next level keffiyeh roof party plaid polaroid. Actually kinfolk master cleanse, schlitz vinyl cardigan before they sold out post-ironic craft beer austin williamsburg brunch tumblr vice."
  },
  {
    "index":6,
    "name":"Draco Malfoy",
    "school":"Slytherin",
    "grade":85,
    "description":"Chicharrones meh DIY, tousled gluten-free pabst bespoke gentrify banjo swag bicycle rights franzen venmo readymade jean shorts. Actually bespoke wayfarers, irony williamsburg forage gastropub cornhole. Migas chicharrones kinfolk lo-fi, street art messenger bag etsy cray ramps mumblecore irony helvetica plaid. Godard kombucha tilde kitsch hoodie vice, irony ethical blog celiac ennui etsy. Chambray pop-up narwhal intelligentsia normcore pinterest. Deep v etsy dreamcatcher messenger bag chia slow-carb. Biodiesel 8-bit locavore, tote bag heirloom chambray flexitarian 90's plaid pork belly humblebrag tacos XOXO."
  }
];