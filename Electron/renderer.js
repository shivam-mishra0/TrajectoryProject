//main code

async function getParticularData(e){
  var x = []

  var y = []


  id = e.target.id
  console.log(id)
  const data = await window.api.returnParticularData(id);
  console.log(data.data)
  const Data = data.data

  let myTable = document.querySelector('#table2');
  myTable.innerHTML=""  

  let headers = [ 'TimeStamp', 'Latitude', 'Longitude'];
  let table = document.createElement('table');
  let headerRow = document.createElement('tr');                                                                                                                                                                                                                                                                                                                                                                                                   

  headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);

  });
  
  table.appendChild(headerRow);
  Data.forEach(i => {
    console.log(i)
    let row = document.createElement('tr');
    // row.setAttribute("id", i.timestamp);
    // let cell = document.createElement('td');
    let cell = document.createElement('td');
    let textNode = document.createTextNode(i.timestamp);
    cell.appendChild(textNode);
    let cell2 = document.createElement('td');
    let textNode2 = document.createTextNode(i.latitude);
    cell2.appendChild(textNode2);

    let cell3 = document.createElement('td');
    let textNode3 = document.createTextNode(i.longitude);
    cell3.appendChild(textNode3);
    
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);


    
    // console.log(Object.values(i))
    // Object.values(i).forEach(text => {
    //     console.log(text)
    //     console.log(cell)
    //     console.log(row)
    // })

    table.appendChild(row);

   
  value = new Number(i.latitude)
  x.push(value.toFixed(20))

  value = new Number(i.longitude)
  y.push(value.toFixed(20))
  // console.log(value.toFixed(20))

});

myTable.appendChild(table);


//Plotting graph

console.log("X", x)
console.log("Y", y)


const data1 = {
  labels: x,
  datasets: [{
    label: 'Trajectory Plot',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: y,
  }]
};

const config = {
  type: 'line',
  data: data1,
  options: {}
};

let chartStatus = Chart.getChart("myChart");
if (chartStatus != undefined) {
    chartStatus.destroy();
}
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);







}




// function XYZ(val){
//   console.log(val.target.id)

//   let text = "Hi from renderer process"

//   window.api.doSomething(text);
//   text = "";

// }




// window.api.onCount((data)=>{
//   count = data;
//   console.log("dsfhjksdfhdfskjhjdfkshjk")
//   console.log(count, "dfjkjdfjfd")
//   var temp = document.getElementById('cid');
//   console.log(temp)
//   temp.innerHTML = count

// })

async function  returnGet(){
  // console.log("hughttgygyguhjniniihuy")


  const data = await window.api.returnPromise("shivam")
  console.log(data)

  // let btnGet = document.querySelector('button');
  let myTable = document.querySelector('#table');

let headers = ['Data', 'TimeStamp', 'Action'];
let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

data.forEach(i => {
    let row = document.createElement('tr');
    row.setAttribute("id", i.fileName);
    // let cell = document.createElement('td');
    let cell = document.createElement('td');
    let textNode = document.createTextNode(i.fileName);
    cell.appendChild(textNode);
    let cell2 = document.createElement('td');
    let textNode2 = document.createTextNode(i.timeStamp);
    cell2.appendChild(textNode2);
    let cell3 = document.createElement('td');
    cell3.setAttribute("id", i.fileName);
    cell3.setAttribute("class", "viewbtn");
    cell3.addEventListener('click',function (e){getParticularData(e)}, false);
    let textNode3 = document.createTextNode("view");
    cell3.appendChild(textNode3);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);


    
    // console.log(Object.values(i))
    // Object.values(i).forEach(text => {
    //     console.log(text)
    //     console.log(cell)
    //     console.log(row)
    // })

    table.appendChild(row);
});

myTable.appendChild(table);

var flag = false;

}

