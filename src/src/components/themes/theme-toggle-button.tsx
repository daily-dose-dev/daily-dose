import { component$ } from "@builder.io/qwik";
import { useTheme } from './base/provider';
import { GoMoon24, GoSun24 } from "@qwikest/icons/octicons";

export const ThemeToggleButton = component$(() => {
  const themeProvider = useTheme();

  return (
    <button onClick$={() => {
      if (themeProvider.theme == "light") {
        themeProvider.setTheme("dark");
      } else {
        themeProvider.setTheme("light");
      }
    }}>
      {themeProvider.theme == "light" ? <GoMoon24 /> : <GoSun24 />}
    </button>
  );
});
