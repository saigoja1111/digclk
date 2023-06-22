function digiclk()
{
    var date=new Date();
    var hh=date.getDate();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    if(hh>=12)
    {
        am_pm="pm";
        if(hh>12)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
       hh=12
    }
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
    else if(mo==3)
    {
        mo="apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="juy"
    }
    else if(mo==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else if(mo==11)
    {
        mo="dec"
    }
    switch(day)
    {
        case 0: day="sunday"
        document.body.style.backgroundimage="0.jpg"
        break;
        case 1: day="monday"
        document.body.style.backgroundimage="1.jpg"
        break;
        case 2: day="tueday"
        document.body.style.backgroundimage="2.jpg"
        break;
        case 3: day="wednesday"
        document.body.style.backgroundimage="3.jpg"
        break;
        case 4: day="thursday"
        document.body.style.backgroundimage="4.jpg"
        break;
        case 5: day="firday"
        document.body.style.backgroundimage="5.jpg"
        break;
        case 6: day="saturday"
        document.body.style.backgroundimage="6.jpg"
        break;
    }
    document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("Time").innerHTML=`${hh}/${mm}/${am_pm}`;
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    setTimeout(digiclk,1000);
}
digiclk()