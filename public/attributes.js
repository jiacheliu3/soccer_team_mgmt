function draw_attribute_radar(selector, data) {
    console.log("Drawing with data ");
    console.log(data);
    $(selector).empty();

    var width = 960,
        height = 500,
        barHeight = height / 2 - 40;

    var color = d3.scale.ordinal()
        .range(["#9eb36f", "#cadd9e", "#eee9a6", "#e3bf6b", "#c87572"]);

    var tickValues = [4, 8, 12, 16, 20];

    var svg = d3.select(selector).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    var numBars = data.data.length;

    var radius = d3.scale.linear()
        .domain([0, 20])
        .range([0, barHeight]);

    var line = d3.svg.line.radial()
        .interpolate("linear-closed")
        .radius(function(d) { return radius(d.count); })
        .angle(function(d, i) { return (i * 2 * Math.PI / numBars); });

    var area = d3.svg.area.radial()
        .interpolate(line.interpolate())
        .innerRadius(radius(0))
        .outerRadius(line.radius())
        .angle(line.angle());

    tickValues.sort(function(a, b) { return b - a; });

    var tickPath = svg.selectAll(".tickPath")
        .data(tickValues).enter()
        .append("path")
        .attr("class", "tickPath")
        .attr("d", function(d) {
            var tickArray = [];
            for (i = 0; i < numBars; i++) tickArray.push({ count: d });
            return area(tickArray);
        })
        .style("fill", function(d) { return color(d); })
        .style("stroke", function(d, i) { return (i === 0) ? "black" : "#5e5e5e"; })
        .style("stroke-width", function(d, i) { return (i === 0) ? "1px" : ".5px"; });

    var lines = svg.selectAll("line")
        .data(data.data)
        .enter().append("g")
        .attr("class", "lines");

    lines.append("line")
        .attr("y2", -barHeight)
        .style("stroke", "#5e5e5e")
        .style("stroke-width", ".5px")
        .attr("transform", function(d, i) { return "rotate(" + (i * 360 / numBars) + ")"; });

    lines.append("text")
        .attr("class", "names")
        .attr("x", function(d, i) { return (barHeight + 15) * Math.sin((i * 2 * Math.PI / numBars)); })
        .attr("y", function(d, i) { return -(barHeight + 15) * Math.cos((i * 2 * Math.PI / numBars)); })
        .attr("text-anchor", function(d, i) {
            if (i === 0 || i === numBars / 2) {
                return "middle";
            } else if (i <= numBars / 2) {
                return "begin";
            } else {
                return "end";
            }
        })
        .style("font-weight", "bold")
        .text(function(d) { return d.skill; });

    layer = svg.selectAll(".layer")
        .data([data]).enter()
        .append("path")
        .attr("class", "layer")
        .attr("d", function(d) { return area(d.data); })
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", "2px");
}
var SKILLS = ["defending", "physical", "speed", "creativity", "attacking", "technical", "aerial", "mental"];

function generate_attribute_panel(selector) {
    console.log("Generating attribute panel");

    var panel = $(selector);
    for (var i = 0; i < SKILLS.length; i++) {
        var bar = create_bar(SKILLS[i]);
        // console.log(bar.html());
        panel.append(bar);

        bar.on("")
    }
    console.log("Attribute panel generated");

    // control button
    var button = $('<button onclick="update_attributes()">Update Chart</button>');
    panel.append(button);
}

function create_bar(name) {
    console.log("Create bar with name: "+name);
    var bar_div = $('<div class="attribute-bar">');
    var label = $('<div class="col-sm-4"><label class="control-label"></div>');
    label.text(name.charAt(0).toUpperCase() + name.substr(1));
    var bar = $('<div class="col-sm-6"><input type="range" id="' + name + '-bar"  class="attribute-bar" value="1" max="20"></div>');
    bar.on("change", function() {
        var n=name;
        // var targ_id = this.id.substr(0, this.id.length - 4) + "-value";
        var targ_id=n+"-value";
        // console.log(targ_id);
        // console.log($(this).html());
        var current_bar=$("#"+n+"-bar");
        console.log("current bar value:");
        console.log(current_bar.val());

        var targ=$("#" + targ_id);
        console.log("Targ");
        console.log(targ);
        targ.text(current_bar.val());
    })

    var value = $('<div class="col-sm-2"><span id="' + name + '-value">1</span></div>');
    var bar_div = $('<div class="col-sm-6"></div>');


    bar_div.append(label, bar, value);

    // wrapper row 
    var row = $('<div class="row attribute-row">');
    row.append(bar_div);
    return row;
}

function generate_report() {
    console.log("Generating report");

    // Basic info


    // Get player attributes
    var panel = $("#attribute-panel");
    var bars = panel.find(".attribute-bar");
    for (var i = 0; i < bars.length; i++) {
        console.log(bars[i]);
    }
}
var jsonData={
    "id": "Raphael Varane", 
    "data": [
        {
            "skill": "Defending", 
            "count": 16
        }, 
        {
            "skill": "Physical", 
            "count": 14
        }, 
        {
            "skill": "Speed", 
            "count": 12
        }, 
        {
            "skill": "Creativity", 
            "count": 10
        }, 
        {
            "skill": "Attacking", 
            "count": 10
        }, 
        {
            "skill": "Technical", 
            "count": 11
        }, 
        {
            "skill": "Aerial", 
            "count": 15
        }, 
        {
            "skill": "Mental", 
            "count": 14
        }
    ]
};
console.log("Sample data: ");
console.log(jsonData);
// $.ajax({
//   dataType: "json",
//   url: "/soccer_team_mgmt/data.json",
//   async: false,
//   success: function(data){jsonData = data}
// });
console.log("Init radar chart");
draw_attribute_radar("#attribute-radar", jsonData);
generate_attribute_panel("#attribute-panel");

var ATTRIBUTE_PANEL_SELECTOR = "#attribute-panel";

function update_attributes() {
    console.log("Update attributes");
    var panel = $(ATTRIBUTE_PANEL_SELECTOR);
    console.log(panel);

    var inputs = panel.find(".attribute-bar");
    console.log(inputs.length + " input bars found");

    var data = [];
    for (var i = 0; i < SKILLS.length; i++) {
        var v = inputs[i].value;
        data.push({
            "skill": SKILLS[i],
            "count": v
        });
    }

    // draw
    var jsonData={
        "id": "new",
        "data": data
    };
    draw_attribute_radar("#attribute-radar", jsonData);
}
