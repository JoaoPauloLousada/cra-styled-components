import styled from 'styled-components';

export default function Button({children, variant = 'primary', ...props}) {
  return (
    <Btn variant={variant} {...props}>
      {children}
    </Btn>
  )
}

const Btn = styled.button`
  border: none;
  min-width: 124px;
  min-height: 48px;
  font-size: 1.3rem;
  color: white;

  border-radius: ${props => props.rounded ? '8px' : 0};

  background-color: ${props => props.theme.colors[props.variant]}
`;

