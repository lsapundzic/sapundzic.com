const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">TITLE</h2>
        <p>MESSAGE</p>
        <div className="card-actions justify-end">
          <div>INTERACTION</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
