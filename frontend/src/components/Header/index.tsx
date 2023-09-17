import { ButtonTheme } from "../ButtonTheme";

export const Header = () => {
  return (
    <header className="shadow-md shadow-zinc-300 dark:shadow-zinc-700 flex justify-between p-2">
      <h1>Todo List</h1>

      <div className="flex items-center gap-2">
        <ButtonTheme />
        <span>Jhon Doe</span>
      </div>
    </header>
  );
};
