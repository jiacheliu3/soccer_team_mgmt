// A map of postions
var CF_ROLES = [{
        "name": "Trequartista",
        "attributes": "Passing, Creativity, Decisions, Movement, Teamwork",
        "desc": "Dirits around looking for space to provide an extra passing option and confuse the opposition defence"
    },
    {
        "name": "Defensive Forward",
        "attributes": "Dribbling, Shooting, Movement, Teamwork",
        "desc": "Puts pressure on the opposition’s defensive line by stopping them having time on the ball. He also keeps things simple when he has the ball by bringing others into the game"
    },
    {
        "name": "Advanced Forward",
        "attributes": "Dribbling, Shooting, Movement, Teamwork",
        "desc": "Leads the line and spreadheads attacking moves by both scoring and creating goals"
    },
    {
        "name": "Poacher",
        "attributes": "Shooting, Movement, Pace",
        "desc": "Sits on the shoulder of the  last defender latching onto through balls and staying in the box to put the ball into the net by any means possible"
    },
    {
        "name": "Target Man",
        "attributes": " Aerial, Shooting, Strength",
        "desc": "Uses his physicality to disrupt the opposition defence. He attempts to use his size to score and bring others into play"
    },
    {
        "name": "Deep Lying Forward",
        "attributes": "Passing, Technique, Movement, Teamwork, Strength",
        "desc": "Links up the midfield and attack by dropping deep into space and holding up the ball to lay off to teammates"
    },
    {
        "name": "Complete Forward",
        "attributes": "Aerial, Dribbling, Shooting, Technique, Decisions, Movement, Teamwork",
        "desc": "A player with such skill that he does everything and uses his judgement to decide on the best use of his energy per occasion."
    }
];
var WINGER_ROLES = [{
        "name": "Wide Midfielder",
        "attributes": "Dribbling, Passing, Teamwork, Stamina",
        "desc": "Defends and attacks on the flank getting into dangerous attacking positions without compromising defensive responsibilities."
    },
    {
        "name": "Defensive Winger",
        "attributes": "Dribbling, Tackling, Passing, Positioning, Teamwork",
        "desc": "Presses the opposing full backs to win the ball high up the pitch and holds it up for the rest of the team or get in a quick cross or pass"
    },
    {
        "name": "Winger",
        "attributes": "Crossing, Dribbling, Technique, Pace",
        "desc": "Aims to beat his man on the outside and attacks the byline to whip in a dangerous cross"
    },
    {
        "name": "Advanced Playmaker",
        "attributes": "Passing, Creativity, Movement, Teamwork",
        "desc": "Plays in between the oppositions midfield and defence to make himself available for his teammate’s passes and then pick the defence-splitting pass"
    },
    {
        "name": "Inside Forward",
        "attributes": "Dribbling, Shooting, Technique, Movement",
        "desc": "Cuts inside from the flanks and runs direction at the centre of the opposition’s defence"
    },
    {
        "name": "Defensive Forward",
        "attributes": "Passing, Aggression, Teamwork",
        "desc": "Puts pressure on the opposition’s defensive line by stopping them having time on the ball. He also keeps things simple when he has the ball by bringing others into the game"
    },
    {
        "name": "Advanced Forward",
        "attributes": "Dribbling, Shooting, Movement, Teamwork",
        "desc": "Leads the line and spreadheads attacking moves by both scoring and creating goals"
    }
];
var CM_ROLES = [{
        "name": "Defensive Midfielder",
        "attributes": "Tackling, Passing, Decisions, Positoning, Stamina",
        "desc": "Protects the defensive line from attacks by closing his men down quickly and supporting the creative midfielders in possession"
    },
    {
        "name": "Anchor",
        "attributes": "Tackling, Decisions, Positioning, Pace, Stamina",
        "desc": "Sits in the hole between the defence and midfield, intercepting and winning the ball back and laying off simple passes to his more creative teammates"
    },
    {
        "name": "Deep Playmaker",
        "attributes": "Passing, Creativity, Positioning, Teamwork",
        "desc": "Operates in the space between the defence and midfield and plays pinpoint long passes to the attackers"
    },
    {
        "name": "Ball Winning Midfielder",
        "attributes": "Passing, Tackling, Aggression, Positioning, Teamwork",
        "desc": "Closes down the opposition and win the ball but also helps the team keep possession through his technical skills"
    },
    {
        "name": "Central Midfielder",
        "attributes": "Passing, Decisions, Teamwork",
        "desc": "Provides a link between defence and attack by performing a wide array of tasks"
    },
    {
        "name": "Box to Box Midfielder",
        "attributes": "Shooting, Tackling, Teamwork, Stamina",
        "desc": "A non-stop dynamic player which contributes to both defending and attacking"
    },
    {
        "name": "Advanced Playmaker",
        "attributes": "Passing, Creativity, Movement, Teamwork",
        "desc": "Plays in between the oppositions midfield and defence to make himself available for his teammate’s passes and then pick the defence-splitting pass"
    },
    {
        "name": "Attacking Midfielder",
        "attributes": "Passing, Technique, Teamwork",
        "desc": "Fashions chances for himself and others in the final third when there’s litte room using great technical skills"
    },
    {
        "name": "Shadow Striker",
        "attributes": "Shooting, Movement, Stamina",
        "desc": "Aggressively pushes forward into goalscoring positions and looks to close down the opposition when out of position"
    },
    {
        "name": "Trequartista",
        "attributes": "Passing, Creativity, Decisions, Movement, Teamwork",
        "desc": "Dirits around looking for space to provide an extra passing option and confuse the opposition defence"
    }
];
var DEFENDER_ROLES = [{
        "name": "Sweeper",
        "attributes": "Tackling, Decisions, Positioning, Pace",
        "desc": "Drops behind the defensive line, aiming to sweep up through balls and make goal-saving tackles"
    },
    {
        "name": "Libero",
        "attributes": "Passing, Tackling, Decisions, Positioning, Pace, Stamina",
        "desc": "Like the sweeper but his athleticism and reading of the game allow him to roam into midfield"
    },
    {
        "name": "Central Defender",
        "attributes": "Aerial, Tackling, Decisions, Positioning, Strength",
        "desc": "Stops the opposing attackers from playing and clear up the danger when required"
    },
    {
        "name": "Ball Playing Defender",
        "attributes": "Aerial, Passing, Tackling, Decisions, Positioning, Teamwork, Strength",
        "desc": "Stops the opposing attackers from playing, but also bring the ball out of defence to launch counter attacks"
    },
    {
        "name": "Limited Defender",
        "attributes": "Aerial, Tackling, Strength",
        "desc": "A no-nonsense version of the Central Defender by clearing the ball as far up the field as possible"
    },
    {
        "name": "Full Back",
        "attributes": "Dribbling, Tackling, Positioning, Stamina",
        "desc": "Supplement his defensive duties with overlapping runs down the wing to help attacks"
    },
    {
        "name": "Defensive Full Back",
        "attributes": "Tackling, Decisions, Positioning",
        "desc": "Focuses on his defensive duties, scarcely going forward"
    },
    {
        "name": "Wing Back",
        "attributes": "Crossing, Dribbling, Tackling, Pace, Stamina",
        "desc": "Fulfil all attacking and defensive duties of both a winger and full back"
    },
    {
        "name": "Inverted Wing Back",
        "attributes": "Passing, Tackling, Movement, Positoning, Teamwork",
        "desc": "Like a wing back but instead of getting forward via the wings he will drift inside and create space for players around him"
    }
];
var GOALIE_ROLES = [{
        "name": "Goalkeeper",
        "attributes": "Aerial, Agility, Handling, Reflexes",
        "desc": "His primary aim is to stop the ball. He Focuses on simple and risk-free use of the ball"
    },
    {
        "name": "Sweeper Keeper",
        "attributes": "Agility, Handling, Kicking, Reflexes, Decisions, Positioning, Pace",
        "desc": "As well as being a Goalkeeper, he will sweep up balls in front of and wide of the penalty area using his feet"
    }
];



