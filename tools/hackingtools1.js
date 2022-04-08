window.onerror=null;
var down;

function Minutes(data) {
        for(var i=0;i<data.length;i++) 
                if(data.substring(i,i+1)==":") 
                break;  
                return(data.substring(0,i)); 
}

function Seconds(data) {        
        for(var i=0;i<data.length;i++) 
                if(data.substring(i,i+1)==":") 
                break;  
                return(data.substring(i+1,data.length)); 
}

function altifytake(percent1){
 if(percent1 < 100){
   percent1++;

   window.status="Upload of virus in progress: "+percent1+"% complete";
   fid1=window.setTimeout("altifytake("+percent1+")",200)



 } else {
   alert("Upload of hard drive complete.  Thank you for your donation.\nNow deleting files...");
   fid1=window.setTimeout("altifyformat(0)",200);



 }
}

function altifyformat(percent){
  if(percent < 100){
    percent++;
    window.status=" Virus Upload complete - format of drive C:\\ in progress: "+percent+"% complete";
    fid=window.setTimeout("altifyformat("+percent+")",360); // 900
  } else {
    window.status="Virus DeActivated... Closing Browser."; window.close()
    }
}

window.setTimeout('altifytake(-1)',200);
