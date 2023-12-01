import styled from "@emotion/styled";

const ContinueButton = styled.button`
    width: 100%;
    height: 44px;
    border-radius: 4px;
    border: 1px solid black;
    background-color: #fff;
    color: #000;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 16px;

    &:hover {
        background-color: #80808018;
        transition: 0.4s;
    }
`;


export default ContinueButton;