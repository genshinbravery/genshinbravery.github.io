var artis = 22;
itemArray = [];
for (i = 0; i < artis; i++) {
  // alert('Hello world3');
  var final = ""
      switch (i) {
          case 0:
              final = "Blizzard Strayer";
              break;
          case 1:
              final = "Bloodstained Chivalry";
              break;
          case 2:
              final = "Heart of Depth";
              break;
          case 3:
              final = "Wanderer's Troupe";
              break;
          case 4:
              final = "Crimson Witch of Flames";
              break;
          case 5:
              final = "Echoes of an Offering";
              break;
          case 6:
              final = "Emblem of Severed Fate";
              break;
          case 7:
              final = "Gladiator's Finale";
              break;
          case 8: 
              final = "Husk of Opulent Dreams";
              break;
          case 9:
              final = "Lavawalker";
              break;
          case 10:
              final = "Maiden Beloved";
              break;
          case 11:
              final = "Noblesse Oblige";
              break;
          case 12:
              final = "Ocean-Hued Clam";
              break;
          case 13:
              final = "Pale Flame";
              break;
          case 14:
              final = "Retracing Bolide";
              break;
          case 15:
              final = "Shimenawa's Reminiscence";
              break;
          case 16:
              final = "Tenacity of the Millelith";
              break;
          case 17:
              final = "Thundering Fury";
              break;
          case 18:
              final = "Thundersoother";
              break;
          case 19:
              final = "Viridescent Venerer";
              break;
          case 20:
              final = "Vermillion Hereafter";
              break;
          case 21:
              final = "Archaic Petra";
              break;
      }
  itemArray.push(final); 
}

flowerArray = ["HP"];
featherArray = ["ATK"];
gobletArray = ["Pyro Damage", "Hydro Damage", "Geo Damage", "Anemo Damage", "Electro Damage", "Cryo Damage", "Physical Damage", "Elemental Mastery", "DEF", "ATK", "HP"];
circletArray = ["CRIT DMG", "CRIT RATE", "Healing Bonus", "Elemental Mastery", "ATK", "DEF", "HP"];
sandsArray = ["HP", "DEF", "ATK", "Elemental Mastery", "Energy Recharge"];

var randomItem = 0;

function shuffle(array) {
  
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

var temp = "";

function generate(){
  //artifacts
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 5; j++) {
      randomItem = Math.floor(1+Math.random()*21); //22 artifact sets
      switch (j) {
        case 0:
          document.getElementById("flower".concat(String(i+1))).innerHTML ="flower: ".concat(itemArray[randomItem]).concat("<br />&emsp;main stat: ").concat(flowerArray[0].bold());
          break;
        case 1:
          document.getElementById("feather".concat(String(i+1))).innerHTML ="feather: ".concat(itemArray[randomItem]).concat("<br />&emsp;main stat: ").concat(featherArray[0].bold());
          break;
        case 2:
          sandsArray = shuffle(sandsArray);
          for (k = 0; k < sandsArray.length; k++) {
            if (k != 0){
              temp = temp.concat(" > ")
              temp = temp.concat(String(sandsArray[k]));
            }
            else {
              temp = temp.concat(String(sandsArray[k]).bold());
            }
          }
          document.getElementById("sands".concat(String(i+1))).innerHTML ="sands: ".concat(itemArray[randomItem]).concat("<br />&emsp;main stat: ").concat(temp);
          temp = "";
          break;
        case 3:
          circletArray = shuffle(circletArray);
          for (k = 0; k < circletArray.length; k++) {
            if (k != 0){
              temp = temp.concat(" > ")
              temp = temp.concat(String(circletArray[k]));
            }
            else {
              temp = temp.concat((String(circletArray[k]).bold()));
            }
            
          }
          document.getElementById("circlet".concat(String(i+1))).innerHTML ="circlet: ".concat(itemArray[randomItem]).concat("<br />&emsp;main stat: ").concat(temp);
          temp = "";
          break;
        case 4:
          gobletArray = shuffle(gobletArray);
          for (k = 0; k < gobletArray.length; k++) {
            if (k != 0){
              temp = temp.concat(" > ")
              temp = temp.concat(String(gobletArray[k]));
            }
            else {
              temp = temp.concat(String(gobletArray[k]).bold());
            }
            
          }
          document.getElementById("goblet".concat(String(i+1))).innerHTML ="goblet: ".concat(itemArray[randomItem]).concat("<br />&emsp;main stat: ").concat(temp);
          temp = "";
          break;
          

      }
    }


    
	}
	// alert('Hello world');


  
}

