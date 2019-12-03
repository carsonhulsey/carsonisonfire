var data = {
    
    1 : {
		image : "wakeup 2.jpeg",
		desc : "You wake up on a bed in a dim, cold prison cell. You have no recollection of how you got here, but you feel sunk and confused, and need to get out of here. ",
		options: [
			{
				dest : 2,
				desc : "Get up"
			}
		]
	},
    2 : {
		image : "cellstart.jpeg",
		desc : "There is a window on one wall, barred. On another wall, a toilet, and prison bars leading to a hallway. There's a light with some kind of object inside the shield, and a loose stone in the wall. What do you investigate?",
		options: [
			{
				dest : 3,
				desc : "Window "
			},
			{
				dest : 8,
				desc : "Bed "
			},
			{
				dest : 18,
				desc : "Toliet "
			},
			{
				dest : 11,
				desc : "Bars "
			},
			{
				dest : 21,
				desc : "Light "
			},
			{
				dest : 23,
				desc : "Loose Tile"
			}
		]
	},
    3 : {
        image : "",
        desc : "Outside the window, you see children playing in a park not too far away (why did they put a park so close to a prison?? you think to yourself.) They look dirty and hungry. A broom is leaning against the wall.",
        options : [
            {
                dest : 4,
                desc : "Talk to kids "
            },
            {
                dest : 7,
                desc : "Use nail file "
            },
            {
                dest : 2,
                desc : "Back to room "
            }
        ]
    },
    4 : {
        image : "",
        desc : "You ask the children to give you the broom. They will not help you unless you offer them something.",
        options : [
            {
                dest : 5,
                desc : "Give soap "
            },
            {
                dest : 6,
                desc : "Give food "
            },
            {
                dest : 2,
                desc : "Back to room "
            }
        ]
    },
    5 : {
        image : "",
        desc : "You got the broom!",
        options : [
            {
                dest : 2,
                desc : "Back to room "
            }
        ]
    },
    6 : {
        image : "",
        desc : "You got the broom!",
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    },
    7 : {
        image : "",
        desc : "You file the bars away, and attempt to jump out of the window, but you fall and break your legs!",
        youLose : true,
        options : [
            {
                dest : 1,
                desc : "Back to start"
            }
        ]
    }, 
    8 : {
        image : "",
        desc : "On the bed, there is a pillow and a blanket",
        youLose : false,
        options : [
            {
                dest : 9,
                desc : "Look in the blanket "
            },
            {
                dest : 10,
                desc : "Take pillow "
            },
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    9 : {
        image : "pill.pdf",
        desc : "You found a bottle of pills!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    10 : {
        image : "",
        desc : "You now have the pillow!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    11 : {
        image : "",
        desc : "There's a plate of food on the floor in front of the cell door, and a guard dog outside the cell, with a key around its neck.",
        youLose : false,
        options : [
            {
                dest : 12,
                desc : "Take food "
            },
            {
                dest : 13,
                desc : "Call dog "
            },
            {
                dest : 17,
                desc : "Use key"
            }
        ]
    }, 
    12 : {
        image : "",
        desc : "You now have a chicken leg!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    },
    13 : {
        image : "",
        desc : "The dog looks at you and tilts its head; you'll need to give it something to get the key",
        youLose : false,
        options : [
            {
                dest : 14,
                desc : "Give food "
            },
            {
                dest : 15,
                desc : "Give pills "
            },
            {
                dest : 16,
                desc : "Reach for key "
            },
            {
                dest : 2,
                desc : "Back to room "
            }
        ]
    }, 
    17 : {
        image : "",
        desc : "Oh no! The key didn't work on the door; try something else!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    14 : {
        image : "",
        desc : "You fed the dog, and you now have the key!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to Room"
            }
        ]
    }, 
    15 : {
        image : "",
        desc : "You poisoned the dog, and now you have the key!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    16 : {
        image : "",
        desc : "Oh no! The dog bit off your hand!",
        youLose : true,
        options : [
            {
                dest : 1,
                desc : "Back to start"
            }
        ]
    }, 
    18: {
        image : "nailfile.jpeg",
        desc : "There's a bar of soap on top of the toilet tank, and checking inside the tank you see a nail file. Maybe if you clogged the toilet, you could get it!",
        youLose : false,
        options : [
            {
                dest : 19,
                desc : "Take soap "
            },
            {
                dest : 20,
                desc : "Use pillow "
            },
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    19: {
        image : "",
        desc : "You now have the soap!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    20 : {
        image : "nailfile.jpeg",
        desc : "You clogged the toilet with the pillow, and now you have the nailfile!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    21 : {
        image : "",
        desc : "There seems to be a long object in the ceiling tile, if you had a long rod, you could probably knock it out",
        youLose : false,
        options : [
            {
                dest : 22,
                desc : "Use broom "
            },
            {
                dest : 2,
                desc : "Back to room "
            }
        ]
    }, 
    22 : {
        image : "",
        desc : "You now have a crowbar!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    },
    23 : {
        image : "",
        desc : "The tile on the floor is loose, but you can't get it off on your own; you're going to need a tool",
        youLose : false,
        options : [
            {
                dest : 24,
                desc : "Use crowbar "
            },
            {
                dest : 2,
                desc : "Back to room"
            }
        ]
    }, 
    24 : {
        image : "",
        desc : "There's a tunnel under this stone! but, there's a burst pipe with water rushing out of it. What are you going to use to plug it?",
        youLose : false,
        options : [
            {
                dest : 25,
                desc : "The pill bottle "
            },
            {
                dest : 26,
                desc : "The soap"
            }
        ]
    }, 
    25 : {
        image : "",
        desc : "Oh no! The pill bottle is too big to fit in the crack of the pipe! The water fills the tunnel and you drown",
        youLose : true,
        options : [
            {
                dest : 1,
                desc : "Back to start"
            }
        ]
    },
    26 : {
        image : "",
        desc : "The soap was able to plug the pipe! You escape out of the tunnel to freedom!",
        youWin : true,
        options : [
            {
                dest : 1,
                desc : "Back to start"
            }
        ]
    }, 
}

var imgOption = document.getElementById("image-option");
var pDesc = document.getElementById("option-desc");

function renderPage(optionElem) {
	var optionId = optionElem.getAttribute("data-option-id");
	renderById(optionId);
}

function renderById(optionId) {
	var option = data[optionId];

	imgOption.src = option.image;
	pDesc.innerText = option.desc;

	var element = document.getElementsByTagName("a");

	for (var i = element.length - 1; i >= 0; i--) {
	    element[i].parentNode.removeChild(element[i]);
	}
    
    var h1Elements = document.getElementsByTagName("h1");

	for (var i = h1Elements.length - 1; i >= 0; i--) {
	    h1Elements[i].parentNode.removeChild(h1Elements[i]);
	}
    
    if (option.youLose === true) {
        var loseH = document.createElement("h1");
        loseH.innerText = "You lose!";
        document.getElementsByTagName("body")[0].appendChild(loseH);
    }
    
    if (option.youWin === true) {
        var winH = document.createElement("h1");
        winH.innerText = "You win!";
        document.getElementsByTagName("body")[0].appendChild(winH);
    }

	for (var curOption of option.options) {
		console.log(curOption);
		var addedOption = document.createElement("a");
		addedOption.href = "#";
		addedOption.setAttribute("data-option-id", curOption.dest);
		addedOption.innerText = curOption.desc;
		addedOption.setAttribute("onclick", "renderPage(this)");
		console.log(addedOption);
		document.getElementsByTagName("body")[0].appendChild(addedOption);
	}
}

renderById(1);