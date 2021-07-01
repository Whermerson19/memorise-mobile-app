  
import React from "react";
import { useTheme } from "styled-components";
import { Control, Controller } from "react-hook-form";

import { TextInputProps } from "react-native";
import { Input } from "../Input";

import { Container } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  icon: string;
}

export function InputForm({ control, name, icon, ...rest }: Props) {

  const theme = useTheme()

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input placeholderTextColor={theme.colors.placeholder_text} icon={icon} onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      ></Controller>
    </Container>
  );
}