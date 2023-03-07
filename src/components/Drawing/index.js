import './drawing.css'
import './eyes'
import {useEffect} from 'react'

const Drawing = (props) => {

    useEffect(() => {
        if (props.mistakes > 0 && props.mistakes < 6) {
            document.getElementById('limb'+props.mistakes).style.visibility = "visible"
        }
        if (props.mistakes >= 6) {
            props.setresult("defeat");
            props.setletters(true)
            document.querySelector("#headDefeat").style.visibility = "visible";
            document.querySelector("#limb2").style.transform = "rotate(0deg)";
            document.querySelector("#limb3").style.transform = "rotate(0deg)";
            document.querySelector("#lever").style.transform = "rotate(20deg)";
            document.querySelector("#trap-door1").style.transform = "rotate(70deg)";
            document.querySelector("#trap-door2").style.transform = "rotate(-70deg)";
            document.querySelector("#sweatLeverHover").style.display = "none";
        }
        else if (!(props.cue.includes('_')) && props.cue !== '') {
            props.setresult("victory");
            props.setletters(true)
            document.querySelector("#lever").disabled = true;
            document.querySelector("#sweatLeverHover").style.display = "none";

            document.querySelectorAll(".firework").forEach(e => e.style.display = "block");

            //make the doll celebrate
            for (let i = 1; i < 6; i++) {
                document.getElementById('limb'+i).style.visibility = "visible";
            }
            document.querySelector("#headVictory").style.visibility = "visible";
            document.querySelector("#limb2").classList.add("arm1");
            document.querySelector("#limb3").classList.add("arm2");
        }
    });

    function moveLever() {
        if (document.querySelector("#lever").style.transform === "") { //on first click
            document.querySelector("#lever").style.transform = "rotate(20deg)";
            document.querySelector("#trap-door1").style.transform = "rotate(70deg)";
            document.querySelector("#trap-door2").style.transform = "rotate(-70deg)";
            document.querySelector("#sweatLeverHover").style.display = "none";
            props.setoption(true);
            props.setresult("Well...You have to reset the game now.")
            document.querySelectorAll(".letter").forEach(e => e.disabled = true);
            for (let i = 1; i < 6; i++) {
                document.getElementById('limb'+i).style.visibility = "visible";
            }
            document.querySelector("#headDefeat").style.visibility = "visible";
            document.querySelector("#limb2").style.transform = "rotate(0deg)";
            document.querySelector("#limb3").style.transform = "rotate(0deg)";
        } else if (document.querySelector("#lever").style.transform === "rotate(-20deg)") { //open the floor
            document.querySelector("#lever").style.transform = "rotate(20deg)";
            document.querySelector("#trap-door1").style.transform = "rotate(70deg)";
            document.querySelector("#trap-door2").style.transform = "rotate(-70deg)";
        } else { //close the floor
            document.querySelector("#lever").style.transform = "rotate(-20deg)";
            document.querySelector("#trap-door1").style.transform = "rotate(0deg)";
            document.querySelector("#trap-door2").style.transform = "rotate(0deg)";
        }
    }

    return(
        <div id="drawing">
            <div id="doll">
                <div id="head">
                    <div id="eyes">
                        <div className="eye"></div>
                        <div className="eye"></div>
                    </div>
                    <div id="mouth"></div>
                </div>

                <div id="headDefeat">
                    <div id="eyesDefeat">
                        <div className="eyeDefeat"></div>
                        <div className="eyeDefeat"></div>
                    </div>
                </div>

                <div id="headVictory">
                    <div id="eyesVictory">
                        <div className="eyeVictory"></div>
                        <div className="eyeVictory"></div>
                    </div>
                    <div id="smile"></div>
                </div>

                <div id="limb1">{/*torso*/}
                    <div id="limb2"></div>{/*arm*/}
                    <div id="limb3"></div>{/*arm*/}
                    <div id="limb4"></div>{/*leg*/}
                    <div id="limb5"></div>{/*leg*/}
                </div>
            </div>{/*doll*/}

            <div id="top"></div>
            <div id="pilar"></div>
            <div id="support"></div>
            <div id="floor">
                <div id="trap-door1"></div>
                <div id="trap-door2"></div>
            </div>

            <button id="lever" onClick={moveLever}></button>
            <div id="sweatLeverHover"></div>

        </div>
    )
}

export default Drawing