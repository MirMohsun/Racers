import React, {FC} from "react";
import Svg, {Path} from "react-native-svg";

export const ArrowIcon: FC<{
    width?: number;
    height?: number;
    color?: string;
    isReflected?: boolean;
}> = ({width, height, color, isReflected}) => {
    return (
        <Svg
            width={width || 10}
            height={height || 16}
            viewBox="0 0 10 16"
            fill="none">
            <Path
                d={
                    !isReflected
                        ? "M8.72704 0.306029C8.63027 0.209022 8.51533 0.132058 8.38877 0.0795442C8.26222 0.0270307 8.12655 0 7.98954 0C7.85252 0 7.71685 0.0270307 7.5903 0.0795442C7.46375 0.132058 7.3488 0.209022 7.25204 0.306029L0.243703 7.31436C0.16645 7.39146 0.105161 7.48303 0.0633427 7.58384C0.0215248 7.68465 0 7.79272 0 7.90186C0 8.011 0.0215248 8.11907 0.0633427 8.21988C0.105161 8.32069 0.16645 8.41227 0.243703 8.48936L7.25204 15.4977C7.66037 15.906 8.3187 15.906 8.72704 15.4977C9.13537 15.0894 9.13537 14.431 8.72704 14.0227L2.61037 7.90603L8.73537 1.78103C9.13537 1.3727 9.13537 0.714362 8.72704 0.306029Z"
                        : "M0.341568 0.306029C0.43833 0.209022 0.553277 0.132058 0.67983 0.0795442C0.806382 0.0270307 0.942051 0 1.07907 0C1.21608 0 1.35175 0.0270307 1.4783 0.0795442C1.60486 0.132058 1.7198 0.209022 1.81657 0.306029L8.8249 7.31436C8.90215 7.39146 8.96344 7.48303 9.00526 7.58384C9.04708 7.68465 9.0686 7.79272 9.0686 7.90186C9.0686 8.011 9.04708 8.11907 9.00526 8.21988C8.96344 8.32069 8.90215 8.41227 8.8249 8.48936L1.81657 15.4977C1.40823 15.906 0.749901 15.906 0.341568 15.4977C-0.0667658 15.0894 -0.0667658 14.431 0.341568 14.0227L6.45823 7.90603L0.333234 1.78103C-0.0667658 1.3727 -0.0667658 0.714362 0.341568 0.306029Z"
                }
                fill={color || "#003DDA"}
            />
        </Svg>
    );
};
