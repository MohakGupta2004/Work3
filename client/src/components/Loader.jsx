import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="loader" />
        <div className="loader2" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 100px;
    height: 100px;
    border: solid 4px rgba(231, 231, 231, 0);
    border-top: solid 5px rgb(241, 68, 68);
    border-radius: 50%;
    transition: all 0.5s;
    animation: rotation_51512 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  @keyframes rotation_51512 {
    70% {
      box-shadow: 0px 0px 10px 50px rgba(241, 57, 57, 0.526);
    }

    90% {
      box-shadow: 0px 0px 10px 50px rgba(241, 57, 57, 0.04);
    }

    100% {
      opacity: 0.5;
      transform: rotate(360deg);
    }
  }`;

export default Loader;
