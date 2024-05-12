export interface ICustomInputProps {
  label: string;
  textArea?: boolean;
  placeholder: string;
  type?: string;
  handlekeypress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
