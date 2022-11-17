import React, { ReactNode } from 'react';
import { Container } from './styles';

interface FormContainerProps {
  margin?: string,
  padding?: string,
  justifyContent?: string,
  position?: string,
  children: ReactNode
};

const  FormContainer : React.FC<FormContainerProps> = ({ 
  children, 
  margin, 
  padding, 
  justifyContent,
  position
}) => {
  return (
    <Container 
      data-testid="form-container"  
      margin={margin} 
      padding={padding} 
      justifyContent={justifyContent}
    >
      {children}
    </Container>
  );
};

export default FormContainer;