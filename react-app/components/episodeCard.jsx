
import "bootstrap/dist/css/bootstrap.min.css"

const EpisodeCard = ({ episode, seasonImage }) => {
 

  // Use episode image if available, otherwise use season image
  const displayImage = seasonImage;

  console.log('Display Image:', displayImage);


  return (
    <div className="card w-100 mb-4">
      <div className="card-body">
        <img className="rounded-md h-60 w-60"src={displayImage} id="season-img" />
        <h5 className="  xl:text-4xl font-bold mt-2 mb-3">{episode.title}</h5>
        <p className=" text-gray-600 xl:text-xl font-semibold  mb-5">{episode.description}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
