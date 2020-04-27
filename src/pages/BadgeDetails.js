import React from "react";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
// function useIncreaseCount(max) {
//   const [count, setCount] = React.useState(0);

//   if (count > max) {
//     setCount(0);
//   }

//   return [count, setCount];
// }

const BadgeDetails = ({
  data: { data },
  modalIsOpen,
  onCloseModal,
  onDeleteBadge,
  onOpenModal,
}) => {
  //const [count, setCount] = useIncreaseCount(4);
  return (
    <>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='Logo de la conferencia' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {data.firstName} {data.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              twitter={data.twitter}
              jobTitle={data.jobTitle}
            />
          </div>
          <div className='col'>
            <h2>Actions</h2>
            <div>
              <div>
                {/* <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className='btn btn-primary mr-4'
                >
                  Increase Count: {count}
                </button> */}
                <Link
                  className='btn btn-primary mb-4'
                  to={`/badges/${data.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={onOpenModal} className='btn btn-danger'>
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={modalIsOpen}
                  onClose={onCloseModal}
                  onDeleteBadge={onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default BadgeDetails;
