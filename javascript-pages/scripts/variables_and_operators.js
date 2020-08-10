function undefValue(element_id) {
    var x;
    document.getElementById(element_id).innerHTML = x
}

function logicalExample1(element_id) {
    var x=20, y=15, t=true, f=false;
    document.getElementById(element_id).innerHTML = x > y && f

}

function logicalExample2(element_id) {
    var x=20, y=15, t=true, f=false;
    document.getElementById(element_id).innerHTML = x==y || t
}

function typeofExample(element_id, which_var) {
    var x,y,z;

    x = 10
    y = "pizza"
    z = true

    switch (which_var) {
        case "x":
            document.getElementById(element_id).innerHTML = typeof x;
            break;
        case "y":
            document.getElementById(element_id).innerHTML = typeof y;
            break;
        case "z":
            document.getElementById(element_id).innerHTML = typeof z;
    }
}