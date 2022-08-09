import React from 'react'
import {ERROR404, PAGE_NOT_FOUND} from '../../constants/error';
import {ErrorWrapper} from './Error.styles';

export const Error404:React.FC = () => {

    return (
        <ErrorWrapper>
            {ERROR404}
            {'\u00A0'}
            {PAGE_NOT_FOUND}
        </ErrorWrapper>
    )
}