var POSITIONS = [{
        "title": "CF",
        "x": 900,
        "y": 250,
        "roles": CF_ROLES
    },
    {
        "title": "RWF",
        "x": 900,
        "y": 450,
        "roles": WINGER_ROLES
    },
    {
        "title": "LWF",
        "x": 900,
        "y": 50,
        "roles": WINGER_ROLES
    },
    {
        "title": "ARM",
        "x": 725,
        "y": 450,
        "roles": WINGER_ROLES
    },
    {
        "title": "ALM",
        "x": 725,
        "y": 50,
        "roles": WINGER_ROLES
    },
    {
        "title": "ACM",
        "x": 725,
        "y": 250,
        "roles": CM_ROLES
    },
    {
        "title": "CM",
        "x": 550,
        "y": 250,
        "roles": WINGER_ROLES
    },
    {
        "title": "RM",
        "x": 550,
        "y": 450,
        "roles": WINGER_ROLES
    },
    {
        "title": "LM",
        "x": 550,
        "y": 50,
        "roles": WINGER_ROLES
    },
    {
        "title": "DMC",
        "x": 450,
        "y": 250,
        "roles": CM_ROLES
    },
    {
        "title": "LB",
        "x": 300,
        "y": 50,
        "roles": DEFENDER_ROLES
    },
    {
        "title": "RB",
        "x": 300,
        "y": 450,
        "roles": DEFENDER_ROLES
    },
    {
        "title": "DC",
        "x": 300,
        "y": 250,
        "roles": DEFENDER_ROLES
    },
    {
        "title": "GK",
        "x": 100,
        "y": 250,
        "roles": GOALIE_ROLES
    }
]

