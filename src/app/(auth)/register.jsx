import { View, ScrollView } from "react-native";
import { CustomInput, CustomButton } from "../../components";
import { STYLES, EMAIL_REGEX } from "../../constants";
import { sign_up_with_password } from "../../lib/authSupabase";
import { useForm } from "react-hook-form";
import React from "react";

const Register = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const handleSignUpWithPassword = (data) => {
    sign_up_with_password({ email: data.email, password: data.password });
  };

  return (
    <ScrollView
      style={STYLES.scrollContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={STYLES.container}>
        <CustomInput
          name="email"
          control={control}
          label="Correo electrónico"
          rules={{
            required: "El campo es obligatorio",
            pattern: {
              value: EMAIL_REGEX.email_regex,
              message: "El correo electrónico no es válido",
            },
          }}
        />
        <CustomInput
          name={"password"}
          control={control}
          label="Contraseña"
          secureTextEntry={true}
          rules={{
            required: "El campo es obligatorio",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          }}
        />
        <CustomInput
          name={"passwordConfirmation"}
          control={control}
          label="Confirmar contraseña"
          secureTextEntry={true}
          rules={{
            validate: (value) =>
              value === pwd || "las contraseñas no coinciden",
          }}
        />

        <CustomButton
          text="Aceptar"
          onPress={handleSubmit(handleSignUpWithPassword)}
        />
      </View>
    </ScrollView>
  );
};

export default Register;
