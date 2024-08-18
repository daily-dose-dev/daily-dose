import { component$, useSignal } from "@builder.io/qwik";
import { useTheme } from "qwik-themes";
import { GoMoon24, GoSun24 } from "@qwikest/icons/octicons";

export const ThemeToggleButton = component$(() => {
  const themeProvider = useTheme();

  const currentTheme = useSignal(themeProvider.theme);

  return (
    <button onClick$={() => {
      if (currentTheme.value === "light") {
        themeProvider.setTheme("dark");
        currentTheme.value = "dark";
      } else {
        themeProvider.setTheme("light");
        currentTheme.value = "light";
      }
    }}>
      {currentTheme.value === "light" ? <GoMoon24 /> : <GoSun24 />}
    </button>
  );
});
