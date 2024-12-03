import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TelaLogin from "./src/screens/TelaLogin";
import TelaCriarUsuario from "./src/screens/TelaCriarUsuario";
import TelaSobre from "./src/screens/TelaSobre";
import TelaConta from "./src/screens/TelaConta";
import TelaPrincipal from "./src/screens/TelaPrincipal";
import TelaInformacoes from "./src/screens/TelaInformacoes";
import Recepcao from "./src/screens/Setores/Recepcao";
import EstoqueRecepcao from "./src/screens/Setores/Recepcao/EstoqueRecepcao";
import PedidosRecepcao from "./src/screens/Setores/Recepcao/PedidosRecepcao";
import Vacina from "./src/screens/Setores/Vacina";
import DuvidasVacinas from "./src/screens/Setores/Vacina/DuvidasVacinas";
import PedidosVacinas from "./src/screens/Setores/Vacina/PedidosVacinas";
import EstoqueVacinas from "./src/screens/Setores/Vacina/EstoqueVacinas";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaLogin"
        screenOptions={{
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#006400" },
        }}
      >
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaCriarUsuario"
          component={TelaCriarUsuario}
          options={{ title: "Cadastro de Usuário" }}
        />

        <Stack.Screen
          name="TelaInformacoes"
          component={TelaInformacoes}
          options={{ title: "Informações da Vaga" }}
        />

        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Recepcao"
          component={Recepcao}
          options={{ title: "Recepção", headerShown: false }}
        />

        <Stack.Screen
          name="EstoqueRecepcao"
          component={EstoqueRecepcao}
          options={{ title: "Estoque", headerShown: false }}
        />

        <Stack.Screen
          name="PedidosRecepcao"
          component={PedidosRecepcao}
          options={{ title: "Pedidos" }}
        />

        <Stack.Screen
          name="Vacina" 
          component={Vacina}
          options={{ title: "Vacinas", headerShown: false }}
        />


       <Stack.Screen
          name="DuvidasVacinas"
          component={DuvidasVacinas}
          options={{ title: "Dúvidas" }}
        />

        <Stack.Screen
          name="PedidosVacinas"
          component={PedidosVacinas}
          options={{ title: "Pedidos de Vacinas" }}
        />

        <Stack.Screen
          name="EstoqueVacinas"
          component={EstoqueVacinas}
          options={{ title: "Estoque de Vacinas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff", // Cor de ícones ativos
        tabBarInactiveTintColor: "#fff", // Cor de ícones inativos
        tabBarActiveBackgroundColor: "#005566",
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: "#006400" },
        headerShown: true,
        headerTintColor: "#FFF",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#006400" },
      }}
    >
      <Tab.Screen
        name="TelaPrincipal"
        component={TelaPrincipal}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-text"
              color={color}
              size={32}
            />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Conta"
        component={TelaConta}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={32} />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={TelaSobre}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={32}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
