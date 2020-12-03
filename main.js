var names = ["Prateek Vasudeva - Me",
    "Prithvi Vasudeva - Brother",
    "Vasudeva Venkatesh - Father",
    "Sumathi Kenchaiah - Mother",
    "Ambujakshi KH. - Grandmother"
];

var images = ["images/me.jpg",
    "images/brother.jpg",
    "images/father.jpg",
    "images/mother.jpg",
    "images/grandmother.jpg"
];

var index = 0;

function next() {
    document.getElementById("image").src = images[index]
    console.log(image)
    console.log(index)
    document.getElementById("name").innerHTML = names[index]
    console.log(names)
    console.log(index)
    index = index + 1
}

function previous() {
    index = index - 1
    document.getElementById("image").src = images[index]
    console.log(image)
    console.log(index)
    document.getElementById("name").innerHTML = names[index]
    console.log(names)
    console.log(index)
}