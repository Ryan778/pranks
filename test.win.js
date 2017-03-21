//Made for Microsoft ® Windows Based Script Host (JScript)
//If this file is run, it will give a popup box saying "Test Successful". 

if(typeof WScript === "undefined"){
  console.error("This is an EMCAScript 3 JScript file and can only be run using the Microsoft ® Windows Based Script Host.");
}
else{
  var WShell = WScript.CreateObject("WScript.Shell"); 
  WShell.Popup("Test Successful", 0, "Info", 64);
}
