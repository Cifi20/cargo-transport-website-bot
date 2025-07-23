import { ReactNode } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormFieldProps {
  id: string;
  label: string;
  icon?: string;
  type?: "text" | "tel" | "datetime-local" | "number" | "select";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  focusedField?: string | null;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  className?: string;
  iconColor?: string;
  children?: ReactNode;
}

const FormField = ({
  id,
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  focusedField,
  required = false,
  options,
  className = "",
  iconColor,
  children
}: FormFieldProps) => {
  const isFocused = focusedField === id;
  const borderColor = iconColor ? `${iconColor.replace('text-', 'border-')}/50` : 'border-primary/50';
  const focusBorderColor = iconColor ? iconColor.replace('text-', 'border-') : 'border-primary';

  return (
    <div className={`group animate-fadeInUp ${className}`}>
      <Label 
        htmlFor={id} 
        className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300"
      >
        {icon && (
          <Icon 
            name={icon} 
            size={16} 
            className={`inline mr-2 ${iconColor || ''}`} 
          />
        )}
        {label} {required && '*'}
      </Label>
      
      <div className="relative">
        {type === "select" ? (
          <Select onValueChange={onChange} value={value}>
            <SelectTrigger className={`hover:${borderColor} transition-colors duration-300`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
              {children}
            </SelectContent>
          </Select>
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`transition-all duration-500 ${
              isFocused 
                ? `${focusBorderColor} shadow-lg shadow-primary/20 scale-105` 
                : `hover:${borderColor}`
            }`}
            required={required}
          />
        )}
        
        {isFocused && (
          <div className={`absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-100 transition-opacity duration-500 -z-10 blur`}></div>
        )}
      </div>
    </div>
  );
};

export default FormField;