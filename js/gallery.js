//Adding images to the list will automatically add them to the div.
//Strucuture of entries is as follows:
//{galleries: name, [people: name, image, bio]}
var galleries = {
	teamLeads: {
        galName: "Team Leads",
        people: [
	{
            name: 'Nathan Chan',
            image: 'img/team/Nathan_Chan.jpg',
            bio: 'Research Team Leader; Program: 2A Nanotechnology Engineering; Interests: Introspective short stories and web comics, biologically-inspired nanotechnology, game developing.'
    },	
	{
		name: 'W.T.David Lin',
		image: 'img/team/WTDavid_Lin.JPG',
		bio: 'Video Team Leader; Program: 2A Nanotechnology Engineering; Interests: Medical research, nanoelectronics, quantum computing.'
	},
	{
            name: 'Rhiannon Lohr',
            image: 'img/team/Rhiannon_Lohr.jpg',
            bio: 'uwDNA Safety Officer; Program: 2B Nanotechnology Engineering; Interests: Hiking, playing the saxophone, and nature.'
    },	
	{
            name: 'Kerrin Mendler',
            image: 'img/team/KerrinMendler.JPG',
            bio: 'Software Team Leader; Program: 3B Biology; Interests: Algal biofuels, website development, triathlon.'
    },
	{
		name: 'Jatin Patil',
		image: 'img/team/Jatin_Patil.jpg',
		bio: 'Business Team Leader; Program: 2A Nanotechnology Engineering; Interests: Biking and hiking, music, video games.'
	},	
	{
            name: 'Rachel Pautler',
            image: 'img/team/Rachel_Pautler.jpg',
            bio: 'uwDNA Team Leader; Program: 4A Nanotechnology Engineering; Interests: Bionanotechnology, biochemistry, materials science, medical applications of nanotechnology.'
    },	
	{
		name: 'Lori Pollit',
		image: 'img/team/Lori_Pollit.jpg',
		bio: 'Lab Team Leader; Program: 2B Nanotechnology Engineering; Interests: Nanotheranostics and running!'
	}
	],
    },
    year1: {
        galName: "First Academic Year",
        people: [
	{
        name: 'Ethan Alter'
      , image: 'img/team/Ethan_Alter.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Being a member of UWDNA and sports.'
    },
	{
        name: 'Zameer Bharwani'
      , image: 'img/team/ZameerBharwani.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Table tennis, running, and movies.'
    },
	{
        name: 'Adrian Chan'
      , image: 'img/team/AdrianChan.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Reading, Tetris, and powerlifting.'
    },
	{
        name: 'Mary Chen'
      , image: 'img/team/Mary_Chen.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Painting and playing piano.'
    },
	{
        name: 'Maria Cheng'
      , image: 'img/team/Maria_Cheng.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Programming and ice cream.'
    },
	{
        name: 'Caileen Dolan'
      , image: 'img/team/Caileen_Dolan.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Music, cooking, and film.'
    },
	{
        name: 'Rama Ferguson'
      , image: 'img/team/Rama_Ferguson.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Badminton and video games.'
    },	
	{
        name: 'Elaine Huang'
      , image: 'img/team/ElaineHuang.jpg'
      , bio: 'Program: Biomedical Engineering; Interests: Art, basketball, and volleyball.'
    },
	{
        name: 'Kate Illing'
      , image: 'img/team/Kate_Illing.JPG'
      , bio: 'Program: Nanotechnology Engineering; Interests: Kayaking, reading, knitting.'
    },
	{
        name: 'Natisa Jeyakanthan'
      , image: 'img/team/NatisaJeyakanthan.jpg'
      , bio: 'Program: Biomedical Engineering; Interests: Figure skating, reading, and travelling.'
    },
	{
        name: 'Emre Koc'
      , image: 'img/team/Emre_Koc.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Exploring the wonders of Nanotechnology in the medical field, working in a team of motivated people to make new innovations.'
    },
	{
        name: 'Sean Lazaro'
      , image: 'img/team/seanclazaro.jpg'
      , bio: 'Program: Biomedical Engineering; Interests: Money, friends, and love.'
    },
	{
        name: 'Lukas Marek'
      , image: 'img/team/LukasMarek.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Hockey and technology.'
    },
	{
        name: 'Hossam Mitwaly'
      , image: 'img/team/Hossam_Mitwaly.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Eating, coding, and hanging out with friends.'
    },
	{
        name: 'Arun Ranganathan'
      , image: 'img/team/ArunRanganathan.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Designing, programming, and staying fit.'
    },
	{
        name: 'Adib Saleh'
      , image: 'img/team/AdibSaleh.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Programming languages and sports.'
    },
	{
        name: 'Ai Lin Su'
      , image: 'img/team/AilinSu.jpg'
      , bio: 'Program: Biomedical Engineering; Interests: Animals, painting, crafting.'
    },
	{
        name: 'Faisal Tahiri'
      , image: 'img/team/Faisal_Tahiri.PNG'
      , bio: 'Program: Biomedical Engineering; Interests: Neuroscience, athletics, philosophy.'
    },
	{
        name: 'Thomas Yang'
      , image: 'img/team/ThomasYang.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Discovering corny jokes and useless facts, food, and all kinds of sports (the more contact the better).'
    },
    {
        name: 'Vincent Young'
      , image: 'img/team/Vincent_Young.jpg'
      , bio: 'Program: Biomedical Engineering; Interests: Medical imaging, playing music, magic tricks.'
    },
	{
        name: 'Oliver Wang'
      , image: 'img/team/Oliver_Wang.jpg'
      , bio: 'Program: Nanotechnology Engineering; Interests: Music, swimming, and detective stories.'
    }],
    },
	year2: {
        galName: "Second Academic Year",
        people: [
		{
            name: 'Priya Bhargava',
            image: 'img/team/Priya_Bhargava.jpg',
            bio: 'Program: Nanotechnology Engineering; Interests: I enjoy music, different dance forms and learning anything that stimulates my mind.'
        },
		{
            name: 'Austin Boucinha',
            image: 'img/team/Boucinha_Austin_WebsitePhoto.JPG',
            bio: 'Program: Nanotechnology Engineering; Interests: Quantum Mechanics, anime, anything Nintendo!'
        },
		{
            name: 'Josh Broughton',
            image: 'img/team/Josh_Broughton.jpg',
            bio: 'Program: Biomedical Science; Interests: Running, music, and medicine.'
        },		
		{
            name: 'Andrew Hong',
            image: 'img/team/Andrew_Hong.JPG',
            bio: 'Program: Nanotechnology Engineering; Interests: Basketball, football, medical nanotechnology.'
        },
		{
            name: 'Graham Joe',
            image: 'img/team/Graham_Joe.JPG',
            bio: 'Program: Nanotechnology Engineering; Interests: Nanopore DNA sequencing, nanoelectronics, nanomedicine, badminton.'
        },
		{
            name: 'Vismit Joshi',
            image: 'img/team/Vismit_Joshi.png',
            bio: 'Program: Nanotechnology Engineering; Interests: Cancer research, space travel, good music.'
        },
		{
            name: 'Michal Kononenko',
            image: 'img/team/Michal_Kononenko.jpg',
            bio: 'Program: Nanotechnology Engineering; Interests: Software application development, guitar, furthering the potential of nanotechnology.'
        },
		{
            name: 'Bhoomi Patel',
            image: 'img/team/BhoomiPatel.jpg',
            bio: 'Program: Biomedical Science; Interests: Programming, hiking, music, and sports: Badminton, tennis, and cricket.'
        },
		{
            name: 'Aravind Ramaraju',
            image: 'img/team/Aravind_Ramaraju.jpg',
            bio: 'Program: Nanotechnology Engineering; Interests: Time travel, nanoelectronics, nanobiology, nanomanufacturing, and industrial applications of nanotechnology.'
        },
		{
            name: 'Utkarshna Sinha',
            image: 'img/team/UtkarshnaSinha.jpg',
            bio: 'Program: Life Sciences; Interests: Biotechnology, research, and entrepreneurship.'
        },
		{
            name: 'Nicholas Soucy',
            image: 'img/team/Nicholas_Soucy.png',
            bio: 'Program: Nanotechnology Engineering; Interests: Biological uses for nanotechnology, space exploration, and science fiction.'
        },
		{
            name: 'Ian Stadelmann',
            image: 'img/team/IanStadelmann.jpg',
            bio: 'Program: Nanotechnology Engineering; Interests: Skiing, TV dramas (Game of Thrones!), EDM.'
        },
		{
            name: 'Max Xu',
            image: 'img/team/MaxXu.jpg',
            bio: 'Program: Nanotechnology Engineering; Interests: Violin and tennis.'
        }]
    },
    year3: {
        galName: "Third Academic Year",
        people: [
		{
            name: 'Elizabeth Salsberg',
            image: 'img/team/Elizabeth_Salsberg.JPG',
            bio: 'Program: Nanotechnology Engineering; Interests: Semiconductor materials and devices, Sports: soccer, ice hockey, and conditioning.'
        },
		{
            name: 'Kevin Thai',
            image: 'img/team/Kevin_Thai.jpg',
            bio: 'Program: Bioinformatics; Interests: Playing guitar and listening to music, interdiscplinary projects, philosophy.'
        }]
    },
    year4: {
        galName: "Fourth Academic Year",
        people: [		
		{
            name: 'David Nguyen',
            image: 'img/team/David_Nguyen.jpg',
            bio: 'Program: Biomedical Science; Interests: Playing tennis, salsa dancing, and science!'
        }]
    },
	year5: {
        galName: "Fifth Academic Year",
        people: [
		{
            name: 'Matthew Mulvale',
            image: 'img/team/Matthew_Mulvale.jpg',
            bio: 'Program: Nanotechnology Engineering; Interests: Drug Delivery, regenerative medicine, photovoltaics, and fuel cells.'
        }
		]
    },
	advisors: {
        galName: "Academic Advisors",
        people: [
		{
            name: 'Dr. Marc Aucoin',
            image: 'img/team/Marc_Aucoin.png',
            bio: 'Professor Marc Aucoin is an expert in the area of Biochemical Engineering, in particular biological nano-particles (Virus-Like Particles or VLPs) with significant experience in transient production systems, including transfection technology and inducible systems. Professor Aucoin is the Chair of the Biotechnology Division of the Canadian Society for Chemical Engineers, is a Faculty Advisor for the University of Waterloo’s international Genetically Engineered Machine (iGEM) competition student team and is the academic contact for the International Society for Pharmaceutical Engineering (ISPE). Education: PhD, Universite de Montreal (Ecole Polytechnique); MASc, University of Waterloo; BASc, University of Waterloo.'
        },
		{
            name: 'Dr. Mikko Karttunen',
            image: 'img/team/mikko_karttunen.jpg',
            bio: 'Mikko Karttunen uses theory and computation to study the dynamics and fundamental physical mechanisms in soft matter and biological systems, and their interaction with inorganic materials such as carbon nanotubes and minerals. He received his MSc from Tampere University of Technology (Finland) and completed his PhD in 1999 at the Department of Physics at McGill University. Prior to joining Department of Chemistry at Waterloo, he was an Associate Professor at the University of Western Ontario, a postdoctoral fellow at the Max Planck Institute for Polymer Research and an Academy of Finland Research Fellow at Helsinki University of Technology. He has also been a visiting professor at Fudan University (China), University of Santiago (Chile) and University of Hokkaido in Sapporo.'
        },
		{
            name: 'Dr. Vivek Maheshwari',
            image: 'img/team/Vivek_Maheshwari.png',
            bio: 'Professor Maheshwari joined the Department of Chemistry at the University of Waterloo in June 2009. He was a Research Assistant Professor at the University of Nebraska Lincoln, from 2007-2009. He received his PhD from Virginia Tech. During this time, he developed a technique for self-assembly of nanoparticles, resulting in a room temperature single electron sensitive device. His research during MS was on rheology of polymer and the use and development of rheo-optical methods to study characteristics of polymer melts and role of tacticity on polymer characteristics.'
        }]
	}
};

