import * as React from 'react';

export interface INoProductsToshowProps {
}

export default class NoProductsToshow extends React.Component<INoProductsToshowProps> {
  public render() {
    return (
      <div>
        <h1>No Products To Show</h1>
      </div>
    );
  }
}
