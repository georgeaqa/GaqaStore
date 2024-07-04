import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { THEME } from "../constants";
import Customtext from "./CustomText";
import moment from "moment";
import CustomIcon, { Icons } from "./CustomIcon";
import "moment/locale/es";
import "moment-timezone";

const formatDate = (dateString) => {
  const userTimeZone = moment.tz.guess();
  const formattedDate = moment
    .tz(dateString, userTimeZone)
    .locale("es")
    .format("DD MMMM YYYY, HH:mm");
  return formattedDate;
};

const CustomOrders = ({ item, onPress }) => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={onPress} style={styles.buttonCard}>
        <View>
          <Customtext text={"Pedido: " + item.id} />
          <Customtext
            text={"Fecha de compra: " + formatDate(item.created_at)}
          />
          <Customtext text={"Total: " + item.order_total + " $"} />
        </View>
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          color={theme.colors.primary}
          style={{ marginLeft: "auto" }}
        />
      </TouchableOpacity>
    </Card>
  );
};

export default CustomOrders;

const styles = StyleSheet.create({
  card: {
    margin: 4,
    padding: 4,
    backgroundColor: THEME.colors.background,
  },
  buttonCard: {
    flexDirection: "row",
    alignItems: "center",
  },
});
