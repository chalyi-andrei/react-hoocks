import styled from "styled-components";

export const Body = styled.div`
  padding: 45px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  border: 1px solid #444;
  padding: 45px;
`;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 25px;
  border-radius: 25px;
`;

export const Row = styled.div`
  display: flex;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  padding: 20px 0;
  border: 1px solid #333;
  padding-left: 15px;
`;

export const User = styled.div`
  padding: 10px 10px;
  max-width: 200px;
  font-size: 16px;
  color: #212121;
  line-height: 26px;
  margin-bottom 25px;
`;

export const Btn = styled.button`
  border: 1px;
  padding: 10px 15px;
  background-color: #12c5fb;
  max-width: 200px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  outline: none;

  :active {
    background-color: #12a5fb;
  }
`;
