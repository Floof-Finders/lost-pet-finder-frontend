import charlie from '../img/cFadness.jpg';

export default function ImageArea(props) {

  return (
    <div className="image-container">
      <ImageArea className="frontPic">
        <img className="card-image" src={charlie} alt="charlie profile" />
        <h1 className="title">Charlie Fadness</h1>
        <h2 className="position">Software Dev</h2>
      </ImageArea>
    </div>
  );
}
