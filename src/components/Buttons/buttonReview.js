import React from "react";
import PropTypes from 'prop-types';
import { ButtonFeedback } from "./button.styled";
import { BtnOption } from "./button.styled";

export const FeedbackOptions = ({ onLeaveReview, options }) => (
    <BtnOption>
        {options.map((option, index) => (
            <ButtonFeedback type="button" onClick={() => onLeaveReview(option)} key={index}>
                {option}
            </ButtonFeedback>
        ))}
    </BtnOption>
);

FeedbackOptions.propTypes = {
    onLeaveReview: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};