import styled from "@emotion/styled";

export const ButtonFeedback = styled.button`
    border: 1px solid;
    margin-left: 10px;
    font-size: 20px;
    background-color: #DAD7D7;
    text-transform: capitalize;
    margin-top: 20px;
    border-radius: 5px;

    :active {
        vertical-align: middle;
        background-color: #497BF7;
    }
`;

export const BtnOption = styled.div`
    display: flex;
    justify-content: center;
`;