window.onload = function () {
    //testyTemplate();
    genGrid();
}

function testyTemplate() {
    var a = "a a a a a a a a"
    console.log(a.replace(/ /g, '_'));
}

$.fn.exists = function () {
    return this.length !== 0;
}

function genGrid() {

    var MAX_WIDTH = 7; //In hexagons

    jQuery.each(galleries, (function (galleryName, gallery) {
        var numImages = gallery['people'].length;
        var index = 0;
        var row = 0;

        //Creating div to put each gallery in.
        var galleryDivs = '<div class="galleryDivs" id="{{galleryName}}div"><h2>{{galName}}</h2></div><p></p>';
        $('#galleryDiv').append(Mustache.to_html(galleryDivs, { galleryName: galleryName, galName: gallery['galName'] }));

        //Putting the entries into rows.
        while (index < numImages) {
            var even = false;
            //Creating a div for each row.
            var rowDiv = '<p></p><div class="row" id="row{{galleryName}}_{{row}}"></div>'
            $("#" + galleryName + "div").append(Mustache.to_html(rowDiv, { row: row, galleryName: galleryName }));

            for (i = 0; i < MAX_WIDTH; i++) {
                if (index < numImages) {
                    hexagon(even, index, row, galleryName);
                } else {
                    hexagon(even, null, row, galleryName);
                }
                index++;
                even = !even;
            }
            row++;
        }

    }));

    $('.gallery').fancybox({
        'width': 600
    });
}

