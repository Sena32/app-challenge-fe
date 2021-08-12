import styled from 'styled-components';

export const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  min-width: 16rem;
  background: #fff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  transition: 0.5s cubic-bezier(0.23, 0.99, 0.46, 1.06);
  position: relative;
`;
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.7rem;
  width: 100%;

  img {
    height: auto;
    max-width: 100%;
  }
`;
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 1rem;
  height: 100vh;
`;
export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  min-width: 16rem;
  background: #fff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  transition: 0.5s cubic-bezier(0.23, 0.99, 0.46, 1.06);
  position: relative;
`;
export const BtnCollapse = styled.button`
  border-radius: 50%;
  color: #fff;
  padding: 0.2rem;
  background: map-get($colors, secondary);

  display: flex;
  justify-content: center;

  position: absolute;
  top: 14px;
  left: 95%;
  cursor: pointer;
  transition: 0.5s ease;
`;
export const Link = styled.div``;
export const LinkIcon = styled.div``;
export const LinkBtn = styled.div``;