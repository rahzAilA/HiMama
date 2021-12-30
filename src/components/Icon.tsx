import MaterialIcon from "react-native-vector-icons/MaterialIcons";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export function Icon({ name, color, size = 24 }: IconProps) {
  return <MaterialIcon name={name} color={color} size={size} />;
}
