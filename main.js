window.onload=function(){
    for(var i=0;i<9;i++){
        document.getElementById('game').innerHTML+='<div class="block"></div>'
    }
    
    var hod=0;
    var games=0;
    var Xwins=0;
    var Owins=0;
    document.getElementById('game').onclick=function(event){
        var a = document.getElementById('game-title');

        if (event.target.className=='block'){
         if(event.target.innerHTML=='')
            {   
                if(hod % 2==0)
                {
                    event.target.innerHTML='0';
                }
                else
                {
                    event.target.innerHTML='X'
                }
                hod++;
                player();
                checkWinner();
                winscount();
            }
            else
            {   
                alert('ячейка уже занята');
            }
        }
    }

    function checkWinner() 
    {
        var Allblock=document.getElementsByClassName('block');
        //горизонтали
        if(Allblock[0].innerHTML=='X' && Allblock[1].innerHTML=='X' && Allblock[2].innerHTML=='X')
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }  
        if(Allblock[3].innerHTML=='X' && Allblock[4].innerHTML=='X' && Allblock[5].innerHTML=='X')    
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }
        if(Allblock[6].innerHTML=='X' && Allblock[7].innerHTML=='X' && Allblock[8].innerHTML=='X')   
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }
        //вертикали
        if(Allblock[0].innerHTML=='X' && Allblock[3].innerHTML=='X' && Allblock[6].innerHTML=='X') 
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }
        if(Allblock[1].innerHTML=='X' && Allblock[4].innerHTML=='X' && Allblock[7].innerHTML=='X')
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }
        if(Allblock[2].innerHTML=='X' && Allblock[5].innerHTML=='X' && Allblock[8].innerHTML=='X')
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }
        //диагональ
        if(Allblock[0].innerHTML=='X' && Allblock[4].innerHTML=='X' && Allblock[8].innerHTML=='X')
         {alert('Победили крестики!!!');
         Xwins++;
         games++;
        clear();
        }
        if(Allblock[2].innerHTML=='X' && Allblock[4].innerHTML=='X' && Allblock[6].innerHTML=='X')
        {alert('Победили крестики!!!');
        Xwins++;
        games++;
        clear();
        }


        //горизонтали
        if(Allblock[0].innerHTML=='0' && Allblock[1].innerHTML=='0' && Allblock[2].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        if(Allblock[3].innerHTML=='0' && Allblock[4].innerHTML=='0' && Allblock[5].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        if(Allblock[6].innerHTML=='0' && Allblock[7].innerHTML=='0' && Allblock[8].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        //вертикали
        if(Allblock[0].innerHTML=='0' && Allblock[3].innerHTML=='0' && Allblock[6].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        if(Allblock[1].innerHTML=='0' && Allblock[4].innerHTML=='0' && Allblock[7].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        if(Allblock[2].innerHTML=='0' && Allblock[5].innerHTML=='0' && Allblock[8].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        //диагональ
        if(Allblock[0].innerHTML=='0' && Allblock[4].innerHTML=='0' && Allblock[8].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        if(Allblock[2].innerHTML=='0' && Allblock[4].innerHTML=='0' && Allblock[6].innerHTML=='0')
        {alert('Победили нолики!!!');
        Owins++;
        games++;
        clear();
        }
        //alert('Ничья');    
    }

        function player()
        {
            var a = document.getElementById('turn');
            if(hod % 2==0)
            {
                a.innerText="Ходит 0";
            }
            else
            {
                a.innerText=" Ходит X";
            }

        }

        const clear= () => {
            var Allblock=document.getElementsByClassName('block');
            Allblock[0].innerHTML='';
            Allblock[1].innerHTML='';
            Allblock[2].innerHTML='';
            Allblock[3].innerHTML='';
            Allblock[4].innerHTML='';
            Allblock[5].innerHTML='';
            Allblock[6].innerHTML='';
            Allblock[7].innerHTML='';
            Allblock[8].innerHTML='';
        }

        function winscount()
        {
            var g=document.getElementById('gamecount');
            var x=document.getElementById('Xwins');
            var o=document.getElementById('0wins');
            x.innerText= "количество побед у крестика:"+Xwins;
            o.innerText="количество побед у нолика:"+Owins;
            g.innerText="количество сыгранных партий:"+games;
        }


}  
