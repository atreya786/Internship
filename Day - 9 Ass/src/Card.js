import React from "react";

const Card = ({ data, onEdit, onDelete }) => {
  const handleEdit = (data) => {
    onEdit(data);
  };

  const handleDelete = () => {
    onDelete(data);
  };
  return (
    <>
      <div className="mainBody">
        {/* {console.log(data.name)} */}
        <div className="card pop-up">
          <img src={data.image} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h3 className="card-title">{data.name}</h3>
            <h5 className="card-title">
              Main Protagonist : {data.main_protagonist}
            </h5>
            <h5 className="card-title">
              Production House : {data.production_house}
            </h5>
            <h5 className="card-title">Rating : {data.rating}</h5>
            <h5 className="card-title">Episodes : {data.episodes}</h5>
            <h6 className="card-title">
              Description : {data.short_description}
            </h6>
            <button className="btn btn-success btn-sm me-2">Watch</button>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
