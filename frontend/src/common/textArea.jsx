import React from 'react';

const TextArea = ({ name, label, error, ...rest }) => {

    return (
        <div className="form-group mt-4">
            <label htmlFor={name}>{label}</label>
            <textarea {...rest} name={name} id={name} className="form-control" rows="3"></textarea>
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
}

export default TextArea;