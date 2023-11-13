import { Tabs } from "expo-router/tabs";
import { Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "home":
              iconName = "home-outline";
              break;
            case "layanan":
              iconName = "construct-outline";
              break;
            case "promax":
              iconName = "business-outline";
              break;
            case "tukang":
              iconName = "people-circle-outline";
              break;
            case "mandor":
              iconName = "person-circle-outline";
              break;
            case "contact":
              iconName = "call-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text mb="$2" color={focused ? "$black" : color} fontSize="$sm">
              {children}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home", ...noHead }} />
      <Tabs.Screen name="layanan" options={{ title: "Layanan", ...noHead }} />
      <Tabs.Screen name="promax" options={{ title: "Promax", ...noHead }} />
      <Tabs.Screen name="tukang" options={{ title: "Tukang", ...noHead }} />
      <Tabs.Screen name="mandor" options={{ title: "Mandor", ...noHead }} />
      <Tabs.Screen name="contact" options={{ title: "Contact", ...noHead }} />
    </Tabs>
  );
};

export default TabsLayout;