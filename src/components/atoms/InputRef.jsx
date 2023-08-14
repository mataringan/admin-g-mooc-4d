//core
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const InputRef = forwardRef(function InputRef(
    {
        id,
        className = 'bg-neutral-6  border-net-2 px-6 py-[17px] text-body-2 font-normal focus:border-primary-1 ',
        type = 'text',
        placeholder = 'Your placeholder',
        ...rest
    },
    ref,
) {
    return (
        <input
            {...rest}
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            className={`${className}  w-full cursor-pointer  appearance-none border-2 font-monsterrat outline-none`}
        />
    );
});

InputRef.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default InputRef;
