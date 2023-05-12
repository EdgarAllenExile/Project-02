
import React, { useState, useEffect} from "react";
import { fabric } from "fabric";

const App = () => {
  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'white',
      boxShadow: '8px 4px 13px #F4AAB9',
    })
  )

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'purple'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  return (
    <div>
      <h1>Test</h1>
      <div className="toolbar">
        <button className="add_rect" onClick={() => addRect(canvas)}></button>
      </div>
      <br></br>
      <canvas id='canvas'></canvas>
    </div>
  )
  
};

export default App;
