import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #dbd7d7;
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: auto;
  border: 0.125rem solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  height: 100vh;
`;

export const OutletWrapper = styled.div`
  margin: 1rem;
  width: 70%;
`;

export const NavWrapper = styled.div`
  flex-basis: 15rem;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  border-radius: 0.25rem;
  border: 0.125rem solid black;
  margin-right: auto;
  overflow: scroll;
`;

// width: 5rem;
export const NavItem = styled.div`
  flex-basis: 10rem;
  flex-shrink: 0;
  font-size: 1.5rem;
  a {
    font-weight: 900;
  }
`;

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-basis: 20rem;
  align-self: flex-start;
  margin: 0 2rem;
  border: 0.125rem solid black;
  border-radius: 0.25rem;
`;

export const BookRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FavoriteItem = styled.div`
  margin: 1rem;
`;

export const FavoriteRemove = styled.span`
  cursor: pointer;
`;
