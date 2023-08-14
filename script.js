function fun(val){
    if(val=="jimin"){
        hidedefault()
        document.getElementById("info").innerText="Jimin. Jimin always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerHTML="JIMIN"
        document.getElementById("memage").innerHTML="30"

    }
    else if(val=="v"){
        hidedefault()
        document.getElementById("info").innerHTML="V always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerText="V"
        document.getElementById("memage").innerText="30"
    }
    else if(val=="rm"){
        hidedefault()
        document.getElementById("info").innerHTML="RM always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerText="RM"
        document.getElementById("memage").innerText="31"
    }
    else if(val=="jhope"){
        hidedefault()
        document.getElementById("info").innerHTML="jhope always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerText="J-Hope"
        document.getElementById("memage").innerText="31"
    }
    else if(val=="suga"){
        hidedefault()
        document.getElementById("info").innerHTML="Suga always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerText="SUGA"
        document.getElementById("memage").innerText="31"
    }
    else if(val=="jin"){
        hidedefault()
        document.getElementById("info").innerHTML="jin always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerText="JIN"
        document.getElementById("memage").innerText="32"
    }
    else{
        hidedefault()
        document.getElementById("info").innerHTML="jk always made an impression through his elegant dance moves and distinct falsettos, giving an aesthetic flair to all of BTS' releases. The Busan-born artist also showcased more of his talents through three solo tracks under the group's name: 2016's."
        document.getElementById("memname").innerText="Jungkook"
        document.getElementById("memage").innerText="28"
    }
}
function hidedefault(){
    document.getElementById("default").style.display="none"
    document.getElementById("default1").style.display="none"
    document.getElementById("default2").style.display="none"

}
