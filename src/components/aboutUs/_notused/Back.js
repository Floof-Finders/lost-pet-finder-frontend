import ImageArea from './ImageArea.js';
import haruKrissy from '../img/haruKrissy.jpg';

export default function Back(props) {
  return (
    <div className="back">
      <ImageArea className="backPic">
        <h1 className="title">Haru and Krissy</h1>
        <img className="card-Petimage" src={haruKrissy} alt="charlie profile" />
      </ImageArea>
      <p></p>
    </div>
  );
}
