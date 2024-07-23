const expandNotice = () =>{
    document.getElementById('navOpen').style.display="block";
    document.getElementById('navClosed').style.display="none";
}

const closeNotice = () =>{
    document.getElementById('navOpen').style.display="none";
    document.getElementById('navClosed').style.display="block";
    console.log("clicked")
}
