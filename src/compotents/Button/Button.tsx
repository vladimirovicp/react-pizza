import { Children } from 'react';
import './Button.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';


// export const ButtonAlt: FC<ButtonProps> = ({ className, children, ...props}) => {
//     return (
//         <button className={cn('button accent')} {...props}>{children}</button>
//     );
// };

function Button({children, className, ...props}: ButtonProps){
    return (
        <button className={cn('button accent')} {...props}>{children}</button>
    );
}

export default Button;