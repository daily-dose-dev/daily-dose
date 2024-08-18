import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ThemeToggleButton } from "~/components/themes/theme-toggle-button";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <ThemeToggleButton />
    </>
  );
});

export const head: DocumentHead = {
  title: "Daily Dose",
  meta: [
    {
      name: "A daily dose of programming news.",
      content: "A daily dose of programming news.",
    }
  ]
};
