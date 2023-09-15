import styled from "styled-components";

export const BookWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 10rem;
  border: 0.125rem solid black;
  margin-bottom: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 45%;
`;

export const Title = styled.div`
  margin: auto;
  font-weight: 700;
`;

export const BookDescription = styled.div`
  font-size: 0.875rem;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
`;

export const CloseButton = styled.div`
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  line-height: 0.75rem;
  margin-left: auto;
  cursor: pointer;
  border: 0.25rem solid #ff87a1;
  border-radius: 50%;
`;
