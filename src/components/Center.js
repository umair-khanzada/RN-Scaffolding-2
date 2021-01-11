import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import PropTypes, { number, string } from 'prop-types';
import { ThemeContext } from '../theme/ThemeProvider';
import { commonStyles } from '../Styles/CommonStyles';

function Center({
    direction,
    children,
    height,
    width,
    variant,
}) {
    return (
        <View
            style={commonStyles.centerFlex({ direction, height, width, containerColor: variant })}
        >
            {children}
        </View>
    )
}

Center.propTypes = {
    direction: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired || PropTypes.number.isRequired,
    width: PropTypes.string.isRequired || PropTypes.number.isRequired,
    variant: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']).isRequired,
};

Center.defaultProps = {
    /** Every Props is required so no need to set the default props! **/
}

export default Center;
