const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function append(header, ret) {
  const h = document.createElement("h3");
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