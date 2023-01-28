

// Detecting Button Pressed.......
var rowElement = document.querySelectorAll(".piano");
// console.log(rowElement);

for (var index = 0; index < rowElement.length; index++) {
    // console.log(rowElement[index]);
    rowElement[index].addEventListener("click", handleClick);
}

function handleClick() {
    // alert("You clicked");
    // console.log(this.innerHTML); // console.log the button that triggers the event.

    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "d":
            var d1 = new Audio("sounds/do.wav");
            d1.play();
            break;
            case "d#":
                var d2 = new Audio("sounds/do.wav");
                d2.play();
                break;

        case "r":
            var r1 = new Audio("sounds/re.wav");
            r1.play();
            break;
            case "r#":
                var r2 = new Audio("sounds/re.wav");
                r2.play();
                break;
        case "m":
            var m1 = new Audio("sounds/mi.wav");
            m1.play();
            break;
            case "m#":
                var m2 = new Audio("sounds/mi.wav");
                m2.play();
                break;


        case "f":
            var f1 = new Audio("sounds/fa.wav");
            f1.play();
            break;
            case "f#":
                var f2 = new Audio("sounds/fa.wav");
                f2.play();
                break;

        case "s":
            var s1 = new Audio("sounds/sol.wav");
            s1.play();
            break;
            case "s#":
                var s2 = new Audio("sounds/sol.wav");
                s2.play();
                break;

        case "l":
            var l1 = new Audio("sounds/la.wav");
            l1.play();
            break;
            case "l#":
                var l2 = new Audio("sounds/la.wav");
                l2.play();
                break;

        default:
            break;
    }

    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}