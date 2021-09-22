import React, { Component } from "react";
import Joi from "joi-browser";

//Form fields
import Input from "./input.jsx";
import TextArea from './textArea'

class Form extends Component {
    //the state will not fill with data. the data will go to register page state.
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false };//disable the 'lazy' property of joi when it stops after one line is wrong. we assign it to const so the code will be more readable.
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    };

    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary mt-3 me-2">
                {label}
            </button>
        );
    }

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;

        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }


    renderTextArea(name, label, type = 'text') {
        const { data, errors } = this.state;

        return (
            <TextArea
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )

    }
}




export default Form;