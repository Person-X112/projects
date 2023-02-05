var Interval;
        setInterval(function()
        {
            var date=new Date();
            var d=date.toLocaleTimeString();
            disp.innerHTML=d;
        },1000);