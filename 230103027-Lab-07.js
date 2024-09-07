let PrevOpr = [];
let pcount = 0;
function prevopr(EID){
	Delete(EID);
	let insrt = document.getElementById(EID);
	insrt.innerHTML += PrevOpr.pop;
}
function Reset(EID){
      let insrt = document.getElementById(EID);
      insrt.innerHTML = "";
   	exp.splice(0, count);
   	PrevOpr.splice(0, pcount);
   	basket.splice(0,1)
      }
function Delete(EID){
      let insrt = document.getElementById(EID);
      insrt.innerHTML = "";
      }   
PrevOpr[pcount++] += slice;      
