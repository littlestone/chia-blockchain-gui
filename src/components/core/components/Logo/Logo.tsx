import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Mint, Link } from '@mint/icons';

const StyledMint = styled(Mint)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Link
        target="_blank"
        href={'https://mintnet.work'}
      >
        <StyledMint />
      </Link>
    </Box>
  );
}
