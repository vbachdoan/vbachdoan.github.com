// for progress bar
const scroll = {

    handleEvent: function() {
        document.onscroll = function() {
            var scrTop = document.documentElement.scrollTop;
            var scrHei = document.body.scrollHeight;
            var cliHei = document.documentElement.clientHeight;
            let checkLocation= (Math.round((scrTop / (scrHei - cliHei)) * 100));
            if(checkLocation<=25){
                document.getElementById('progress').innerText="HOME";
            }
            else if(checkLocation>25&&checkLocation<=55){
                document.getElementById('progress').innerText ="OVERVIEW";
            }
            else if(checkLocation>55&&checkLocation<98){
                document.getElementById('progress').innerText ="MODELS";
            }
            else{
                document.getElementById('progress').innerText ="MORE";
            }
        }
    },
    button:function(){
        document.getElementById("wrap_button2").onmouseenter=function(){
            document.getElementById('background2').style.transform='translateX(100%)';
            this.addEventListener('mouseleave',function(){
                document.getElementById('background2').style.transform='translateX(0)';
            })
        };
        document.getElementById("wrap_button1").onmouseenter=function(){
            document.getElementById('background1').style.transform='translateX(100%)';
            this.addEventListener('mouseleave',function(){
                document.getElementById('background1').style.transform='translateX(0)';
            })
        }
    },
    button1_click:function(){
        let check=0;
        document.getElementById("wrap_button1").onmousedown=function(){
            if(check==0){
                document.getElementById("#wrap_button1").style.backgroundColor="#05853c";
                check++;
            }
        }
        document.getElementById("wrap_button1").onmouseup=function(){
            if(check==1){
                document.getElementById("wrap_button1").style.backgroundColor="#ccc";
            }
        }
    },
    button2_click:function(){
        let check=0;
        document.getElementById("wrap_button2").onmousedown=function(){
            if(check==0){
                document.getElementById("#wrap_button2").style.backgroundColor="#05853c";
                check++;
            }
        }
        document.getElementById("wrap_button2").onmouseup=function(){
            if(check==1){
                document.getElementById("wrap_button2").style.backgroundColor="#ccc";
            }
        }
    }
    ,
    control: function() {
        this.handleEvent();
        this.button();
        this.display_feature();
        this.hover_image();
        this.button1_click();
        this.button2_click();
    }
}
scroll.control();

