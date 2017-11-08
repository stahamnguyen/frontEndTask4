// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const showImages = () => {
    const ul = document.querySelector('ul');

    var array_of_image_name = ["71_file000132701536", "72_file0001706961259", "73_file000267804564", "74_file0001601969844", "75_file000693070568",
                             "76_file000741141463", "77_file0001116000079", "80_file0001966720664", "81_file0001608482449", "83_file000466623310",
                             "84_file0001316404158", "85_file0001176452626"];
    var counter = 1;
    let html = "";
    array_of_image_name.forEach((image_name) => {
        html += 
            `<li>
                <figure>
                    <a href="img/original/${image_name}.jpg"><img src="img/thumbs/${image_name}.jpg"></a>
                    <figcaption>
                        <h3>Picture ${counter}</h3>
                    </figcaption>
                </figure>
            </li>`;
        counter++;
        ul.innerHTML = html;
    });
}

showImages();