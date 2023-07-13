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
            document.querySelector("#limb2").style.marginTop = "3px";
            document.querySelector("#limb3").style.transform = "rotate(0deg)";
            document.querySelector("#limb3").style.marginTop = "3px";
            document.querySelector("#lever").style.transform = "rotate(20deg)";
            document.querySelector("#trap-door1").style.transform = "rotate(70deg)";
            document.querySelector("#trap-door2").style.transform = "rotate(-70deg)";
            document.querySelector("#doll").style.marginTop = "5px";
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
        if (document.querySelector("#lever").style.transform === "rotate(-20deg)" || document.querySelector("#lever").style.transform === "") {//open the floor
            if (props.result === "") {
                props.setletters(true)
                props.setoption(true)
                props.setresult("Well...You have to reset the game now.")
            }
            document.querySelector("#lever").style.transform = "rotate(20deg)";
            document.querySelector("#trap-door1").style.transform = "rotate(70deg)";
            document.querySelector("#trap-door2").style.transform = "rotate(-70deg)";
            document.querySelector("#sweatLeverHover").style.display = "none";
            for (let i = 1; i < 6; i++) {
                document.getElementById('limb'+i).style.visibility = "visible";
            }
            document.querySelector("#headDefeat").style.visibility = "visible";
            document.querySelector("#limb2").style.transform = "rotate(0deg)";
            document.querySelector("#limb2").style.marginTop = "3px";
            document.querySelector("#limb3").style.transform = "rotate(0deg)";
            document.querySelector("#limb3").style.marginTop = "3px";
            document.querySelector("#doll").style.marginTop = "5px";
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
                        <div className="eye"/>
                        <div className="eye"/>
                    </div>
                    <div id="mouth"/>
                </div>

                <div id="headDefeat">
                    <div id="eyesDefeat">
                        <div className="eyeDefeat"/>
                        <div className="eyeDefeat"/>
                    </div>
                </div>

                <div id="headVictory">
                    <div id="eyesVictory">
                        <div className="eyeVictory"/>
                        <div className="eyeVictory"/>
                    </div>
                    <div id="smile"/>
                </div>

                <div id="limb1">{/*torso*/}
                    <div id="limb2"/>{/*arm*/}
                    <div id="limb3"/>{/*arm*/}
                    <div id="limb4"/>{/*leg*/}
                    <div id="limb5"/>{/*leg*/}
                </div>
            </div>{/*doll*/}

            <div id="top"/>
            <div id="pilar"/>
            <div id="support"/>
            <div id="floor">
                <div id="trap-door1"/>
                <div id="trap-door2"/>
            </div>

            <button id="lever" onClick={moveLever}/>
            <div id="sweatLeverHover"/>

        </div>
    )
}

export default Drawing