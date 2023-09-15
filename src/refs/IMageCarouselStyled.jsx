import styled from "styled-components";

export const Li = styled.li`
  display: inline;
  padding: 0.5rem;
`;

export const Ul = styled.ul`
  padding-inline-start: 20px;
  list-style: none;
  white-space: nowrap;

  ${Li} {
    list-style: none;
    white-space: nowrap;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  overflow: hidden;
`;
