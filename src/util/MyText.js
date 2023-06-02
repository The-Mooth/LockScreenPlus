import { Text as DefaultText } from "react-native";

const MyText = ({ style, ...rest }) => {

  return (
    <DefaultText
      style={[
        {
          color: "hsl(0, 0%, 100%)",
          fontSize: 16,
          maxWidth: "99%",
        },
        style,
      ]}
      {...rest}
    />
  );
};

const MyTextBold = ({ style, ...rest }) => {

  return (
    <DefaultText
      style={[
        {
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
          maxWidth: "99%",
        },
        style,
      ]}
      {...rest}
    />
  );
};


export { MyText, MyTextBold};
export default MyText;
