/**
 *
 * ReelsDecoration
 *
 */

import React from 'react';
import RelativeSprite from 'components/RelativeSprite';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ReelsDecoration extends React.Component {
  render() {
    const { width, height, bet } = this.props;

    return (
      <React.Fragment>
        <RelativeSprite
          image="/3.png"
          xPos={0.5}
          yPos={7}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/2.png"
          xPos={0.5}
          yPos={15}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/1.png"
          xPos={0.5}
          yPos={23}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/2.png"
          xPos={0.5}
          yPos={31}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/3.png"
          xPos={0.5}
          yPos={39}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/3.png"
          xPos={68.5}
          yPos={7}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/2.png"
          xPos={68.5}
          yPos={15}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/1.png"
          xPos={68.5}
          yPos={23}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/2.png"
          xPos={68.5}
          yPos={31}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/3.png"
          xPos={68.5}
          yPos={39}
          wide={11}
          tall={7}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/deco2.png"
          xPos={16}
          yPos={40}
          wide={16}
          tall={5}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/deco2.png"
          xPos={32}
          yPos={40}
          wide={16}
          tall={5}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/deco2.png"
          xPos={48}
          yPos={40}
          wide={16}
          tall={5}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/gloom.png"
          xPos={20}
          yPos={7}
          wide={7.5}
          tall={6.5}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/gloom.png"
          xPos={36}
          yPos={7}
          wide={7.5}
          tall={6.5}
          width={width}
          height={height}
        />
        <RelativeSprite
          image="/gloom.png"
          xPos={52}
          yPos={7}
          wide={7.5}
          tall={6.5}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 3 ? '/deco1on.png' : '/deco1.png'}
          xPos={12}
          yPos={8.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 2 ? '/deco1on.png' : '/deco1.png'}
          xPos={12}
          yPos={16.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 1 ? '/deco1on.png' : '/deco1.png'}
          xPos={12}
          yPos={24.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 2 ? '/deco1on.png' : '/deco1.png'}
          xPos={12}
          yPos={32.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 3 ? '/deco1on.png' : '/deco1.png'}
          xPos={12}
          yPos={40.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 3 ? '/deco1on.png' : '/deco1.png'}
          xPos={65}
          yPos={8.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 2 ? '/deco1on.png' : '/deco1.png'}
          xPos={65}
          yPos={16.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 1 ? '/deco1on.png' : '/deco1.png'}
          xPos={65}
          yPos={24.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 2 ? '/deco1on.png' : '/deco1.png'}
          xPos={65}
          yPos={32.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
        <RelativeSprite
          image={bet >= 3 ? '/deco1on.png' : '/deco1.png'}
          xPos={65}
          yPos={40.5}
          wide={3}
          tall={4}
          width={width}
          height={height}
        />
      </React.Fragment>
    );
  }
}

export default ReelsDecoration;
