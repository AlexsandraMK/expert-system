import { ReactNode } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;

  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  margin: auto;

  width: 800px;
  max-height: fit-content;
  background-color: white;

  border: 3px solid;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 40px 0 rgba(0, 0, 0, 0.15);

  z-index: 100;

  .header {
    position: relative;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding: 15px;
    overflow: hidden;
    border-bottom: 1px solid;
  }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 25px auto;
  }

  .footer {
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
  }
`;

export const StyledBackDrop = styled.div`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: #000;
`;

export const DialogModal = (props: {
  children: ReactNode;
  onCloseClick: () => any;
}) => {
  return (
    <>
      <StyledBackDrop onClick={props.onCloseClick}></StyledBackDrop>
      <StyledModal>{props.children}</StyledModal>
    </>
  );
};

const DialogModalHeader: React.FC<{ children: string }> = (props: {
  children: string;
}) => {
  return <div className="header">{props.children}</div>;
};

const DialogModalBody: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="body">{children}</div>;
};

const DialogModalFooter: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="footer">{children}</div>;
};

DialogModal.Header = DialogModalHeader;
DialogModal.Body = DialogModalBody;
DialogModal.Footer = DialogModalFooter;
