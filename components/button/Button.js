import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { KIND, SIZE, SHAPE } from "./constants";

function getFontStyles(props) {
  const { size } = props;

  switch (size) {
    default:
    case SIZE.default:
      return props.theme.typography.font450;
    case SIZE.compact:
      return props.theme.typography.font350;
    case SIZE.large:
      return props.theme.typography.font550;
  }
}

function getKindStyles(props) {
  const { kind, isSelected } = props;

  switch (kind) {
    default:
    case KIND.primary:
      if (isSelected) {
        return css`
          background-color: ${props.theme.colors.buttonPrimarySelectedFill};
          color: ${props.theme.colors.buttonPrimarySelectedText};
        `;
      }
      return css`
        background-color: ${props.theme.colors.buttonPrimaryFill};
        color: ${props.theme.colors.buttonPrimaryText};
      `;
    case KIND.secondary:
      if (isSelected) {
        return css`
          background-color: ${props.theme.colors.buttonSecondarySelectedFill};
          color: ${props.theme.colors.buttonSecondarySelectedText};
        `;
      }
      return css`
        background-color: ${props.theme.colors.buttonSecondaryFill};
        color: ${props.theme.colors.buttonSecondaryText};
      `;
  }
}

function getShapeStyles(props) {
  const { shape } = props;

  switch (shape) {
    case SHAPE.pill:
      return css`
        border-radius: 16px;
      `;
    case SHAPE.default:
    default:
      return css`
        border-radius: 0;
      `;
  }
}

const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0.5rem 1rem;
  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.buttonDisabledFill};
    color: ${(props) => props.theme.colors.buttonDisabledText};
  }
  ${getFontStyles};
  ${getKindStyles};
  ${getShapeStyles};
`;

function Button(props) {
  const { isLoading, onClick, children } = props;

  function internalOnClick() {
    if (!isLoading) {
      onClick();
    }
  }

  return (
    <StyledButton {...props} onClick={internalOnClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  kind: PropTypes.oneOf([KIND.primary, KIND.secondary]),
  size: PropTypes.oneOf([SIZE.default, SIZE.compact, SIZE.large]),
  shape: PropTypes.oneOf([SHAPE.default, SHAPE.pill]),
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  kind: KIND.primary,
  size: SIZE.default,
  shape: SHAPE.default,
  disabled: false,
  isSelected: false,
  onClick: () => {},
};

export default Button;