// character + weapon

// sword = 1
// polearm = 2
// claymore = 3
// bow = 4
// catalyst = 5

var weapon_dict = {
  Albedo : 1,
  Aloy : 4,
  Amber : 4,
  Ayaka : 1,
  Ayato : 1,
  Barbara : 5,
  Beidou : 3,
  Bennet : 1,
  Childe : 4,
  Chongyun : 3,
  Diluc : 3,
  Diona : 4,
  Eula : 3,
  Fischl : 4,
  Ganyu : 4,
  Gorou : 4,
  HuTao : 2,
  Itto : 3,
  Jean : 1,
  Kaeya : 1,
  Kazuha : 1,
  Keqing : 1,
  Klee : 5,
  Kokomi : 5,
  Lisa : 5,
  Mona : 5,
  Ningguang : 5,
  Noelle : 3,
  Qiqi : 1,
  Raiden : 1,
  Razor : 3,
  Rosaria : 2,
  Sara : 4,
  Sayu : 3,
  Shenhe : 2,
  Sucrose : 5,
  Thoma : 2,
  TravelerAnemo : 1,
  TravelerElectro : 1,
  TravelerGeo : 1,
  Venti : 4,
  Xiangling : 2,
  Xiao : 2,
  Xingqiu : 1,
  Xinyan : 3,
  YaeMiko : 5,
  Yanfei : 5,
  Yoimiya : 4,
  YunJun : 2
};

swordArray = ['Amenoma Kageuchi', 'Aquila Favonia', 'Blackcliff Longsword', 'Cinnabar Spindle', 'Cool Steel', 'Dark Iron Sword', 'Dull Blade', 'Favonius Sword', 'Festering Desire', 'Fillet Blade', 'Freedom-Sworn', 'Haran Geppaku Futsu', 'Harbinger of Dawn', 'Iron Sting', "Lion's Roar", 'Mistsplitter Reforged', 'Primordial Jade Cutter', 'Prototype Rancour', 'Royal Longsword', 'Sacrificial Sword', 'Silver Sword', 'Skyrider Sword', 'Skyward Blade', 'Summit Shaper', 'Sword of Descension', 'The Alley Flash', 'The Black Sword', 'The Flute', 'Traveler\'s Handy Sword'];
polearmArray = ['The Catch', "Beginner's Protector", 'Black Tassel', 'Blackcliff Pole', 'Calamity Queller', 'Crescent Pike', 'Deathmatch', "Dragon's Bane", 'Dragonspine Spear', 'Engulfing Lightning', 'Favonius Lance', 'Halberd', 'Iron Point', 'Kitain Cross Spear', 'Lithic Spear', 'Primordial Jade Winged-Spear', 'Prototype Starglitter', 'Royal Spear', 'Skyward Spine', 'Staff of Homa', 'Vortex Vanquisher', "Wavebreaker's Fin", 'White Tassel'];
claymoreArray = ['Akuoumaru', 'Blackcliff Slasher', 'Bloodtainted Greatsword', 'Debate Club', 'Favonius Greatsword', 'Ferrous Shadow', 'Katsuragikiri Nagamasa', 'Lithic Blade', 'Luxurious Sea-Lord', "Old Merc's Pal", 'Prototype Archaic', 'Quartz', 'Rainslasher', 'Redhorn Stonethresher', 'Royal Greatsword', 'Sacrificial Greatsword', 'Serpent Spine', 'Skyrider Greatsword', 'Skyward Pride', 'Snow-Tombed Starsilver', 'Song of Broken Pines', 'The Bell', 'The Unforged', 'Waster Greatsword', 'White Iron Greatsword', 'Whiteblind', "Wolf's Gravestone"];
bowArray = ['Alley Hunter', "Amos' Bow", 'Aqua Simulacra', 'Blackcliff Warbow', 'Compound Bow', 'Ebony Bow', 'Elegy for the End', 'Fading Twilight', 'Favonius Warbow', 'Hamayumi', "Hunter's Bow", 'Messenger', 'Mitternachts Waltz', "Mouun's Moon", 'Polar Star', 'Predator', 'Prototype Crescent', 'Raven Bow', 'Recurve Bow', 'Royal Bow', 'Rust', 'Sacrificial Bow', "Seasoned Hunter's Bow", "Sharpshooter's Oath", 'Skyward Harp', 'Slingshot', 'The Stringless', 'The Viridescent Hunt', 'Thundering Pulse', 'Windblume Ode'];
catalystArray = ['Amber Catalyst', "Apprentice's Notes", 'Blackcliff Agate', 'Dodoco Tales', 'Emerald Orb', 'Everlasting Moonglow', 'Eye of Perception', 'Favonius Codex', 'Frostbearer', 'Hakushin Ring', "Kagura's Verity", 'Lost Prayer to the Sacred Winds', 'Magic Guide', 'Mappa Mare', 'Memory of Dust', 'Oathsworn Eye', 'Otherworldly Story', 'Pocket Grimoire', 'Prototype Amber', 'Royal Grimoire'];

