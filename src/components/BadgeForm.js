import React from "react";

const BadgeForm = ({ onChange, onSubmit, formValues, error }) => {
  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>First Name</label>
          <input
            onChange={onChange}
            className='form-control'
            type='text'
            name='firstName'
            value={formValues.firstName}
          />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input
            onChange={onChange}
            className='form-control'
            type='text'
            name='lastName'
            value={formValues.lastName}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            onChange={onChange}
            className='form-control'
            type='email'
            name='email'
            value={formValues.email}
          />
        </div>
        <div className='form-group'>
          <label>Job Title</label>
          <input
            onChange={onChange}
            className='form-control'
            type='text'
            name='jobTitle'
            value={formValues.jobTitle}
          />
        </div>
        <div className='form-group'>
          <label>Twitter</label>
          <input
            onChange={onChange}
            className='form-control'
            type='text'
            name='twitter'
            value={formValues.twitter}
          />
        </div>
        <button className='btn btn-primary'>Save</button>
        {error && <p className='text-danger'>{error}</p>}
      </form>
    </div>
  );
};

export default BadgeForm;
