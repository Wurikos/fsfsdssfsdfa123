import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "400px",
	"height": "400px",
	"background": "#3c1fbb"
};
const overrides = {};

const Adadad = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Adadad, { ...Box,
	defaultProps,
	overrides
});
export default Adadad;