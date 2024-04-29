interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
const customButton = ({ className, children, ...rest }: CustomButtonProps) => {
  const defaultClass = `px-12 py-4 rounded-3xl bg-white text-black`;
  const customClass = `${className ? className : defaultClass}`;
  return (
    <button className={customClass} {...rest}>
      {children}
    </button>
  );
};

export default customButton;
