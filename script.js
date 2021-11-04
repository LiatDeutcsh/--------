let rows = `[
{
"id": "1",
"name": "google",
"url": "http://www.google.com",
"subData": [
{
"id": "2",
"name": "walla",
"url": "http://www.walla.co.il"
},
{
"id": "3",
"name": "ynet",
"url": "http://www.ynet.co.il",
"subData": [
{
"id": "4",
"name": "mako",
"url": "http://www.mako.co.il"
},
{
"id": "5",
"name": "google",
"url": "http://www.google.com"
},
{
"id": "6",
"name": "walla",
"url": "http://www.walla.co.il"
}
]
},
{
"id": "7",
"name": "google",
"url": "http://www.google.com"
}
]
},
{
"id": "8",
"name": "ynet",
"url": "http://www.ynet.co.il",
"subData": [
{
"id": "9",
"name": "walla",
"url": "http://www.walla.co.il"
},
{
"id": "10",
"name": "google",
"url": "http://www.google.com",
"subData": [
{
"id": "11",
"name": "ynet",
"url": "http://www.ynet.co.il",
"subData": [
{
"id": "12",
"name": "walla",
"url": "http://www.walla.co.il"
},
{
"id": "13",
"name": "google",
"url": "http://www.google.com"
},
{
"id": "14",
"name": "mako",
"url": "http://www.mako.co.il"
}
]
},
{
"id": "15",
"name": "google",
"url": "http://www.google.com"
},
{
"id": "16",
"name": "mako",
"url": "http://www.mako.co.il"
}
]
},
{
"id": "17",
"name": "walla",
"url": "http://www.walla.co.il",
"subData": [
{
"id": "18",
"name": "ynet",
"url": "http://www.ynet.co.il"
},
{
"id": "19",
"name": "google",
"url": "http://www.google.com"
},
{
"id": "20",
"name": "walla",
"url": "http://www.walla.co.il"
}
]
},
{
"id": "21",
"name": "mako",
"url": "http://www.mako.co.il"
}
]
}
]`;

let jsonPretty = JSON.parse(rows); 

function iterate(obj, padding, colors) {
console.log(colors);

for (let property in obj) {
    if (obj[property].hasOwnProperty('subData')) {
        let node1 = document.createElement("div");
        let textnode1 = document.createTextNode('Id: ' + obj[property].id);
            node1.appendChild(textnode1);
            node1.style.cssText = 'padding-top:15px; padding-left:' + padding + 'px;' + 'background:' + colors;
            document.getElementById("output").appendChild(node1);

        let node2 = document.createElement("div");
        let textnode2 = document.createTextNode('Site Name: ' + ' ' + obj[property].name);
            node2.appendChild(textnode2);
            node2.style.cssText = 'padding-left:' + padding + 'px;' + 'background:' + colors;
            document.getElementById("output").appendChild(node2);

        let node3 = document.createElement("a");
        node3.href = obj[property].url;
        let textnode3 = document.createTextNode('Url: ' + obj[property].url);
            node3.appendChild(textnode3);
            node3.setAttribute('target', '_blank');
            node3.style.cssText = 'display: block; padding-left:' + padding + 'px;' + 'background:' + colors;
            document.getElementById("output").appendChild(node3);

            document.getElementById('output').style.cssText='display: inline-block; font-family: system-ui; border:2px solid; border-radius:30px; overflow:hidden; margin: 15px 15px';

        iterate(obj[property].subData, padding + 15 *2, "#" + ((1<<24)*Math.random() | 0).toString(16));

    } else {
            console.log(property + "   " + obj[property]);
        let node1 = document.createElement("div");
        let textnode1 = document.createTextNode('Id: ' + obj[property].id);
            node1.appendChild(textnode1);
            node1.style.cssText = 'padding-left:' + padding + 'px;' + 'background:' + colors ;
            document.getElementById("output").appendChild(node1);

        let node2 = document.createElement("div");
        let textnode2 = document.createTextNode('Site Name: ' + obj[property].name);
            node2.appendChild(textnode2);
            node2.style.cssText = 'padding-left:' + padding + 'px;' + 'background:' + colors;
            document.getElementById("output").appendChild(node2);

        let node3 = document.createElement("a");
        node3.href = obj[property].url;
        let textnode3 = document.createTextNode('Url: ' + obj[property].url);
            node3.appendChild(textnode3);
            node3.setAttribute('target', '_blank');
            node3.style.cssText = 'display: block; padding-left:' + padding + 'px;' + 'background:' + colors;
            document.getElementById("output").appendChild(node3);
    }
}
}
iterate(jsonPretty, 0, "#" + ((1<<24)*Math.random() | 0).toString(16));