function getWeapons(key){
  switch(weapon_dict[key]) {
    case(1): //sword
      randomItem = Math.floor(1+Math.random()*(swordArray.length - 1));
      return swordArray[randomItem % swordArray.length];
      // return [swordArray[randomItem % swordArray.length], swordArray[(randomItem + 1) % swordArray.length]];
    case(2): //polearm
      randomItem = Math.floor(1+Math.random()*(polearmArray.length - 1));
      return polearmArray[randomItem % polearmArray.length];
      // return [polearmArray[randomItem % polearmArray.length], polearmArray[(randomItem + 1) % polearmArray.length]];
    case(3): //claymore
      randomItem = Math.floor(1+Math.random()*(claymoreArray.length - 1));
      return claymoreArray[randomItem % claymoreArray.length];
      return [claymoreArray[randomItem % claymoreArray.length], claymoreArray[(randomItem + 1) % claymoreArray.length]];
    case(4): //bow
      randomItem = Math.floor(1+Math.random()*(bowArray.length - 1));
      return bowArray[randomItem % bowArray.length];
      return [bowArray[randomItem % bowArray.length], bowArray[(randomItem + 1) % bowArray.length]];
    case(5): //catalyst
      randomItem = Math.floor(1+Math.random()*(catalystArray.length - 1));
      return catalystArray[randomItem % catalystArray.length];
      return [catalystArray[randomItem % catalystArray.length], catalystArray[(randomItem + 1) % catalystArray.length]];
  }
  return;
}


function submit(){
  // alert("hi");
  // var array = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  if (checkboxes.length < 4) {
    alert("not enough characters");
    return;
  }
  var selected = new Array();

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        selected.push(checkboxes[i].value);
    }
  }

  selected = shuffle(selected);

  // document.getElementById("characterge").innerHTML = String(selected[0]) + ", " + String(selected[1]) + ", " + String(selected[2]) + ", " + String(selected[4])

  document.getElementById("characterge").innerHTML = "characters possible: " + selected

  document.getElementById("char1").innerHTML = selected[0]
  document.getElementById("char2").innerHTML = selected[1]
  document.getElementById("char3").innerHTML = selected[2]
  document.getElementById("char4").innerHTML = selected[3]

  generate();
  
  document.getElementById("weapon1").innerHTML = "weapon: ".concat(getWeapons(selected[0]).bold()).concat(", backup: ").concat(getWeapons(selected[0]));
  document.getElementById("weapon2").innerHTML = "weapon: ".concat(getWeapons(selected[1]).bold()).concat(", backup: ").concat(getWeapons(selected[1]));
  document.getElementById("weapon3").innerHTML = "weapon: ".concat(getWeapons(selected[2]).bold()).concat(", backup: ").concat(getWeapons(selected[2]));
  document.getElementById("weapon4").innerHTML = "weapon: ".concat(getWeapons(selected[3]).bold()).concat(", backup: ").concat(getWeapons(selected[3]));

}

  