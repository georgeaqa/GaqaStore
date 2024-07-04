import { CustomInput, CustomButton, CustomText } from "../../components";
import { View } from "react-native";
import { STYLES } from "../../constants";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../constants";

const RecoverPassword = () => {
  const { control } = useForm();
  return (
    <View style={STYLES.container}>
      <CustomText text="Se le enviara su nueva contraseña por correo electrónico." />
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
      <CustomButton text="Enviar" />
    </View>
  );
};

export default RecoverPassword;
