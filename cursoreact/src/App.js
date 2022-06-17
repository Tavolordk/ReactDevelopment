
import './App.css';
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {

  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen,setImagen] = useState('');

const exportarMeme=(evento)=>{
  html2canvas(document.querySelector("#meme"), {logging: true, letterRendering: 1, allowTaint: false, useCORS:true}).then(canvas => {
    let img = canvas.toDataURL("image/png");
    let link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  });
}

  const linea1Change=(evento)=>{
      setLinea1(evento.target.value);
  }

  const linea2Change=(evento)=>{
    setLinea2(evento.target.value);
  }

  const imagenChange=(evento)=>{
    let imageDoesntLoad=document.querySelector('.imagen');
    imageDoesntLoad.style.display='flex';
    let newArray=memes.map(e=>{return e.url});

    for(let i=0;i<newArray.length;i++){
      if(Number(evento.target.value)===i){
        setImagen(newArray[i]);
      }
    }
  }

  const errorImageLoad=(evento)=>{
    if(evento.target.textContent===""){
      let imageDoesntLoad=document.querySelector('.imagen');
      imageDoesntLoad.style.display='none';
    }
  }

  let memes=[
    {
    nombre:"Casa en llamas",
    url:"https://i.ibb.co/Rg8Xq3k/casallamas.jpg"
    },
    {
      nombre:"Mucho texto",
      url:"https://i.ibb.co/p335Fyy/muchotexto.png"
    },
    {
      nombre:"Se tenia que decir y se dijo",
      url:"https://i.ibb.co/0Knyjnm/Plantilla-momo-se-tenia-que-decir-y-se-dijo.jpg"
    },
    {
      nombre:"Fuck yeah",
      url:"https://i.ibb.co/t33t15n/fuckyeah.jpg"
    }
]
let select=memes.map((e,i)=>{
 return <option key={i} value={i}>{e.nombre}</option>;     
});

  return (
<div className="container mt-2">
<div className="card justify-content-start">
  <div className="card-header">Selecciona un meme:</div>
  <div className="card-body">
     <select onChange={imagenChange} className="form-select mt-3 mb-4" defaultValue={'DEFAULT'}>
     <option value="DEFAULT" disabled>Elige una opción</option>
      {select}
      </select>
      <input onChange={linea1Change} type="text" className="form-control mt-3 mb-4" placeholder="Linea 1"/>
      <input onChange={linea2Change} type="text" className="form-control mt-3 mb-4" placeholder="Linea 2"/>
      <button onClick={exportarMeme} className="btn btn-primary">Exportar</button>
  </div>
</div>

<div className="card" id="meme">
      <div className="card-body row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-justify shadow">{linea1}</div>
      <img onError={errorImageLoad} className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 imagen" src={imagen} alt="resultado"/>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center shadow">{linea2}</div>
      </div>
</div>

</div>


  );
}

export default App;
