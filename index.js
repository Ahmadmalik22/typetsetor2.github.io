let btn=document.querySelector(".btn");
const msg=document.getElementById("words_auto");
const myWords=document.getElementById("user_text");
const arr=["try your best to get good rank","walking in nature is just like walking in paradise","hello my name is ahmad","this my practice project","hello how are you","ok that fine now check"];
let start;
let end;
const playgame=()=>{
    let random=Math.floor(Math.random()*arr.length)
    msg.innerText=arr[random];
    let date=new Date();
    start=date.getTime();
    btn.innerText="done"
}

const endgame=()=>{
  
    let date=new Date();
    end=date.getTime();
    let total=(end-start)/1000;
    let totalwords=myWords.value;
    let wordscount= counter(totalwords);
    let speed=Math.round((wordscount/total)*60);
    let finalmsg=`you typed at ${speed} words per minute`;
   finalmsg += compare(msg.innerText,totalwords);
    msg.innerText=finalmsg;
}
const compare=(str1,str2)=>{
    let word1=str1.split(" ");
    let  word2=str2.split(" ");
    let cnt=0;
    word1.forEach(function(elem,ind){
        if(elem==word2[ind]){
            cnt++
        }
       
    });
    let worng=word1.length-cnt;
    return ( "  " + cnt + " are correct out of " + word1.length + " and " + worng + " are errors" )

}
const counter=(str)=>{
    let response=str.split(" ").length;
    return response;
}
btn.addEventListener("click",function(){
   if(this.innerText=='start'){
    myWords.disabled= false;
   
    playgame();
   }
   else if(this.innerText='done'){
    myWords.disabled = true;
    btn.innerText="start";
    endgame();
    myWords.value=""

   }
})