//add galleries, and title to be gallery name
function hexagon(even, id, row, galleryName) {

    if (id != null) {
        //Templates for the inner hexagon classes.
        var rowData = galleries[galleryName]['people'][id];
        rowData['id'] = id;
        rowData['galleryName'] = galleryName;
        rowData['galName'] = galleries[galleryName]['galName'];
        var hexInner = '<div class="inner" style="background: url({{image}}) 40% 30% no-repeat; ">'
            + '<div class="textWrapper"><div class="text">{{name}}</div></div></div>';
        if (even) {
            rowData['classEven'] = 'even';
        }

        //Templates for the entire hexagon.
        var rowDiv = '<div class="hexagon {{classEven}}">'
            + '<div class="outer" onclick="showFancybox(\'{{galleryName}}\', {{id}});">'
            + hexInner
            + ' </div></div>'
            + '<a class="gallery gallery_{{galleryName}}" rel="{{galleryName}}" href="#{{galleryName}}_{{id}}" title="{{galName}}"></a>';

        $('#row' + galleryName + "_" + row).append(Mustache.to_html(rowDiv, rowData));

        //Hide the divs that fancybox should show.
        var boxbioTempate = '<div id="{{galleryName}}_{{id}}" class="boxbio"><img src="{{image}}" class="boximage" /><div class="boxtext"><h1>{{name}}</h1>{{bio}}</div></div>';
        $('#stealthy').append(Mustache.to_html(boxbioTempate, rowData));

    } else { //If there is extra space in the row, fill with blank hexagons.
        var blankHex = '<div class="hexagon {{classEven}}"><div class="outer"><div class="inner" style="background:none;"></div></div></div>';
        var blankData = {};
        if (even) {
            blankData['classEven'] = 'even';
        }

        $('#row' + galleryName + "_" + row).append(Mustache.to_html(blankHex, blankData));
    }
}

//Not displaying correct thingy
function showFancybox(galleryName, id) {
    $('.gallery_' + galleryName).eq(id).trigger("click");
}