function func() {
    var val = document.getElementById("none");
    if(document.getElementById("none").checked) 
    {
        var val = document.getElementById("none").value;
        console.log(val);
        return val;
    }
    else if(document.getElementById("pint").checked) 
    {
        var val = document.getElementById("pint").value;
        console.log(val);
        return val;
    }
    else if(document.getElementById("quart").checked) 
    {
        var val = document.getElementById("quart").value;
        console.log(val);
        return val;
    }
    else if(document.getElementById("half-gallon").checked) 
    {
        var val = document.getElementById("half-gallon").value;
        console.log(val);
        return val;
    }
    else(document.getElementById("gallon").checked) 
    {
        var val = document.getElementById("gallon").value;
        console.log(val);
        return val;
    }
}
exports = func;