function draw_pitch(selector) {
    console.log("Drawing pitch in " + selector);

    var holder = d3.select(selector) // select the 'body' element
        .append("svg") // append an SVG element to the body
        .attr("width", 1200)
        .attr("height", 600);
    // draw a rectangle - pitch
    holder.append("rect") // attach a rectangle
        .attr("x", 0) // position the left of the rectangle
        .attr("y", 0) // position the top of the rectangle
        .attr("height", 500) // set the height
        .attr("width", 1000) // set the width
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "#80B280"); // set the fill colour 
    // draw a rectangle - halves
    holder.append("rect") // attach a rectangle
        .attr("x", 0) // position the left of the rectangle
        .attr("y", 0) // position the top of the rectangle
        .attr("height", 500) // set the height
        .attr("width", 500) // set the width
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "#80B280"); // set the fill colour 
    // draw a circle - center circle
    holder.append("circle") // attach a circle
        .attr("cx", 500) // position the x-centre
        .attr("cy", 250) // position the y-centre
        .attr("r", 50) // set the radius
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "none"); // set the fill colour
    // draw a rectangle - penalty area 1
    holder.append("rect") // attach a rectangle
        .attr("x", 0) // position the left of the rectangle
        .attr("y", 105) // position the top of the rectangle
        .attr("height", 290) // set the height
        .attr("width", 170) // set the width
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "#80B280"); // set the fill colour 
    // draw a rectangle - penalty area 2
    holder.append("rect") // attach a rectangle
        .attr("x", 830) // position the left of the rectangle
        .attr("y", 105) // position the top of the rectangle
        .attr("height", 290) // set the height
        .attr("width", 170) // set the width
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "#80B280"); // set the fill colour 
    // draw a rectangle - six yard box 1
    holder.append("rect") // attach a rectangle
        .attr("x", 0) // position the left of the rectangle
        .attr("y", 184) // position the top of the rectangle
        .attr("height", 132) // set the height
        .attr("width", 60) // set the width
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "#80B280"); // set the fill colour 
    // draw a rectangle - six yard box 2
    holder.append("rect") // attach a rectangle
        .attr("x", 940) // position the left of the rectangle
        .attr("y", 184) // position the top of the rectangle
        .attr("height", 132) // set the height
        .attr("width", 60) // set the width
        .style("stroke-width", 5) // set the stroke width
        .style("stroke", "#001400") // set the line colour
        .style("fill", "#80B280"); // set the fill colour 
    // draw a circle - penalty spot 1
    holder.append("circle") // attach a circle
        .attr("cx", 120) // position the x-centre
        .attr("cy", 250) // position the y-centre
        .attr("r", 5) // set the radius
        .style("fill", "#001400"); // set the fill colour
    // draw a circle - penalty spot 2
    holder.append("circle") // attach a circle
        .attr("cx", 880) // position the x-centre
        .attr("cy", 250) // position the y-centre
        .attr("r", 5) // set the radius
        .style("fill", "#001400"); // set the fill colour
    // draw a circle - center spot
    holder.append("circle") // attach a circle
        .attr("cx", 500) // position the x-centre
        .attr("cy", 250) // position the y-centre
        .attr("r", 5) // set the radius
        .style("fill", "#001400"); // set the fill colour
    // penalty box semi-circle 1
    var vis = d3.select(selector).append("svg")
    var pi = Math.PI;

    var arc = d3.svg.arc()
        .innerRadius(70)
        .outerRadius(75)
        .startAngle(0.75) //radians
        .endAngle(2.4) //just radians

    var arc2 = d3.svg.arc()
        .innerRadius(70)
        .outerRadius(75)
        .startAngle(-0.75) //radians
        .endAngle(-2.4) //just radians
    holder.append("path")
        .attr("d", arc)
        .attr("fill", "#001400")
        .attr("transform", "translate(120,250)");
    holder.append("path")
        .attr("d", arc2)
        .attr("fill", "#001400")
        .attr("transform", "translate(880,250)");
}
var UNSELECTED_STYLE="fill: green";
var HOVER_STYLE="fill: orange";
var SELECTED_STYLE="fill: yellow";
function add_position(selector, data) {
    var panel = d3.select(selector)
        .append("circle")
        .attr("r", 15)
        .attr("cx", data["x"])
        .attr("cy", data["y"])
        .attr("style", UNSELECTED_STYLE)
        .on({
            "mouseover": function(){
                var mouse=d3.select(this);
                mouse.attr("style", HOVER_STYLE);
                mouse.attr("r", 20);
            },
            "mouseout": function(){
                var mouse=d3.select(this);
                mouse.attr("style", UNSELECTED_STYLE);
                mouse.attr("r", 15);
            },
            "click": function() {
                var mouse=d3.select(this);
                mouse.attr("style", SELECTED_STYLE)

                // update 
                select_familarity(this);
                select_roles(this);
            },
        })
        .attr("title", data["title"])
        .attr("data-roles", JSON.stringify(data["roles"]));
}
function select_familarity(element){
    // select familarity panel
    var dropdown=$("#player-role-dropdown");
    var panel=dropdown.siblings("ul");

    // clear the panel first
    panel.empty();
    console.log(element);

    // add roles
    var roles=JSON.parse($(element).attr("data-roles"));
    console.log(roles);

    console.log(roles.length+" roles");
    for(var i=0; i<roles.length; i++){
        var li=$("<li>");
        var a=$("<a>");
        var r=roles[i];
        console.log("This role is: ");
        console.log(r);
        a.text(roles[i]["name"]);
        li.on("click", function(){
            var data=r;
            console.log("Clicked");
            console.log(data);
            // set the attributes field
            $("#player-role-attr").text(r["attributes"]);

            // set the desc field
            $("#player-role-desc").text(r["desc"]);
        });
        li.append(a);
        panel.append(li);
        console.log("Append list");
        console.log(panel.html());
    }

}
function select_roles(){

}


draw_pitch("#pitch");
var pitch_selector = "#pitch svg";

for (var i = 0; i < POSITIONS.length; i++) {
    var p = POSITIONS[i];
    add_position(pitch_selector, p);
}