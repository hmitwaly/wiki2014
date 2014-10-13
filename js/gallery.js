//Adding images to the list will automatically add them to the div.
var images = [{ image: "img/team.png", desc: "The team." }
				, { image: "img/team.png", desc: "The team." }
				, { image: "img/teamleads.png", desc: "The leads." }
				, { image: "img/team.png", desc: "The team." }
				, { image: "img/team.png", desc: "The team." }
				, { image: "img/teamleads.png", desc: "The leads." }
				, { image: "img/team.png", desc: "The team." }
				, { image: "img/team.png", desc: "The team." }
				, { image: "img/team.png", desc: "The team." }
				, { image: "img/team.png", desc: "The team." }];

window.onload = function () {
    genGrid();
}

function genGrid() {
    var numImages = images.length;
    var index = 0;
    var row = 0;
    var MAX_WIDTH = 5; //In hexagons
    while (index < numImages) {
        var even = false;
        $("#galleryDiv").append('<div class="row" id="row' + row + '"></div>');
        for (i = 0; i < MAX_WIDTH && index < numImages; i++) {
            hexagon(even, images[index].image, row, index, images[index].desc);
            index++;
            even = !even;
        }
        row++;
    }
    $('#galleryDiv').css('height', 200 * row + 100);
    $('.gallery').fancybox();
}

function hexagon(even, img, row, id, desc) {
    var classEven = "";
    if (even) {
        classEven = " even";
    }
    $("#row" + row).append(
        '<div class="hexagon' + classEven + '">'
        + '<div class="outer" onclick="showFancybox(\'' + id + '\');">'
		+ '<div class="inner" style="background: url(' + img + ') 25% 25% no-repeat;">'
		+ '<div class="textWrapper">'
		+ '<div class="text">' + desc + '</div>'
		+ '</div> </div> </div> </div>'
        + '<a class="gallery" rel="gallery" href="' + img + '" title="' + desc + '"></a>');
}

function showFancybox(id) {
    $(".gallery").eq(id).trigger("click");
}