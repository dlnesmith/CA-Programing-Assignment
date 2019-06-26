// creates objects (animals) to be made as options in a select box 
var animals = {
  pig : {name:"Pig", habitat:"Farm", group:"Mammal", noise:"Oink Oink"},
  owl : {name:"Owl", habitat:"Forest", group:"Bird", noise:"Hoo Hoo"},
  dog : {name:"Dog", habitat:"House", group:"Mammal", noise:"Woof Woof"},
  eagle : {name:"Eagle", habitat:"Grasslands", group:"Bird", noise:"Haw Haw"},
  cat : {name:"Cat", habitat:"House", group:"Mammal", noise:"Meow Meow"},
  frog : {name:"Frog", habitat:"Pond", group:"Amphibian", noise:"Ribbit Ribbit"},
  snake : {name:"Snake", habitat:"Forests and Deserts", group:"Reptile", noise:"Hiss Hiss"},
  monkey : {name:"Monkey", habitat:"Jungle", group:"Mammal", noise:"Oh Oh He He"},
  bee : {name:"Bee", habitat:"Garden", group:"Invertebrate", noise:"Buzz Buzz"},
  lion : {name:"Lion", habitat:"Jungle", group:"Mammal", noise:"Roar Roar"},
};

// assigns this variable to the select box to be filled
var animalBox = document.getElementById("box");

// adds each animal as an option in the select box
for (var key in animals)
  {
	var option = document.createElement("OPTION"),
    value = document.createAttribute(animals[key].name),
    txt = document.createTextNode(animals[key].name);
  option.appendChild(txt);
  animalBox.insertBefore(option, animalBox.lastChild);
    
  }
  
  function getAnimalDescription(){
    // assigns the option the user selects to this variable
      var selectedAnimal = document.getElementById("box").value;
      
      for (key in animals)
      {
          // fills in the description of the animal that the user selects in the select box
          if (selectedAnimal == animals[key].name)
          {
            var animalHabitat = "Habitat: " + animals[key].habitat;
            var animalGroup = "Group: " + animals[key].group;
            var animalNoise = "Noise: " + animals[key].noise;

            var textnode = animalHabitat;
            document.getElementById("a").innerHTML = textnode;

            var textnode2 = animalGroup;
            document.getElementById("b").innerHTML= textnode2;

            var textnode3 = animalNoise;
            document.getElementById("c").innerHTML = textnode3;

          }
      }
    
  }