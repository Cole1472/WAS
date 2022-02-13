
/*
  here is a list of data that the intire website works off of to set points to go to.
  Each array will tell of a catagory the website has
*/


var List_info = [
  Main={
    Link:"main.html",
    Name:"Main"
  },
  PersonClass={
    Link:"pages/info/entityClass.html",
    Name:"Entity Class"
  },
];
var list_data =[
  "Information",
  "Entities"
];
function createHeader(){
  // console.log("hello");
  const body = document.body;


  //creates the header
  const hdr = document.createElement('header');
  hdr.id ="mainHeader";
  body.appendChild(hdr);

  //creates the div
  const div1 = document.createElement('div');
  div1.id = "onefor";
  hdr.appendChild(div1);

  //creates the table and its elements
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  div1.appendChild(tr);
  //creates title in the Tables
  const thBlank = document.createElement('th');
  thBlank.style.setProperty('width','180px');
  tr.appendChild(thBlank);

  const thTitle = document.createElement('th');
  tr.appendChild(thTitle);


  const h1Title = document.createElement('h1');
  h1Title.innerHTML = "<span>World of Acquired Studies<br> <small><i>To search for the good and the bad</i></small></span>";
  thTitle.appendChild(h1Title);
}

function createSidePanel(depth,current){
  const body = document.body;

  //information
  const sideDiv = document.createElement('div');
  sideDiv.id ="sideLeft";
  body.appendChild(sideDiv);

  const info_title = document.createElement('h2');
  info_title.id = "catagory";
  info_title.innerHTML = "Information";
  sideDiv.appendChild(info_title);


    //creates title
    for(let i=0;i<List_info.length;i++){
      let linkH3_info = document.createElement('h3');
      linkH3_info.display = 'block';
      let linkH3_info_link = document.createElement('a');
      let indent = "";
      //Formats links
      if(depth>0){
        for (var j = 0; j <depth ; j++) {
          console.log(List_info[i].Name);
          console.log("Here: " + j);
          indent += "../";
        }
        linkH3_info_link.href = indent +  List_info[i].Link;
      }else{
        linkH3_info_link.href = List_info[i].Link;
      }
      linkH3_info_link.innerHTML = List_info[i].Name+"<br>";
      sideDiv.appendChild(linkH3_info_link);
    }


}

function dropPannel(id){
  if(document.getElementById(id).style.display == "block"){
    document.getElementById(id).style.display = "none";
  }else{
    document.getElementById(id).style.display = "block";

  }

}
