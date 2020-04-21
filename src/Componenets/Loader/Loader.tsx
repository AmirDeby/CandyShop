import * as React from 'react';
import ReactLoaderSpinner from 'react-loader-spinner';

export interface ILoaderProps {
}

export default class Loader extends React.Component<ILoaderProps> {
    public render() {
        return (
            <ReactLoaderSpinner type="Circles" color="grey"  height={80} width={80} />
        );
    }
}
