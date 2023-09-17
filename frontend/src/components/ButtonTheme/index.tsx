import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ButtonTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as 'light' | 'dark') || 'light';
  });


  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    {/** remove as classes dark e light do index.html */}
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");


    {/** verifica se o theme é light, se for, adiciona a classe light ao index.html 
      * se nao for, adiciona o modo dark.
    */}
    if(theme === 'light') {
      localStorage.theme = 'light'
      document.documentElement.classList.add('light');
    }else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark');
    }
  },[theme, handleTheme])
  

  return (
    <div className="w-[50px] rounded-xl shadow shadow-zinc/200 h-[25px] relative overflow-hidden dark:bg-zinc-700" onClick={handleTheme}>
      <div className={`absolute rounded-full ${theme === 'light' ? 'left-0' : 'left-[25px]'} w-1/2 top-0 bottom-0 flex items-center px-1 border duration-300 ease-in-out`}>
        {theme === 'light' ? (
          <Sun size={24} color="#cfab0b"/>
          ) : (
            <Moon size={24}/>
        )}
      </div>

    </div>
  );
};