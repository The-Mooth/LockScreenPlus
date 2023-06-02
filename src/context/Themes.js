import { createContext, useState} from "react";
//import Colors from "../constants/colors";

//manages light and dark themes

const Themes = ["light", "dark"];

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  //colors: Colors["light"],
  font: "sans",
  loading: true,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [greeting, setGreeting] = useState("sans");
  
 
  //const colors = Colors[theme];

 
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, greeting, setGreeting }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, Themes };
