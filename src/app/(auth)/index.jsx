import { View, Image } from "react-native";
import { CustomInput, CustomButton } from "../../components";
import { STYLES, EMAIL_REGEX } from "../../constants";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { sign_in_with_password } from "../../lib/authSupabase";
import React from "react";

const Index = () => {
  const { control, handleSubmit } = useForm();

  const handleSignInWithPassword = (data) => {
    sign_in_with_password({ email: data.email, password: data.password });
  };

  return (
    <View style={STYLES.container}>
      <Image
        resizeMode="contain"
        source={require("../../assets/images/gaqa-high-resolution-logo-transparent.png")}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: 300,
          maxWidth: 300,
        }}
      />

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
        rules={{ required: "El campo es obligatorio" }}
      />

      <CustomButton
        text="Conectarse"
        onPress={handleSubmit(handleSignInWithPassword)}
      />
      <CustomButton
        text="Registrarse"
        onPress={() => router.push("register")}
      />

      <CustomButton
        mode="text"
        text="¿Olvidaste tu contraseña?"
        onPress={() => router.push("recoverPassword")}
      />
    </View>
  );
};

export default Index;
