import { HelperText, TextInput, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, rules = {}, ...restProps }) => {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error, invalid },
      }) => (
        <>
          <TextInput
            style={styles.input}
            mode="outlined"
            activeOutlineColor={theme.colors.black}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={invalid}
            {...restProps}
          />
          {error && (
            <HelperText type="error" style={{ color: theme.colors.primary }}>
              {error.message}
            </HelperText>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
});
