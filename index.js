const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function append(header, ret) {
  const h = document.createElement("div");
  const p = document.createElement("p");
  let k = document.createTextNode(header);
  let n = document.createTextNode(ret);
  h.appendChild(k);
  document.body.appendChild(h);
  p.appendChild(n);
  document.body.appendChild(p)
}

append("1. Display numbers 1 to 20 ", kata1())

function kata1() {
  let x = 1;
  for (let i = 2; i <= 20; i++) {
    x += " " + i;
  }
  return x;
}

append("2. Display the even numbers from 1 to 20. ", kata2())

function kata2() {
  let x = 1;
  for (let i = 2; i <= 20; i++) {

    if (i % 2 == 0) {
      x += " " + i;
    }

  }
  return x;
}

append("3. Display the odd numbers from 1 to 20", kata3())

function kata3() {
  let x = 1;
  for (let i = 2; i <= 20; i++) {
    if (i % 2 == 1) {
      x += " " + i;
    }
  }
  return x;

}

append("4. Display the muiltples of 5 to 100.", kata4())

function kata4() {
  let x = 5;
  for (let i = 10; i <= 100; i++) {
    if (i % 5 == 0) {
      x += " " + i;
    }
  }

  return x;
}

append("5. Display the square numbers up to 100", kata5())

function kata5() {
  let x = 1;

  for (let i = 2; i <= 10; i++) {
    x += " " + i * i;
  }
  return x;
}

append("6. Display the numbers counting backwards from 20 to 1", kata6())

function kata6() {
  let x = 20;
  for (let i = 19; i >= 1; i--) {
    x += " " + i;
  }
  return x;
}
append("7. Display the even numbers counting backwards from 20.", kata7())

function kata7() {
  let x = 20;
  for (let i = 19; i >= 1; i--) {
    if (i % 2 == 0) {
      x += " " + i;
    }
  }
  return x;


}

append("8. Display the odd numbers counting backwards from 20", kata8())

function kata8() {
  let x = 19;
  for (let i = 18; i >= 1; i--) {
    if (i % 2 == 1) {
      x += " " + i;
    }
  }
  return x;

}

append("9. Display the multiples of 5, counting down from 100", kata9())

function kata9() {

  let x = 100;
  for (let i = 95; i >= 1; i--) {
    if (i % 5 == 0) {
      x += " " + i;
    }
  }

  return x;

}

append("10. Display the square root numbers, counting down form 100.", kata10())

function kata10() {
  let x = 10;

  for (let i = 9; i >= 1; i--) {
    x += " " + i * i;
  }
  return x;


}
append("11. Display the 20 elements of sampleArray", kata11())

function kata11() {
  let x= "";
  
  
  for (i = 0; i <sampleArray.length; i++) {
    x += " " + sampleArray[i]; 

  }return x;


}

append("12. Display all the even numbers in the SampleArray", kata12())

function kata12(){
 
  return sampleArray.filter((element) =>  element % 2 ==0).join(" ")
  
    
}

append("13. Display all the odd numbers in the sampleArray", kata13())

function kata13(){

  return sampleArray.filter((element) => element % 2 ==1).join(" ")
}

append("14. Display the square of each element in sampleArray ", kata14())

function kata14(){



  return sampleArray.map(element => Math.pow(element, 2)).join(" ")

}
append("15. Display sum of all the numbers from 1 to 20 ", kata15())

function kata15(){
  let x= 0;
  for(let i = 1; i<=20; i++){
  
    x =x+i;
  }return x;
}

append("16. Display all of the sums of a sampleArray", kata16())

function kata16(){
  let sum=0;

  for(let i = 0; i < sampleArray.length; i++){
    sum += sampleArray[i];
  }
  return sum;
}

append("17. Display the smallest element in sampleArray", kata17())

 function kata17(){
 
    return Math.min(...sampleArray);
 }
append("18. Display the largest element in sampleArray", kata18())

function kata18(){

  return Math.max(...sampleArray);
}

function kata19(){
  
   for(i=1; i<=3; i++) {
    // Create a div, with class "bar", and set the width to 100px.
    var newElement = document.createElement("div");
    newElement.className = "bar";
    newElement.style.width = i*100 + "px";

    // Place a text label inside the new div.
    var newText = document.createTextNode("Bar #" + i);
    newElement.appendChild(newText);

    // Put the new div on the page inside the existing element "d1".
    var destination = document.getElementById("d1");
    destination.appendChild(newElement);
  }
}
kata19()
