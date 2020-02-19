import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0); //
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <botton
      css={css`
  background: rebeccapurple;
  border: none:
  color: white;
  font-size: 1.25rem;
   `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </botton>
  );
};
export default Wave;
