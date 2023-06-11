import { useState } from "react";
import memeData from "../memeData";

const MemeSection = () => {
  // const [memeImage, setMemeImg] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/261o3j.jpg",
  });

  const [allmemeImges, setallmemeImges] = useState(memeData);

  function getMemesImages(e) {
    const memes = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomNumber].url;

    setMeme((preMeme) => ({
      ...preMeme,
      randomImage: imgUrl,
    }));
  }

  return (
    <div className="container mt-5 w-50">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="Top" />
          </div>
          <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="Bootom" />
          </div>
        </div>
        <button
          className="btn meme-btn w-100 text-white mt-3"
          onClick={getMemesImages}
          type="button"
        >
          Get a new images
        </button>
      </form>
      <div className="img-container">
        <img src={meme.randomImage} className="img-fluid w-100 h-100" />
      </div>
    </div>
  );
};

export default MemeSection;
