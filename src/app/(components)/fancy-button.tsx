import classNames from "classnames";
import { GoDotFill } from "react-icons/go"

type Props = {
    label: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Classes defined in tailwind.config.ts
const buttonClasses = "py-3 px-4 rounded-[32px] bg-white border border-slate-200 flex items-center justify-evenly font-medium text-blue-400";

export const FancyButton = ({ label, className, ...props }: Props) => {
    return (
        <button className={classNames(buttonClasses, className)} {...props}>
            <GoDotFill className="text-blue-400" size={20} />
            {label}
        </button>
    )
}