const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

var indices = randomIntArrayInRange(0,2702,10); // [23, 233, 255, 9831, 12, 5, 298, 444, 2088, 1678]

// Now need to use the indices to make a 10 long list of movies

var mydata = JSON.parse(moviedata);

var movies = [];

for (i = 0; i < 10; i++) {
    sampleItems.push(mydata[indices[i]])
}

function addRow(image, title, meta, desc, link)
{
    var tableBody = document.getElementById('myTableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var imageCell = newRow.insertCell(0);
    var titleCell = newRow.insertCell(1);
    var metaCell = newRow.insertCell(2);
    var descCell = newRow.insertCell(3);
    var linkCell = newRow.insertCell(4);
    const img = document.createElement("img");
    img.src = image;
    var titleText = document.createTextNode(title);
    var metaText = document.createTextNode(meta);
    var descText = document.createTextNode(desc);
    var linkText = document.createTextNode(link);
    imageCell.appendChild(img);
    titleCell.appendChild(titleText);
    metaCell.appendChild(metaText);
    descCell.appendChild(descText);
    linkCell.appendChild(linkText);
};

movies.forEach(function(listItem){
    addRow(listItem.image, listItem.title, listItem.meta, listItem.desc, listItem.link)
});
