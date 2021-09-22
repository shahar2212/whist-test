import React from "react";

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group mt-3">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control" />
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};

export default Input;