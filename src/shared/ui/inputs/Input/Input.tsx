
import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import {
  IInputProps,
  StyledErrorText,
  StyledInput,
  StyledLayout,
  StyledPlaceholder,
  StyledWrap,
} from '.';

import { TEXT_INPUT } from './Input.constants';

export const Input: FC<IInputProps> = ({
  value,
  error,
  placeholder,
  className,
  disabled = false,
  onChange,
  type = TEXT_INPUT,
  fullWidth = false,
  name,
}) => {
  //TODO: нажатие на esc для отключение фокуса на input
  const [filled, setFilled] = useState(false);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    onChange(e);
    if (input.value.length !== 0) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    if (e.key === 'Enter' || e.key === 'Escape') {
      input.blur();
    }
  };

  return (
    <StyledWrap fullwidth={!fullWidth} className={className}>
      <StyledLayout>
        <StyledInput
          name={name}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleOnChange(e);
          }}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            handleKeyDown(e);
          }}
          disabled={disabled}
          type={type}
          error={error}
        />
        <StyledPlaceholder filled={filled}>{placeholder}</StyledPlaceholder>
      </StyledLayout>
      <StyledErrorText>{error}</StyledErrorText>
    </StyledWrap>
  );
};
