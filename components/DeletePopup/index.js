import styled from "styled-components";

export default function DeletePopup({ message, onConfirm, onCancel }) {
  return (
    <StyledPopupContainer>
      <StyledPopupContent>
        <StyledCallText>Are you sure you want to <StyledSpan>delete</StyledSpan> this Preference?</StyledCallText>
        <StyledButtonContainer>
          <StyledButton onClick={onConfirm}>Okay</StyledButton>
          <StyledButton onClick={onCancel}>Cancel</StyledButton>
        </StyledButtonContainer>
      </StyledPopupContent>
    </StyledPopupContainer>
  );
}

const StyledPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.popUpBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPopupContent = styled.div`
  background: ${({ theme }) => theme.popUpField};
  padding: 20px;
  margin: 0 1rem;
  border-radius: 8px;
  text-align: center;
`;

const StyledCallText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.white};
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.formText};
  background-color: ${({ theme }) => theme.popUpFieldButton};
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  font-weight: 600;
  cursor: pointer;
  width: 9rem;
`;
