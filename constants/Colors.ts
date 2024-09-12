/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const GlobalColors = {
  border: "hsl(214.3, 31.8%, 91.4%)",
  input: "hsl(214.3, 31.8%, 91.4%)",
  ring: "hsl(222.2, 84%, 4.9%)",
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(0, 0%, 10%)",
  primary: {
    default: "hsl(63, 42%, 35%)",
    foreground: "hsl(30, 100%, 98%)",
  },
  secondary: {
    default: "hsl(30, 100%, 98%)",
    foreground: "hsl(43, 76%, 52%)",
  },
  destructive: {
    default: "hsl(0, 84.2%, 60.2%)",
    foreground: "hsl(210, 40%, 98%)",
  },
  muted: {
    default: "hsl(0, 0%, 67%)",
    foreground: "hsl(215.4, 16.3%, 46.9%)",
  },
  accent: {
    default: "hsl(210, 40%, 96.1%)",
    foreground: "hsl(222.2, 47.4%, 11.2%)",
  },
  popover: {
    default: "hsl(0, 0%, 100%)",
    foreground: "hsl(222.2, 84%, 4.9%)",
  },
  card: {
    default: "hsl(0, 0%, 100%)",
    foreground: "hsl(222.2, 84%, 4.9%)",
  },
};
