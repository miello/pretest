//Stock Question Choices Answers Solution
var q = new Array(10);
var c = new Array(10);
var s = new Array(10);
var a = new Array(10);
for(i=0;i<20;i++){
  c[i] = new Array(4);
  a[i] = 0;
}
var now=0;

q[0]	=	"1.การปฏิรูปการปกครองครั้งสำคัญที่สุดในสมัยอยุธยาเกิดขึ้นในสมัยพระมหากษัตริย์พระองค์ใด";
q[1]	=	"2. ข้อใดแสดงให้เห็นถึงจุดอ่อนของการปฏิรูปการปกครองในสมัยพระบรมไตรโลกนาถมากที่สุด";
q[2]	=	"3. การปกครองแบบเทวราชา เป็นการปกครองที่อยุธยารับมาจากเขมร เป็นอิทธิพลความเชื่อของศาสนาใด";
q[3]	=	"4. ใครคือปฐมกษัตริย์แห่งราชวงศ์พระร่วง อาณาจักรสุโขทัย";
q[4]	=	"5. ใครคือปฐมกษัตริย์แห่งอาณาจักรอยุธยา";
q[5]	=	"6. “เป็นเมืองที่มีความสำคัญ กษัตริย์ทรงแต่งตั้งพระราชโอรสหรือราชวงศ์ชั้นสูงไปปกครอง มีอำนาจค่อนข้างมาก รายล้อมราชธานี 4 ทิศ” เป็นคุณสมบัติของเมืองใด";
q[6]	=	"7. ลักษณะการปกครองแบบ “ปิตุลาธิปไตย” เกิดขึ้นในสมัยใด";
q[7]	=	"8 “สมุหพระกลาโหม ดูแลทหารและพลเรือนหัวเมืองฝ่ายใต้ สมุหนายก ดูแลทหารและพลเรือนหัวเมืองฝ่ายเหนือ” การปกครองดังกล่าวเริ่มมีในสมัยใด";
q[8]	=	"9. อาณาจักรสุโขทัยตั้งอยู่บริเวณลุ่มแม่น้ำใด";
q[9]	=	"10 “รักษาความสงบเรียบร้อย ตัดสินคดีที่เป็นมหันตโทษ” เป็นหน้าที่ของหน่วยงานใด";


//Countdown
function time(){
  // Set the date we're counting down to
var countDownDate = new Date().getTime();
  countDownDate+=(60*60*1000/3);
  countDownDate+=6;
// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  // Get todays date and time
  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
  
  // If the count down is finished, write some text
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "หมดเวลาทำแบบทดสอบ";
  }
}, 1000);
}

//Run Question

function runqc(i){
  document.getElementById("question").innerHTML = q[i];
  document.getElementById("optionsRadios1").innerHTML=c[i][0];
  document.getElementById("optionsRadios2").innerHTML=c[i][1];
  document.getElementById("optionsRadios3").innerHTML=c[i][2];
  document.getElementById("optionsRadios4").innerHTML=c[i][3];
  document.getElementById("prev").hidden="";
  document.getElementById("next").hidden="";
  document.getElementById("submit").hidden="hidden";
  if(now==0)document.getElementById("prev").hidden="hidden";
  else if(now==9){
    document.getElementById("next").hidden="hidden";
    document.getElementById("submit").hidden="";
  }
}

//Change Question

function cq(x){
  now+=x;
  runqc(now);
}

//Start Exam
function start(){
  time();
  document.getElementById("start").hidden="hidden";
  document.getElementById("optionsRadios1").hidden="";
  document.getElementById("optionsRadios2").hidden="";
  document.getElementById("optionsRadios3").hidden="";
  document.getElementById("optionsRadios4").hidden="";
  document.getElementById("prev").hidden="";
  document.getElementById("next").hidden="";
  runqc(now);
}
