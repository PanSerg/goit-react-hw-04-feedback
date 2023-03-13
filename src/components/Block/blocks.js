import React from "react";
import PropTypes from 'prop-types';
import { Block } from "./blocks.styled";

export const Section = ({ title, children }) => {
    return (
        <Block>
            <section>{title}</section>
            {children}
        </Block>
    );
};

Section.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};
