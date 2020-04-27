import React, { useState } from "react";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";
import api from "../api";
import header from "../images/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";
import md5 from "md5";
const BadgeNew = (props) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setForm({
          ...form,
          [e.target.name]: e.target.value,
          avatarUrl: `https://www.gravatar.com/avatar/${md5(
            e.target.value
          )}?d=identicon&s=200`,
        });
        break;
      default:
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.badges.create(form);
      setIsLoading(false);
      props.history.push("/badges");
    } catch (e) {
      console.log(e);
      setIsLoading({ loading: false });
      setError(e.message);
    }
  };
  return (
    <>
      <div className='BadgeNew__hero'>
        <img
          className='img-fluid BadgeNew__hero-image'
          src={header}
          alt='logo'
        />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Badge
              firstName={form.firstName || "First Name"}
              lastName={form.lastName || "Last Name"}
              avatarUrl='https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-9/40595689_2281872391828836_7259640868032741376_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeEIa6y4SJLctMF2AwFeIIZEoRmKeM-S48ehGYp4z5LjxxOd6E1yZsneDuUKcQoI1tIFxPDtHNLF8no5hWZSTCaj&_nc_ohc=rnZLmu8ygrAAX_35x6u&_nc_ht=scontent.flim18-2.fna&oh=4736d7cfb3843bcfe75dccd1d69f595f&oe=5EC9AEBD'
              jobTitle={form.jobTitle || "jobtitle"}
              twitter={form.twitter}
              email={form.email}
            />
          </div>
          <div className='col-6'>
            <h1>New Attendant</h1>
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={form}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
