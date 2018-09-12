var score,roundscore,activeplayer,gameplaying,holdp,lastdice,input;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gameplaying)
     {
           var diceno= Math.floor(Math.random()*6)+1;
           var diceno2= Math.floor(Math.random()*6)+1;
           document.querySelector('#dice-1').style.display = 'block';
           document.querySelector('#dice-2').style.display = 'block';
           document.querySelector('#dice-1').src = 'dice-'+diceno+'.png';
           document.querySelector('#dice-2').src = 'dice-'+diceno2+'.png';
         
         /*if(lastdice===6 && diceno===6)
            {
                scores[activeplayer]=0;
                document.querySelector('#score-'+activeplayer).textContent='0';
                nextplayer();
            }*/
             
            if(diceno!==1 && diceno2!==1)
                {
                    roundscore = roundscore+diceno+diceno2;
                    document.querySelector('#current-'+activeplayer).textContent = roundscore;
                }
            else{

                nextplayer();
            }
         lastdice = diceno;
     }   
    
});
document.querySelector('.btn-hold').addEventListener('click',function()
    {
     if(holdp)
         {
             scores[activeplayer]+=roundscore;
                document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer];
             input= document.querySelector('.final-score').value;
             var winningscore;
             if(input)
                 winningscore=input;
             else
                 winningscore=100;
                if(scores[activeplayer]>=winningscore)
                {
                    document.querySelector('#name-'+activeplayer).textContent = 'WINNER!!';
                    document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
                    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
                    document.querySelector('#dice-1').style.display = 'none';
                    document.querySelector('#dice-2').style.display = 'none';
                    
                    gameplaying=false;
                    holdp=false;
                } 


                else
                    nextplayer();
         }
    
    
});
function nextplayer(){
    activeplayer ===0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',init);
function init()
{
    scores = [0,0];
    roundscore = 0;
    activeplayer = 0;
    gameplaying=true;
    holdp=true;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};