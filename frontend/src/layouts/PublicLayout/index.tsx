interface Props {
  children: React.JSX.Element
};

export const PublicLayout = ({children}: Props) => {
  return(
    <div>
      {children}
    </div>
  );
};