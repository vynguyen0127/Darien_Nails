console.log("executing gallery.js");

let img_array = [
"../src/store-1.jpeg",
"../src/store-2.jpg",
"../src/store-3.jpg"
]

var gallery = document.createElement('div');
gallery.setAttribute("class","gallery");
var index = 0;
while(index < img_array.length){
    if(index % 3 === 0){
        var row = document.createElement('div');
        row.setAttribute("class","row");
        row.setAttribute("id","row-" + String(index / 3));
    }
    const image_div = document.createElement('div');
    image_div.setAttribute("class","col-md-4");
    image_div.setAttribute("data-aos","zoom-in");

    row.appendChild(image_div);

    const thumbnail = document.createElement("div");
    thumbnail.setAttribute("class","thumbnail");
    image_div.appendChild(thumbnail);

    const img = document.createElement("img");
    img.setAttribute("src",img_array[index]);
    img.setAttribute("style","width:100%");
    thumbnail.appendChild(img);

    const cap = document.createElement("div");
    cap.setAttribute("class","caption");
    thumbnail.appendChild(cap);

    const br = document.createElement("br");
    cap.appendChild(br);


    if(index % 3 === 2){
        gallery.appendChild(row);
    }

    index++;

}

let oldelem = document.querySelector("script#replace_with_gallery");
oldelem.parentNode.replaceChild(gallery,oldelem);
