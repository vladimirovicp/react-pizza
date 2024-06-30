import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement>{
    isValid?: boolean
}