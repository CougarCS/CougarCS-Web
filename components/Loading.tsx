import React from 'react';

const Loading = () => {
	return (
		<div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="sr-only"
    >Loading...</span
  >
</div>

	);
};

export default Loading;