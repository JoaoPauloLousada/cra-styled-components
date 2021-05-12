import styled from 'styled-components';

export default function Navbar(props) {
  return (
    <StyledNavbar variant={props.variant || 'primary'}>
      NAVBAR
    </StyledNavbar>
  )
}

const StyledNavbar = styled.section`
  width: 100%;
  height: 3rem;
  color: white;
  line-height:3rem;

  background-color: ${props => props.theme.colors[props.variant]}
`;