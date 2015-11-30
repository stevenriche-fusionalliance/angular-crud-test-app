var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var parseUrlencoded = bodyParser.urlencoded({extended: false});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function(request, response){
  response.send('It works!');
  response.end();
});

app.get('/all', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  response.json(students);
  response.end();
});

app.put('/update/:student_id', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  student_number = find_student(request.params.student_id);

  if (student_number !== false){
    students[student_number].name = request.body.name;
    students[student_number].school = request.body.school;
    students[student_number].grade = request.body.grade;
    students[student_number].description = request.body.description;
    response.json(request.body);
  } else {
    response.status(404).json('No student found');
  }
  response.end();
});

app.post('/new', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  students.push({
    index: students.reverse()[0].index + 1,
    name: request.body.name,
    school: request.body.school,
    grade: request.body.grade,
    description: request.body.description
  });
  students.sort(function(a,b) {return (a.index == b.index) ? 0 : (a.index > b.index);} );
  response.status(201).json(request.body);
  response.end();
});

app.delete('/delete/:student_id', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  student_number = find_student(request.params.student_id);

  if (student_number !== false){
    students.splice(student_number, 1);
    response.sendStatus(200);
  } else {
    response.status(400).json('No student found');
  }
  response.end();
});

app.options('/update/:student_id', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  response.append('Access-Control-Allow-Methods', 'PUT');
  response.append('Access-Control-Allow-Headers', 'content-type');
  response.end();
});

app.options('/new', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  response.append('Access-Control-Allow-Methods', 'POST');
  response.append('Access-Control-Allow-Headers', 'content-type');
  response.end();
});

app.options('/delete/:student_id', function(request, response){
  response.append('Access-Control-Allow-Origin', '*');
  response.append('Access-Control-Allow-Methods', 'DELETE');
  response.append('Access-Control-Allow-Headers', 'content-type');
  response.end();
});

app.listen(3000, function(){
  console.log('App started...');
});

function find_student(student_index){
  for (var iii = 0; iii < students.length; iii++){
    if (students[iii].index === +student_index){
      return iii;
    }
  }

  return false;
}

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