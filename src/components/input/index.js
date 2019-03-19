import React from 'react';
import * as styles from './styles';

const { Input, Wrapper } = styles;


export default ({ value, onChange, type = "text", ...rest }) => {
    return (
        <Wrapper>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </Wrapper>

    )
}