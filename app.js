new Vue({
    el: '#app',
    data :{
        player1: 100,
        pc: 100,
        gamestart: false,
        turns:[]
    },
    methods: {
        stargame:function(){
            this.gamestart = true;
            this.player1 = 100;
            this.pc = 100 ;
        },
        attack:function(){
           
            
            /////////man//////
            this.playerattack();
            this.pcattack();
        },
        sp_attack:function(){
            var damages = this.inputdamage(20,10);
            this.pc -= damages;
            this.turns.unshift({
                isplayer : true,
                textLog : 'player damage ' + damages
            })
            if (this.checkplayer()) {
                return;
            }
            this.playerattack();
        },
        playerattack:function(){
            var damages = this.inputdamage(10,5);
            this.player1 -= damages;
            this.turns.unshift({
                isplayer : true,
                textLog : 'pc damage ' + damages
            })
            this.checkplayer();
            
        },
        pcattack:function(){
            var damages = this.inputdamage(10,1);
            this.pc -= damages;
            this.turns.unshift({
                isplayer : false,
                textLog : 'Player damage ' + damages
            })
            this.checkplayer();
        },
        heal:function(){
            if (this.player1 >= 70) {
                return false;
            }else if (this.player1 <= 60){
                this.player1 += 10;
            }
            this.playerattack();
        },
        giveup:function(){
            alert('you lose');
            return this.gamestart = false;

            
        },
        inputdamage:function (maxdamage,mindamage) {
            return damage = Math.max(Math.floor(Math.random() * maxdamage),mindamage);
        },
        checkplayer:function(){
            if (this.pc <= 0) {
                if (confirm('you won ! new game ?')) {
                    this.stargame();
                } else {
                    this.gamestart = false;
                }
                return true;
            } else if (this.player1 <= 0){
                if (confirm('you lose ! new game ?')) {
                    this.stargame();
                } else {
                    this.gamestart = false;
                }
                return true;
            }
        }
    },
})