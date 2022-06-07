/* .js files add interaction to your website */

var factList = [
  "When computer technology emerged during World War II, women made up most of the computing workforce.",
  "The percentage of women working in computer science-related professions has declined since the 1990s, dropping from 35% to 26% between 1990 and 2013.",
  "In 1970, women accounted for 13.6% of bachelor’s in computer science graduates.",
  "Just 15% of girls are enrolled in classes where only CS is taught, compared with 27% of boys.",
  "Adults encourage young boys more often than they encourage girls to pursue a career in CS. In a study by Google and Gallup, about half of boys report that an adult in their life has encouraged them to pursue a career in CS, compared with just 37% of girls.",
  "Young girls are less confident in their ability to learn computer science than boys. In a study by Google and Gallup, thirty percent of girls feel very confident they could be successful in learning computer science if they wanted to, compared with 41% of boys.",
  "Girls are less likely to think CS is important for them to learn, with 31% of girls in grades 7-12, compared with 49% of boys in these grades, saying it is important for them to learn computer science.",
  "Women only earn 18% of computer science bachelor’s degrees in the United States.",

];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
} 

