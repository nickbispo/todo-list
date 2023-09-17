import { Header } from "../../components/Header"

interface Props {
  children: React.JSX.Element
};

export const PrivateLayout = ({ children }: Props) => {
  return(
    <div className="min-h-screen bg-white dark:bg-zinc-800 dark:text-zinc-200">
      <Header />
      <div>
        { children }
      </div>
    </div>
  );
};