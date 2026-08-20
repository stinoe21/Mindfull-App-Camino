// Mascotte/Input states — figma node 552:1558 (/Foundations/Mascotte-Input-states)
// One mascot per check-in dimension. Distinct family from MascotteVlieger (mood states).
const SRC={
  temperatuur:"assets/mascot/mascot-temperatuur.webp",
  wind:"assets/mascot/mascot-wind.webp",
  wisselvallig:"assets/mascot/mascot-wisselvallig.webp",
  zicht:"assets/mascot/mascot-main.svg",
};
const ALT={temperatuur:"Vlieger bij de temperatuur-vraag",wind:"Vlieger bij de wind-vraag",zicht:"Vlieger bij de zicht-vraag",wisselvallig:"Vlieger bij de wisselvalligheid-vraag"};
export function MascotteInput(_p={}){
  const props={..._p,state:_p.state??"temperatuur"};
  const base=props.assetBase??"";
  return (
    <img className={props.className} src={base+(SRC[props.state]||SRC.temperatuur)} alt={ALT[props.state]||ALT.temperatuur}
      style={{display:"block",height:128,width:"auto",objectFit:"contain",...props.style}}/>
  );
}
export default MascotteInput;
