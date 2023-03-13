import React from "react";
import PropTypes from 'prop-types';
import { Note } from "./Note.styled";

export const Notification = ({ message }) => {
    return <Note>{message}</Note>;
};

Notification.propType = {
    message: PropTypes.string.isRequired
};